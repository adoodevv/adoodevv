"use client";

import { useEffect, useState } from "react";

// Ghana is GMT year-round — no daylight saving — but formatting through the
// zone keeps it correct regardless of where the visitor is.
const ZONE = "Africa/Accra";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: ZONE,
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export default function LocalTime() {
  // Empty on the server: the clock would disagree with the client and trip a
  // hydration mismatch.
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const now = new Date();
      setTime(formatter.format(now));
      // Wake on the next minute boundary rather than polling every second.
      const toNextMinute =
        60_000 - (now.getSeconds() * 1000 + now.getMilliseconds());
      timer = setTimeout(tick, toNextMinute + 50);
    };

    tick();
    return () => clearTimeout(timer);
  }, []);

  if (!time) return null;

  return (
    <span className="shrink-0 font-mono text-[12px] text-ink-faint tabular-nums">
      {time} gmt
    </span>
  );
}
