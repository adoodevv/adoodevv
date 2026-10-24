"use client";

import { useEffect, useRef, useState } from "react";
import LocalTime from "@/components/LocalTime";

const links = [
  { label: "github", href: "https://github.com/adoodevv" },
  { label: "x", href: "https://x.com/adoodevv" },
  { label: "linkedin", href: "https://www.linkedin.com/in/jonathan-adoo" },
  { label: "email", href: "mailto:adoojonathan412@gmail.com" },
];

function SpotifyMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-3.5 w-3.5 shrink-0 fill-current">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.28a.75.75 0 0 1-1.03.25c-2.82-1.72-6.38-2.11-10.56-1.16a.75.75 0 1 1-.33-1.46c4.58-1.05 8.5-.6 11.67 1.34.35.22.46.68.25 1.03zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.56-11.96-1.4a.94.94 0 1 1-.55-1.8c4.36-1.32 9.78-.68 13.49 1.6.44.27.58.85.31 1.29zm.13-3.41c-3.87-2.3-10.26-2.51-13.96-1.39a1.12 1.12 0 1 1-.65-2.15c4.25-1.29 11.3-1.04 15.76 1.6a1.12 1.12 0 1 1-1.15 1.94z" />
    </svg>
  );
}

type NowPlaying = {
  configured: boolean;
  isPlaying?: boolean;
  title?: string | null;
  artist?: string | null;
  songUrl?: string | null;
};

function Spotify() {
  const [track, setTrack] = useState<NowPlaying | null>(null);

  useEffect(() => {
    let alive = true;

    const load = async () => {
      try {
        const res = await fetch("/api/now-playing", { cache: "no-store" });
        const data = (await res.json()) as NowPlaying;
        if (alive) setTrack(data);
      } catch {
        // offline, or the route is down. the line just stays absent.
      }
    };

    load();
    const id = setInterval(load, 30_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  // Until the credentials are set the route reports `configured: false`, and
  // this renders nothing at all rather than an empty placeholder.
  if (!track?.configured || !track.title) return null;

  const label = `${track.isPlaying ? "now playing" : "last played"} · ${track.title}`;

  return (
    <a
      href={track.songUrl ?? "#"}
      target="_blank"
      rel="noreferrer"
      title={track.artist ? `${track.title} — ${track.artist}` : track.title}
      className="inline-flex max-w-full items-center gap-2 font-mono text-[12px] text-ink-faint no-underline transition-colors hover:text-ink"
    >
      <SpotifyMark />
      <span className="truncate">{label}</span>
    </a>
  );
}

// The route increments on read, so it must be called exactly once per page
// load. A module-level flag rather than a ref: React runs effects twice in
// development's strict mode, and a ref resets with the component.
let counted = false;

function VisitorCount() {
  const [visits, setVisits] = useState<number | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current || counted) return;
    started.current = true;
    counted = true;

    fetch("/api/visit", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: { configured: boolean; visits?: number }) => {
        if (data.configured && typeof data.visits === "number") setVisits(data.visits);
      })
      .catch(() => {});
  }, []);

  if (visits === null) return null;

  return (
    <p className="font-mono text-[12px] text-ink-faint tabular-nums">
      visitor {visits.toLocaleString()}
    </p>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 pb-10">
      <div className="space-y-2">
        <Spotify />
        <VisitorCount />
      </div>

      {/* The arm. Drawn by scripts/make-arm-gif.py: it goes for a cube, the
          cube walks off, and things go about as well as robotics usually
          does. 390x210 at 3x, shown at 2x on phones so the pixels stay
          whole. Its bottom edge is the ground, so it stands on the rule. */}
      <div
        aria-hidden="true"
        className="pointer-events-none mx-auto mt-14 w-[260px] max-w-full select-none sm:w-[390px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/arm.gif"
          alt=""
          width={390}
          height={210}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2 border-t border-rule pt-5">
        <nav className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[13px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-ink-faint no-underline transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <LocalTime />
      </div>
    </footer>
  );
}
