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
      {/* The refraction field the bar's backdrop-filter samples. Turbulence
          makes the noise; the displacement maps push each backdrop pixel
          sideways by it, so text sliding under the bar bends instead of just
          going soft. Zero size, never painted directly — see the `glass`
          utility in globals.css for how it is wired in. */}
      <svg
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}
      >
        <filter
          id="prism"
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
          colorInterpolationFilters="sRGB"
        >
          {/* low frequency, one octave: big smooth blobs read as liquid.
              high frequency noise reads as frosted plastic instead. */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.0028 0.0055"
            numOctaves={1}
            seed={92}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="4.5" result="soft" />

          {/* Dispersion. One displacement pass gives a smear; three at
              different scales, each keeping a single channel, give the
              red/green/blue fringe that separates glass from a blur. */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="230"
            xChannelSelector="R"
            yChannelSelector="G"
            result="dispR"
          />
          <feColorMatrix
            in="dispR"
            type="matrix"
            result="chanR"
            values="1 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="185"
            xChannelSelector="R"
            yChannelSelector="G"
            result="dispG"
          />
          <feColorMatrix
            in="dispG"
            type="matrix"
            result="chanG"
            values="0 0 0 0 0
                    0 1 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="140"
            xChannelSelector="R"
            yChannelSelector="G"
            result="dispB"
          />
          <feColorMatrix
            in="dispB"
            type="matrix"
            result="chanB"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0"
          />

          {/* screen puts the three channels back together as one image */}
          <feBlend in="chanR" in2="chanG" mode="screen" result="rg" />
          <feBlend in="rg" in2="chanB" mode="screen" />
        </filter>
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
