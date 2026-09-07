import Image from "next/image";
import type { Project } from "@/data/projects";

function LinkIcon({ type }: { type?: Project["links"][number]["type"] }) {
  if (type === "youtube") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-3.5 w-3.5 shrink-0 fill-current"
      >
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1 31.5 31.5 0 0 0 .6-5.8 31.5 31.5 0 0 0-.6-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-3.5 w-3.5 shrink-0 fill-current"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }

  return <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-current" />;
}

export default function ProjectCard({ project }: { project: Project }) {
  const hasMedia = Boolean(project.image || project.youtubeId);

  return (
    <article className="space-y-5">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="text-lg font-semibold tracking-tight text-foreground">
          {project.title}
        </h4>
        <span className="shrink-0 text-sm text-muted tabular-nums">
          {project.year}
        </span>
      </div>

      <p className="text-xs text-muted">{project.stack.join(" · ")}</p>

      <p className="text-[15px] leading-relaxed">{project.description}</p>

      {hasMedia ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {project.image ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-zinc-900">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 340px"
              />
            </div>
          ) : null}

          {project.youtubeId ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-zinc-900">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={`${project.title} demo video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          ) : null}
        </div>
      ) : null}

      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {project.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm no-underline hover:underline"
            >
              <LinkIcon type={link.type} />
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
