"use client";

import { useEffect, useState } from "react";

// Ghana is GMT year-round — no daylight saving — but formatting through the
// zone keeps it correct regardless of where the visitor is.
const ZONE = "Africa/Accra";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: ZONE,
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const format = (date: Date) =>
  formatter.format(date).replace(" AM", "am").replace(" PM", "pm");

export default function LocalTime() {
  // Rendered empty on the server: the clock would disagree with the client and
  // trip a hydration mismatch.
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const now = new Date();
      setTime(format(now));
      // Wake on the next minute boundary rather than polling every second.
      const toNextMinute =
        60_000 - (now.getSeconds() * 1000 + now.getMilliseconds());
      timer = setTimeout(tick, toNextMinute + 50);
    };

    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <p className="text-sm text-muted">
      {/* Non-breaking space holds the line's height before the clock mounts. */}
      <span>{time ?? " "}</span>
      {time ? " in Accra, Ghana" : ""}
    </p>
  );
}
