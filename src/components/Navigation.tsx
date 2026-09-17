"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// `k` is both the hint printed beside the label and the key that opens it.
const links = [
  { path: "/", label: "home", k: "h" },
  { path: "/projects", label: "projects", k: "p" },
  { path: "/writing", label: "writing", k: "w" },
];

/* The refraction field the bar's backdrop-filter samples. Turbulence makes the
   noise; the displacement maps push each backdrop pixel sideways by it, so text
   sliding under the bar bends instead of just going soft.

   Everything here is in user-space pixels, which is why there are two of these.
   A wavelength of ~360px bends a wide bar beautifully and does nothing useful to
   a 335px-wide phone bar: under one full period the field is near constant, so
   the whole backdrop slides sideways as a block instead of rippling, and at
   scale 230 most of what it slides in from is outside the filter region, i.e.
   transparent. The narrow build shortens the wavelength and cuts the throw to
   suit the bar it actually has. See the `glass` utility in globals.css. */
function Prism({
  id,
  baseFrequency,
  blur,
  scales,
}: {
  id: string;
  baseFrequency: string;
  blur: number;
  // one per channel, red bent hardest — that spread is the fringe
  scales: [number, number, number];
}) {
  const channels = [
    { key: "R", scale: scales[0], matrix: "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" },
    { key: "G", scale: scales[1], matrix: "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" },
    { key: "B", scale: scales[2], matrix: "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" },
  ];

  return (
    <filter
      id={id}
      x="-15%"
      y="-15%"
      width="130%"
      height="130%"
      colorInterpolationFilters="sRGB"
    >
      {/* one octave of low-frequency noise reads as liquid. high-frequency
          noise reads as frosted plastic instead. */}
      <feTurbulence
        type="fractalNoise"
        baseFrequency={baseFrequency}
        numOctaves={1}
        seed={92}
        result="noise"
      />
      <feGaussianBlur in="noise" stdDeviation={blur} result="soft" />

      {/* Dispersion. One displacement pass gives a smear; three at different
          scales, each keeping a single channel, give the red/green/blue fringe
          that separates glass from a blur. */}
      {channels.map((c) => (
        <feDisplacementMap
          key={`d${c.key}`}
          in="SourceGraphic"
          in2="soft"
          scale={c.scale}
          xChannelSelector="R"
          yChannelSelector="G"
          result={`disp${c.key}`}
        />
      ))}
      {channels.map((c) => (
        <feColorMatrix
          key={`c${c.key}`}
          in={`disp${c.key}`}
          type="matrix"
          result={`chan${c.key}`}
          values={c.matrix}
        />
      ))}

      {/* screen puts the three channels back together as one image */}
      <feBlend in="chanR" in2="chanG" mode="screen" result="rg" />
      <feBlend in="rg" in2="chanB" mode="screen" />
    </filter>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  // the bar only takes on a stronger rim once you have actually left the top,
  // so it does not sit there as a hard line across the intro.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      // never steal a keystroke someone is typing, and never shadow a browser
      // shortcut — cmd+p is print, not projects.
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }

      const hit = links.find((l) => l.k === e.key.toLowerCase());
      if (hit && hit.path !== pathname) router.push(hit.path);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router, pathname]);

  return (
    <>
      {/* zero size, never painted directly */}
      <svg
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}
      >
        <Prism id="prism" baseFrequency="0.0028 0.0055" blur={4.5} scales={[230, 185, 140]} />
        <Prism id="prism-sm" baseFrequency="0.011 0.021" blur={2} scales={[62, 50, 38]} />
      </svg>

      {/* Sticky at every size: one glass object, rather than loose words
          floating over whatever happens to be scrolling behind them. */}
      <nav
        className={`glass sticky top-2 z-50 mb-10 rounded-full border transition-colors duration-300 sm:top-4 sm:mb-14
          ${scrolled ? "border-rule-strong" : "border-rule"}`}
      >
        <ul className="no-scrollbar flex items-center gap-x-0.5 overflow-x-auto px-2 py-2 font-mono text-[13px] tracking-tight sm:text-[14px]">
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path} className="shrink-0">
                <Link
                  href={link.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex items-baseline gap-1.5 rounded-md px-2 py-1.5 no-underline transition-colors duration-200 sm:px-2.5
                    ${isActive ? "text-ink" : "text-ink-faint hover:bg-surface-2/70 hover:text-ink"}`}
                >
                  <span
                    className={`hidden font-normal transition-opacity duration-200 sm:inline
                      ${isActive ? "opacity-70" : "opacity-35 group-hover:opacity-70"}`}
                  >
                    [{link.k}]
                  </span>
                  <span className={isActive ? "font-medium" : ""}>{link.label}</span>

                  {/* the underline grows from the left rather than fading in:
                      origin-left plus a scale-x transition, so it wipes across
                      the label when the tab becomes current. */}
                  <span
                    aria-hidden="true"
                    className={`absolute right-2 bottom-px left-2 h-px origin-left rounded-full bg-ink transition-transform duration-300 ease-out
                      ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
