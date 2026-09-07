import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const groups = [
  { kind: "software" as const, heading: "Software" },
  { kind: "robotics" as const, heading: "Robotics" },
];

export default function Projects() {
  return (
    <section className="pb-4">
      <div className="space-y-16">
        {groups.map(({ kind, heading }) => {
          const items = projects.filter((project) => project.kind === kind);
          if (!items.length) return null;

          return (
            <div key={kind}>
              <h2 className="mb-8 border-b border-zinc-800 pb-3 text-xs font-medium tracking-widest text-muted uppercase">
                {heading}
              </h2>

              <div className="space-y-14">
                {items.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
