import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import FadeUpAnimation from "@/components/FadeUp";
import { FaGithub, FaArrowRight, FaYoutube } from "react-icons/fa";
import { Cpu, Radio, Eye, Wrench, Navigation, Zap, CornerDownRight } from "lucide-react";

export const metadata = {
  title: "Robotics | adoodevv",
  description: "Robotics projects, research, and engineering by Jonathan Darko Adoo - ROS 2, Gazebo, Arduino, and beyond.",
};

const roboticsProjects = [
  {
    title: "Differential Drive Robot",
    subtitle: "ROS 2 · Gazebo Simulation",
    description:
      "A fully simulated differential drive mobile robot built with ROS 2. The robot features a custom URDF model, velocity controllers, laser scan sensor simulation, and autonomous navigation using the Nav2 stack in Gazebo. Built as a foundation for exploring autonomous mobile robotics.",
    image: "/portfolio/gazebo.png",
    tags: ["ROS 2", "Gazebo", "C++", "Python", "URDF", "Nav2"],
    github: "https://github.com/adoodevv/diff_drive_robot",
    live: null,
    status: "Completed",
  },
  {
    title: "Mikrobot Academy Platform",
    subtitle: "Teaching Robotics · Web Platform",
    description:
      "Designed and built the digital home for Mikrobot Academy - a robotics training institution. The platform supports course listings, student enrolment, and serves as a resource hub for the next generation of robotics engineers in Ghana.",
    image: "/portfolio/mikrobot.png",
    tags: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    github: null,
    live: "https://mikrobotacademy.com/",
    status: "Live",
  },
  {
    title: "Self Balancing Robot",
    subtitle: "Arduino · C++ · Python",
    description:
      "A self-balancing robot built with Arduino and C++. The robot features a custom PID controller and complimentary filter for IMU data.",
    image: "/portfolio/self_balancing_robot.png",
    tags: ["Arduino", "C++", "Python"],
    github: "https://github.com/adoodevv/self_balancing_robot",
    live: null,
    status: "In Progress",
  },
  {
    title: "Self-Driving Car - World Robot Olympiad (WRO) 2025",
    subtitle: "Arduino · C++ · Python · ROS",
    description:
      "A self-driving car built for the World Robot Olympiad (WRO) 2025, my team and I built a robot that can navigate an obstacle course with sensors and a camera.",
    image: "/portfolio/self_driving_car.jpg",
    tags: ["Arduino", "C++", "Python", "ROS", "OpenCV"],
    github: "https://github.com/codecraftersknust/team44",
    live: null,
    status: "Completed",
  },
];

const skills = [
  {
    icon: Radio,
    name: "Robot Operating System",
    detail: "ROS 2 (Humble / Jazzy) - nodes, topics, services, actions, launch files",
  },
  {
    icon: Navigation,
    name: "Simulation",
    detail: "Gazebo Classic & Ignition - sensor plugins, differential drive, URDF/SDF",
  },
  {
    icon: Cpu,
    name: "Embedded Systems",
    detail: "Arduino - motor control, sensor interfacing, servo and PWM",
  },
  {
    icon: Eye,
    name: "Computer Vision",
    detail: "OpenCV with Python — edge detection, colour filtering, object tracking",
  },
  {
    icon: Wrench,
    name: "Mechanical Design",
    detail: "Autodesk Fusion 360 - 3D modelling, assemblies, and 3D-printable parts",
  },
  {
    icon: Zap,
    name: "C++ & Python",
    detail: "C++ for ROS nodes and control loops; Python for scripting and automation",
  },
];

const learning = [
  { item: "SLAM (Simultaneous Localisation and Mapping) with Nav2" },
  { item: "Reinforcement learning for robot locomotion" },
  { item: "Manipulator kinematics and MoveIt 2" },
  { item: "ROS 2 real-hardware deployment on Raspberry Pi and NVDIA Jetson Nano" },
  { item: "Forward and inverse kinematics" },
];

