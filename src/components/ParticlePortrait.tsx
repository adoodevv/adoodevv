"use client";

import { useEffect, useRef } from "react";

// The only profile image still in /public. It is not rendered anywhere on the
// site — it exists solely as the sampling source for this component.
const SRC = "/profile-bw.png";

/** Particles per CSS pixel of canvas, so the stipple reads the same at any size. */
const DENSITY = 0.2;
const MIN_COUNT = 12000;
const MAX_COUNT = 70000;

const SETTLE_DELAY = 0.75; // s — how much the arrivals are staggered
const SETTLE_DUR = 1.35; // s — flight time of a single particle
const SCATTER_SPREAD = 0.7; // how far outside the frame particles start

const BREATH_SPEED = 0.55; // rad/s of the global expand/contract
const BREATH_SCALE = 0.014; // fraction of the portrait's radius
const SHIMMER_SPEED = 1.1; // rad/s of the per-particle drift
const SHIMMER_AMP = 0.004; // fraction of the canvas, in device px

const PUSH_RADIUS = 0.23; // reach of the cursor well, as a fraction of the canvas
const PUSH_DIST = 0.058; // furthest a particle is shoved, same fraction
const PUSH_RESPONSE = 15; // per-second spring rate (~0.22 per frame at 60fps)

// Shimmer runs off a lookup table — 40k Math.sin calls a frame is not free.
const WAVE_SIZE = 1024;
const WAVE_MASK = WAVE_SIZE - 1;
const WAVE = new Float32Array(WAVE_SIZE);
for (let i = 0; i < WAVE_SIZE; i++) {
  WAVE[i] = Math.sin((i / WAVE_SIZE) * Math.PI * 2);
}

const easeOutCubic = (p: number) => 1 - (1 - p) ** 3;

