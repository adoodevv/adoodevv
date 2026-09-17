import SectionHead from "@/components/SectionHead";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section>
      <SectionHead label="writing" />

      <ul className="mt-8 space-y-6">
        {publications.map((publication) => (
          <li key={publication.href} className="space-y-1.5">
            <div className="flex items-baseline justify-between gap-4">
              <a
                href={publication.href}
                target="_blank"
                rel="noreferrer"
                className="text-[15px] font-medium text-ink no-underline hover:underline"
              >
                {publication.title}
              </a>
              <span className="shrink-0 font-mono text-[12px] text-ink-faint tabular-nums">
                {publication.year}
              </span>
            </div>
            <p className="text-[14px] text-ink-faint">{publication.venue}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