export default function RoboticsPage() {
  return (
    <div className="min-h-screen bg-[#FCFCF7]">

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-[#006366] pt-36 pb-24">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#AEBE89]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <FadeUpAnimation>
            <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Discipline</span>
            <h1 className="text-4xl md:text-6xl text-white mt-3 mb-5 leading-[1.1]">
              Robotics &<br />Autonomous Systems
            </h1>
            <p className="text-[#DAE3BB]/75 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              I design and build robotic systems - from physical hardware with Arduino to full ROS 2 software stacks and Gazebo simulations. Robotics is where my love of engineering began.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#DAE3BB] text-[#006366] font-bold text-xs tracking-wide rounded-lg hover:bg-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              >
                SEE MY WORK
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://github.com/adoodevv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#DAE3BB]/40 text-[#DAE3BB] font-bold text-xs tracking-wide rounded-lg hover:border-white hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaGithub className="w-4 h-4" />
                GITHUB
              </Link>
            </div>
          </FadeUpAnimation>

          {/* Quick stat pills */}
          <FadeUpAnimation delay={0.2}>
            <div className="flex flex-wrap gap-4 mt-12">
              {[
                { label: "6+ Robots Designed" },
                { label: "ROS 2 Certified Knowledge" },
                { label: "Mikrobot Academy Instructor" },
                { label: "70+ Students Taught" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="px-4 py-2 rounded-full bg-white/10 text-[#DAE3BB] text-xs font-semibold tracking-wide border border-white/10"
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </FadeUpAnimation>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <FadeUpAnimation>
            <div className="text-center mb-14">
              <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Work</span>
              <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mt-2 mb-3">Robotics Projects</h2>
              <p className="text-[#666] max-w-md mx-auto text-sm leading-relaxed">
                Projects that sit at the intersection of software, hardware, and real-world problem solving.
              </p>
              <div className="w-12 h-1 bg-[#006366] mx-auto mt-5 rounded-full" />
            </div>
          </FadeUpAnimation>

          <div className="flex flex-col gap-10">
            {roboticsProjects.map((project, i) => (
              <FadeUpAnimation key={project.title} delay={i * 0.12}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-[#DAE3BB]/50 hover:border-[#006366]/20 hover:shadow-2xl transition-all duration-500">
                  <div className="grid md:grid-cols-5">
                    {/* Image */}
                    <div className="md:col-span-2 relative h-56 md:h-auto overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span
                        className={`absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-sm ${
                          project.status === "Live"
                            ? "bg-[#AEBE89] text-white"
                            : "bg-white/90 text-[#006366]"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="md:col-span-3 p-7 md:p-9 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-bold text-[#AEBE89] tracking-widest uppercase mb-1">
                          {project.subtitle}
                        </p>
                        <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#006366] transition-colors duration-300 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-[#666] text-sm leading-loose mb-5">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-[11px] font-semibold bg-[#DAE3BB]/50 text-[#006366] rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {project.live && (
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006366] hover:text-[#005255] transition-colors"
                          >
                            <FaArrowRight className="w-3 h-3 rotate-[-45deg]" />
                            Live Site
                          </Link>
                        )}
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#666] hover:text-[#1a1a1a] transition-colors"
                          >
                            <FaGithub className="w-3.5 h-3.5" />
                            View Source
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUpAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Skills ─── */}
      <section className="section-padding bg-[#f5f6ef]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <FadeUpAnimation>
            <div className="text-center mb-14">
              <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Capabilities</span>
              <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mt-2">Robotics Skill Set</h2>
              <div className="w-12 h-1 bg-[#006366] mx-auto mt-5 rounded-full" />
            </div>
          </FadeUpAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, i) => (
              <FadeUpAnimation key={skill.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-[#DAE3BB]/50 p-6 hover:border-[#006366]/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#006366]/10 flex items-center justify-center shrink-0">
                      <skill.icon className="w-5 h-5 text-[#006366]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1a1a1a] mb-1">{skill.name}</h3>
                      <p className="text-xs text-[#777] leading-relaxed">{skill.detail}</p>
                    </div>
                  </div>
                </div>
              </FadeUpAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Currently Learning ─── */}
      <section className="section-padding bg-[#FCFCF7]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl mx-auto">
            <FadeUpAnimation>
              <div className="text-center mb-12">
                <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Growth</span>
                <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mt-2">Currently Exploring</h2>
                <p className="text-[#666] text-sm mt-3 leading-relaxed">
                  Areas I&apos;m actively studying and building in right now.
                </p>
                <div className="w-12 h-1 bg-[#006366] mx-auto mt-5 rounded-full" />
              </div>
            </FadeUpAnimation>

            <div className="flex flex-col gap-3">
              {learning.map((l, i) => (
                <FadeUpAnimation key={l.item} delay={i * 0.08}>
                  <div className="flex items-center gap-4 bg-white rounded-xl border border-[#DAE3BB]/50 px-6 py-4">
                    <CornerDownRight className="w-4 h-4 text-[#006366]" />
                    <span className="text-sm font-semibold text-[#444]">{l.item}</span>
                  </div>
                </FadeUpAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Teaching / Community ─── */}
      <section className="section-padding bg-[#f5f6ef]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <FadeUpAnimation>
            <div className="bg-[#006366] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Community</span>
                <h3 className="text-2xl md:text-3xl text-white mt-2 mb-3">Teaching the Next Generation</h3>
                <p className="text-[#DAE3BB]/75 text-sm leading-relaxed max-w-lg">
                  As an instructor at Mikrobot Academy, I&apos;ve taught robotics fundamentals to 70+ students - from circuit basics and Arduino programming to building and programming their first robots. Sharing knowledge is core to who I am.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["70+ Students", "4 Workshops", "3 Teams Coached", "Accra, Ghana"].map((stat) => (
                    <span key={stat} className="px-4 py-2 rounded-full bg-white/10 text-[#DAE3BB] text-xs font-semibold border border-white/10">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  href="https://mikrobotacademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#DAE3BB] text-[#006366] font-bold text-xs tracking-wide rounded-lg hover:bg-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
                >
                  VISIT MIKROBOT
                  <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@adoodevv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#DAE3BB]/40 text-[#DAE3BB] font-bold text-xs tracking-wide rounded-lg hover:border-white hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaYoutube className="w-4 h-4" />
                  YOUTUBE
                </Link>
              </div>
            </div>
          </FadeUpAnimation>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#1a1a1a] py-20">
        <FadeUpAnimation>
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-2xl md:text-3xl text-white mb-3">Interested in collaborating?</h2>
            <p className="text-white/50 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Whether it&apos;s a robotics project, research collaboration, or just a conversation about autonomous systems — reach out.
            </p>
            <Link
              href="mailto:adoojonathan412@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#DAE3BB] hover:bg-white text-[#006366] font-bold text-xs tracking-wide rounded-lg hover:-translate-y-0.5 transition-all duration-300"
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