export default function ParticlePortrait() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Little-endian machines pack ImageData as 0xAABBGGRR, big-endian as 0xRRGGBBAA.
    const probe = new Uint32Array(1);
    new Uint8Array(probe.buffer)[0] = 1;
    const littleEndian = probe[0] === 1;
    const A_SHIFT = littleEndian ? 24 : 0;
    const RGB_MASK = littleEndian ? 0x00ffffff : 0xffffff00;

    let raf = 0;
    let disposed = false;
    let image: HTMLImageElement | null = null;

    // Render buffer, in device pixels
    let W = 0;
    let H = 0;
    let cssArea = 0;
    let imageData: ImageData | null = null;
    let buf: Uint32Array | null = null;

    // Particle state (flat arrays — one entry per particle)
    let n = 0;
    let tx = new Float32Array(0); // resting target
    let ty = new Float32Array(0);
    let sx = new Float32Array(0); // scatter origin
    let sy = new Float32Array(0);
    let curl = new Float32Array(0); // perpendicular arc during the flight in
    let delay = new Float32Array(0);
    let phase = new Int32Array(0); // shimmer offset into WAVE
    let driftX = new Float32Array(0);
    let driftY = new Float32Array(0);
    let alpha = new Float32Array(0);
    let offX = new Float32Array(0); // live displacement from the cursor well
    let offY = new Float32Array(0);
    let cx = 0;
    let cy = 0;

    // Pointer state. `wellActive` stays on past pointerleave so the springs
    // have time to relax instead of snapping back.
    let pointerX = -1e5;
    let pointerY = -1e5;
    let pointerInside = false;
    let wellActive = false;

    let elapsed = 0;
    let last = 0;
    let visible = false;

    /** Rejection-sample the portrait so particle density follows its brightness. */
    const build = () => {
      if (!image || !W || !H) return;

      const size = Math.min(image.width, 512);
      const off = document.createElement("canvas");
      off.width = size;
      off.height = size;
      const offCtx = off.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;
      offCtx.drawImage(image, 0, 0, size, size);
      const px = offCtx.getImageData(0, 0, size, size).data;

      // The source is square; fit it into the canvas without distortion.
      const fit = Math.min(W, H);
      const originX = (W - fit) / 2;
      const originY = (H - fit) / 2;
      const scale = fit / size;

      // Count follows CSS area so the look holds on HiDPI without the cost.
      const want = Math.round(
        Math.max(MIN_COUNT, Math.min(MAX_COUNT, cssArea * DENSITY))
      );

      tx = new Float32Array(want);
      ty = new Float32Array(want);
      sx = new Float32Array(want);
      sy = new Float32Array(want);
      curl = new Float32Array(want);
      delay = new Float32Array(want);
      phase = new Int32Array(want);
      driftX = new Float32Array(want);
      driftY = new Float32Array(want);
      alpha = new Float32Array(want);
      offX = new Float32Array(want);
      offY = new Float32Array(want);

      let placed = 0;
      let guard = 0;
      let sumX = 0;
      let sumY = 0;

      while (placed < want && guard < want * 60) {
        guard++;
        const ix = Math.random() * size;
        const iy = Math.random() * size;
        const i = ((iy | 0) * size + (ix | 0)) * 4;
        if (px[i + 3] < 128) continue; // outside the silhouette

        const lum = px[i] / 255;
        if (Math.random() > lum) continue; // brighter areas draw more particles

        const x = originX + ix * scale;
        const y = originY + iy * scale;
        tx[placed] = x;
        ty[placed] = y;
        sumX += x;
        sumY += y;

        const angle = Math.random() * Math.PI * 2;
        const radius = (0.5 + Math.random() * SCATTER_SPREAD) * fit;
        sx[placed] = W / 2 + Math.cos(angle) * radius;
        sy[placed] = H / 2 + Math.sin(angle) * radius;

        curl[placed] = (Math.random() - 0.5) * 0.5;
        delay[placed] = Math.random() * SETTLE_DELAY;
        phase[placed] = (Math.random() * WAVE_SIZE) | 0;
        const drift = Math.random() * Math.PI * 2;
        driftX[placed] = Math.cos(drift);
        driftY[placed] = Math.sin(drift);
        alpha[placed] = (0.55 + 0.45 * lum) * 255;
        placed++;
      }

      n = placed;
      cx = placed ? sumX / placed : W / 2;
      cy = placed ? sumY / placed : H / 2;
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.min(Math.round(rect.width * dpr), 900);
      const h = Math.min(Math.round(rect.height * dpr), 900);
      if (w === W && h === H) return;

      W = w;
      H = h;
      cssArea = rect.width * rect.height;
      canvas.width = W;
      canvas.height = H;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      imageData = ctx.createImageData(W, H);
      buf = new Uint32Array(imageData.data.buffer);
      build();
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!buf || !imageData || !n) return;
      // Hold the reveal until the portrait is on screen, and idle once it leaves.
      if (!visible) {
        last = 0;
        return;
      }

      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      elapsed += dt;

      buf.fill(RGB_MASK);

      const fit = Math.min(W, H);
      const breath = 1 + Math.sin(elapsed * BREATH_SPEED) * BREATH_SCALE;
      const shimmer = SHIMMER_AMP * fit;
      const shimmerT =
        ((elapsed * SHIMMER_SPEED * WAVE_SIZE) / (Math.PI * 2)) | 0;
      const pushR = PUSH_RADIUS * fit;
      const pushR2 = pushR * pushR;
      const pushDist = PUSH_DIST * fit;
      const response = 1 - Math.exp(-PUSH_RESPONSE * dt);
      const settled = reduceMotion || elapsed > SETTLE_DELAY + SETTLE_DUR;
      let maxOffset = 0;

      for (let i = 0; i < n; i++) {
        // Resting position: the target, breathing about the portrait's centroid.
        let x = cx + (tx[i] - cx) * breath;
        let y = cy + (ty[i] - cy) * breath;

        const wobble = WAVE[(phase[i] + shimmerT) & WAVE_MASK] * shimmer;
        x += driftX[i] * wobble;
        y += driftY[i] * wobble;

        // Flight in from the scattered start.
        if (!settled) {
          const p = Math.min(1, Math.max(0, (elapsed - delay[i]) / SETTLE_DUR));
          if (p < 1) {
            const e = easeOutCubic(p);
            const dx = x - sx[i];
            const dy = y - sy[i];
            const arc = Math.sin(Math.PI * e) * curl[i];
            x = sx[i] + dx * e - dy * arc;
            y = sy[i] + dy * e + dx * arc;
          }
        }

        // Cursor well: shove particles outward, then let each spring back on its
        // own. The lag is what makes the hole soft and irregular at its edge.
        if (wellActive) {
          const dx = x - pointerX;
          const dy = y - pointerY;
          let wantX = 0;
          let wantY = 0;
          if (dx > -pushR && dx < pushR && dy > -pushR && dy < pushR) {
            const d2 = dx * dx + dy * dy;
            if (d2 < pushR2 && d2 > 1) {
              const d = Math.sqrt(d2);
              const push = (((pushR - d) / pushR) * pushDist) / d;
              wantX = dx * push;
              wantY = dy * push;
            }
          }
          const ox = offX[i] + (wantX - offX[i]) * response;
          const oy = offY[i] + (wantY - offY[i]) * response;
          offX[i] = ox;
          offY[i] = oy;
          x += ox;
          y += oy;
          const mag = Math.abs(ox) + Math.abs(oy);
          if (mag > maxOffset) maxOffset = mag;
        }

        // Additive bilinear plot into the RGBA buffer.
        const xi = x | 0;
        const yi = y | 0;
        if (xi < 0 || yi < 0 || xi >= W - 1 || yi >= H - 1) continue;
        const fx = x - xi;
        const fy = y - yi;
        const a = alpha[i];
        const ax = a * fx;
        const an = a - ax; // a * (1 - fx)
        const idx = yi * W + xi;

        let v = ((buf[idx] >>> A_SHIFT) & 255) + an * (1 - fy);
        buf[idx] = ((v > 255 ? 255 : v) << A_SHIFT) | RGB_MASK;
        v = ((buf[idx + 1] >>> A_SHIFT) & 255) + ax * (1 - fy);
        buf[idx + 1] = ((v > 255 ? 255 : v) << A_SHIFT) | RGB_MASK;
        v = ((buf[idx + W] >>> A_SHIFT) & 255) + an * fy;
        buf[idx + W] = ((v > 255 ? 255 : v) << A_SHIFT) | RGB_MASK;
        v = ((buf[idx + W + 1] >>> A_SHIFT) & 255) + ax * fy;
        buf[idx + W + 1] = ((v > 255 ? 255 : v) << A_SHIFT) | RGB_MASK;
      }

      // Let the well go idle once the springs have fully unwound.
      if (!pointerInside && maxOffset < 0.05) wellActive = false;

      ctx.putImageData(imageData, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width) * W;
      pointerY = ((event.clientY - rect.top) / rect.height) * H;
      pointerInside = true;
      wellActive = true;
    };

    const onPointerLeave = () => {
      pointerInside = false;
      pointerX = -1e5;
      pointerY = -1e5;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);

    const inView = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );
    inView.observe(host);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    canvas.addEventListener("pointercancel", onPointerLeave);

    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      if (disposed) return;
      image = img;
      resize();
      if (!n) build(); // resize() no-ops when the box was already measured
      raf = requestAnimationFrame(frame);
    };
    img.src = SRC;

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      inView.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("pointercancel", onPointerLeave);
    };
  }, []);

  return (
    <div ref={hostRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="h-full w-full touch-none"
        role="img"
        aria-label="Jonathan Adoo, drawn as a field of particles"
      />
    </div>
  );
}
