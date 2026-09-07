import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section className="pt-12 pb-8">
      <h2 className="mb-8 border-b border-zinc-800 pb-3 text-xs font-medium tracking-widest text-muted uppercase">
        Writing
      </h2>

      <ul className="space-y-6">
        {publications.map((publication) => (
          <li key={publication.href} className="space-y-1.5">
            <div className="flex items-baseline justify-between gap-4">
              <a
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-foreground no-underline hover:underline"
              >
                {publication.title}
              </a>
              <span className="shrink-0 text-sm text-muted tabular-nums">
                {publication.year}
              </span>
            </div>
            <p className="text-sm text-muted">{publication.venue}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
