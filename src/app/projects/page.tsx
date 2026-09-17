import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Jonathan Adoo",
  description: "Robotics and backend systems I have built.",
};

export default function ProjectsPage() {
  return <Projects />;
}
