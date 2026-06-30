import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="px-6 py-12">
      <h2 className="mb-16 text-3xl font-bold tracking-tight">Projects</h2>

      <div className="space-y-24">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
