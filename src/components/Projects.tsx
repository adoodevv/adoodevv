import ProjectCard from "@/components/ProjectCard";
import SectionHead from "@/components/SectionHead";
import { projects } from "@/data/projects";

const groups = [
  { kind: "robotics" as const, heading: "robotics" },
  { kind: "software" as const, heading: "software" },
];

export default function Projects() {
  return (
    <section className="space-y-14">
      {groups.map(({ kind, heading }) => {
        const items = projects.filter((project) => project.kind === kind);
        if (!items.length) return null;

        return (
          <div key={kind}>
            <SectionHead label={heading} />
            <div className="mt-8 space-y-14">
              {items.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
