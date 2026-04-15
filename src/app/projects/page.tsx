'use client'

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FadeUpAnimation from "@/components/FadeUp";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Differential Drive Robot",
    description: "ROS 2-based differential drive robot simulated in Gazebo with autonomous navigation and sensor integration.",
    image: "/portfolio/gazebo.png",
    tags: ["ROS 2", "Gazebo", "C++", "Python"],
    link: "https://youtu.be/QhYGT-Zu-14",
    github: "https://github.com/adoodevv/diff_drive_robot",
    category: "Robotics",
  },
  {
    title: "Mikrobot Academy",
    description: "Full-featured website for a robotics academy with course listings, student portals, and a fully responsive design.",
    image: "/portfolio/mikrobot.png",
    tags: ["Next.js", "React", "PostgreSQL"],
    link: "https://mikrobotacademy.com/",
    github: null,
    category: "Web Development",
  },
  {
    title: "Snipp",
    description: "A platform for creating and sharing code snippets with a community of developers. Has AI-powered code generation, snippet search, and code review features.",
    image: "/portfolio/snipp.png",
    tags: ["Next.js","Gemini AI", "React", "Tailwind CSS"],
    link: "https://snipp-orpin.vercel.app/",
    github: null,
    category: "Web Development",
  },
  {
    title: "Self Balancing Robot",
    description: "Self balancing robot with PID control and Complimentary Filter for IMU data",
    image: "/portfolio/self_balancing_robot.png",
    tags: ["Arduino", "C++", "Python"],
    link: "https://github.com/adoodevv/self_balancing_robot",
    github: "https://github.com/adoodevv/self_balancing_robot",
    category: "Robotics",
  },
  {
    title: "Mind2Matter",
    description: "E-commerce platform connecting creative minds with resources to turn ideas into tangible reality.",
    image: "/portfolio/mind2matter.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://mind2matter.vercel.app/",
    github: null,
    category: "Web Development",
  },
  {
    title: "Self-Driving Car – World Robot Olympiad (WRO) 2025",
    description: "Self-driving car built for the World Robot Olympiad (WRO) 2025, my team and I built a robot that can navigate an obstacle course with sensors and a camera.",
    image: "/portfolio/self_driving_car.jpg",
    tags: ["Arduino", "C++", "Python", "ROS"],
    link: "https://youtu.be/rba5PXQgKKQ",
    github: "https://github.com/codecraftersknust/team44",
    category: "Robotics",
  },
  {
    title: "YARA Website",
    description: "Modern, responsive website for YARA - clean design with intuitive navigation and strong brand presentation.",
    image: "/portfolio/yara.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://yara-website-kappa.vercel.app/",
    github: null,
    category: "Web Development",
  },
];

const categories = ["All", "Web Development", "Robotics"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#FCFCF7]">
      {/* ─── Header ─── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-12">
        <FadeUpAnimation>
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Work</span>
            <h1 className="text-4xl md:text-5xl text-[#1a1a1a] mt-2 mb-4">All Projects</h1>
            <p className="text-[#666] text-base leading-relaxed">
              A collection of things I&apos;ve built - from production web applications to autonomous robotic systems.
            </p>
            <div className="w-12 h-1 bg-[#006366] mt-5 rounded-full" />
          </div>
        </FadeUpAnimation>

        {/* Category filter */}
        <FadeUpAnimation delay={0.1}>
          <div className="flex flex-wrap gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  active === cat
                    ? "bg-[#006366] text-white shadow-md"
                    : "bg-white border border-[#DAE3BB] text-[#666] hover:border-[#006366] hover:text-[#006366]"
                }`}
              >
                {cat}
                <span className={`ml-2 text-[10px] ${active === cat ? "text-[#AEBE89]" : "text-[#aaa]"}`}>
                  {cat === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </FadeUpAnimation>
      </div>

      {/* ─── Grid ─── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, index) => (
            <FadeUpAnimation key={project.title} delay={index * 0.06}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-[#DAE3BB]/50 hover:border-[#006366]/20 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                {/* Image */}
                <div className="relative h-52 overflow-hidden shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#006366] text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-[#006366] transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] font-semibold bg-[#DAE3BB]/50 text-[#006366] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto">
                    {project.link ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006366] hover:text-[#005255] transition-colors duration-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </Link>
                    ) : (
                      <span className="text-xs text-[#bbb] font-semibold">Private / In Progress</span>
                    )}
                    {project.github && (
                      <>
                        <span className="text-[#ddd]">·</span>
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#666] hover:text-[#1a1a1a] transition-colors duration-200"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                          Source
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </FadeUpAnimation>
          ))}
        </div>
      </div>

      <section className="bg-[#1a1a1a] py-20">
        <FadeUpAnimation>
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-3">Have a project in mind?</h2>
            <p className="text-white/50 text-sm max-w-md mx-auto mb-10 leading-relaxed">
              I&apos;m always open to interesting work. Let&apos;s build something great together.
            </p>
            <Link
              href="mailto:adoojonathan412@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#DAE3BB] text-[#006366] font-bold text-xs tracking-wide rounded-lg hover:bg-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              GET IN TOUCH
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeUpAnimation>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-8 bg-[#1a1a1a]">
        <Footer />
      </section>
    </div>
  );
}
