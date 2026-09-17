import Hero from "@/components/Hero";
import ProjectRow from "@/components/ProjectRow";
import SectionHead from "@/components/SectionHead";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";

const featured = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <div className="space-y-14">
      <Hero />

      <section>
        <SectionHead label="selected work" href="/projects" cta="all projects" />
        <ul className="mt-6 space-y-8">
          {featured.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </ul>
      </section>

      <section>
        <SectionHead label="writing" href="/writing" cta="all writing" />
        <ul className="mt-6 space-y-6">
          {publications.map((publication) => (
            <li key={publication.href}>
              <a
                href={publication.href}
                target="_blank"
                rel="noreferrer"
                className="block no-underline"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[15px] font-medium text-ink hover:underline">
                    {publication.title}
                  </h3>
                  <span className="shrink-0 font-mono text-[12px] text-ink-faint tabular-nums">
                    {publication.year}
                  </span>
                </div>
                <p className="mt-1 text-[14px] text-ink-faint">{publication.venue}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
