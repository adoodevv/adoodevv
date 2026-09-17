import type { Project } from "@/data/projects";

// The home-page form of a project: one line, no media. The full card lives on
// /projects.
export default function ProjectRow({ project }: { project: Project }) {
  const href = project.links[0]?.href;

  return (
    <li className="group">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block no-underline"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-mono text-[14px] text-ink transition-colors group-hover:underline">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-[12px] text-ink-faint tabular-nums">
            {project.year}
          </span>
        </div>
        <p className="mt-1 text-[14.5px] leading-relaxed text-ink-soft">
          {/* the opening sentence only — the card carries the rest */}
          {project.description.split(". ")[0]}.
        </p>
        <p className="mt-1.5 font-mono text-[11.5px] text-ink-faint">
          {project.stack.slice(0, 4).join(" · ")}
        </p>
      </a>
    </li>
  );
}
