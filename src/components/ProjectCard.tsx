import Image from "next/image";
import type { Project } from "@/data/projects";

function LinkIcon({ type }: { type?: Project["links"][number]["type"] }) {
  if (type === "youtube") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="mt-0.5 h-3.5 w-3.5 shrink-0 fill-current"
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
        className="mt-0.5 h-3.5 w-3.5 shrink-0 fill-current"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }

  return (
    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-current" />
  );
}

function YouTubeEmbed({ id }: { id: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-zinc-900">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="Project demo video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <h3 className="mb-10 text-2xl font-semibold tracking-tight text-foreground">
        {project.title}
      </h3>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col gap-4 lg:w-[42%] lg:shrink-0">
          {project.images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-video w-full overflow-hidden rounded-sm bg-zinc-900"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
          ))}

          {project.youtubeId ? (
            <YouTubeEmbed id={project.youtubeId} />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center rounded-sm border border-zinc-800 bg-zinc-950 text-sm text-muted">
              Demo video coming soon
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 lg:flex-1">
          <div className="space-y-5 text-base leading-relaxed">
            {project.description.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <p className="text-sm text-muted">{project.year}</p>

          <div className="space-y-3">
            <p className="text-xs font-medium tracking-widest text-muted uppercase">
              Links
            </p>
            <ul className="space-y-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2.5 text-sm no-underline hover:underline"
                  >
                    <LinkIcon type={link.type} />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
