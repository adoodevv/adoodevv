'use client'

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import CountUpNumber from "@/components/CountUpNumber";
import FadeUpAnimation from "@/components/FadeUp";
import Skills from "@/components/Skills";
import TypingAnimation from "@/components/TypingAnimation";
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowRight } from "react-icons/fa";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";
import { ArrowDown, MapPin, Mail, Cpu, Globe, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const roles = ["SOFTWARE ENGINEER", "ROBOTICIST", "WEB DEVELOPER", "TUTOR"];

const stats = [
  { number: 7, plus: "+", label: "Websites Built" },
  { number: 70, plus: "+", label: "Students Taught" },
  { number: 3, plus: "", label: "Robots Designed" },
  { number: 4, plus: "", label: "Workshops Led" },
  { number: 5, plus: "", label: "Teams Coached" },
];

const featuredProjects = [
  {
    title: "YARA Website",
    description: "A modern, responsive website built for YARA - showcasing clean design and intuitive navigation.",
    image: "/portfolio/yara.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://yara-website-kappa.vercel.app/",
    category: "Web Development",
  },
  {
    title: "Differential Drive Robot",
    description: "A ROS-based differential drive robot simulated in Gazebo with autonomous navigation capabilities.",
    image: "/portfolio/gazebo.png",
    tags: ["ROS", "Gazebo", "C++", "Python"],
    link: "https://www.github.com/adoodevv/diff_drive_robot",
    category: "Robotics",
  },
  {
    title: "Mikrobot Academy",
    description: "Full website for a robotics academy, featuring course listings, student portals, and responsive design.",
    image: "/portfolio/mikrobot.png",
    tags: ["Next.js", "React", "PostgreSQL"],
    link: "https://mikrobotacademy.com/",
    category: "Web Development",
  },
];

const socialLinks = [
  { href: "https://github.com/adoodevv/", icon: FaGithub, label: "GitHub" },
  { href: "https://x.com/adoodevv/", icon: FaXTwitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/jonathan-adoo/", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://hashnode.com/@adoodevv/", icon: FaHashnode, label: "Hashnode" },
  { href: "https://instagram.com/adoodevv/", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.youtube.com/@adoodevv/", icon: FaYoutube, label: "YouTube" },
];

const aboutCards = [
  { label: "Location", value: "Accra, Ghana" },
  { label: "Availability", value: "Open to roles" },
  { label: "Education", value: "Computer Engineering" },
  { label: "Interests", value: "F1 · Robotics · Blogging" },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#DAE3BB]/25 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#006366]/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center space-y-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#006366]/10 border border-[#006366]/20">
              <span className="w-2 h-2 rounded-full bg-[#AEBE89] animate-pulse" />
              <span className="text-[11px] font-bold text-[#006366] tracking-widest">OPEN TO OPPORTUNITIES</span>
            </div>

            <div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.0] text-[#1a1a1a]">
                Hi, I&apos;m<br />
                <span className="text-[#006366]">Jonathan.</span>
              </h1>
              <div className="text-sm md:text-base font-bold text-[#AEBE89] h-6 tracking-widest mt-4">
                <TypingAnimation
                  items={roles}
                  typingSpeed={75}
                  deletingSpeed={40}
                  delayBetweenItems={2000}
                />
              </div>
            </div>

            <p className="text-[#555] text-base md:text-lg max-w-xl leading-relaxed">
              Computer Engineering student building at the intersection of
              <span className="font-semibold text-[#006366]"> robotics</span> and
              <span className="font-semibold text-[#006366]"> software engineering</span>.
              I turn complex ideas into real, working solutions.
            </p>

            {/* Quick facts */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold text-[#666]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#006366]" /> Accra, Ghana
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#006366]" /> Computer Engineering
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#006366]" /> Available remotely
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/jonathan-darko-adoo.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#006366] text-white font-bold text-xs tracking-wide rounded-lg hover:bg-[#00514f] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                VIEW RESUME
                <ArrowDown className="w-4 h-4" />
              </a>
              <Link
                href="mailto:adoojonathan412@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#006366] text-[#006366] font-bold text-xs tracking-wide rounded-lg hover:bg-[#006366] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                GET IN TOUCH
              </Link>
            </div>

            {/* Social */}
            <div className="flex items-center justify-center gap-4 pt-1">
              <span className="text-[10px] text-[#bbb] font-bold tracking-widest shrink-0">FIND ME ON</span>
              <div className="h-px w-8 bg-[#ddd]" />
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbb] hover:text-[#006366] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4.5 h-4.5" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span className="text-[10px] text-[#aaa] tracking-widest font-bold">SCROLL</span>
          <div className="w-px md:h-10 h-6 bg-gradient-to-b from-[#aaa] to-transparent" />
        </motion.div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-[#006366] py-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <FadeUpAnimation key={index} delay={index * 0.08}>
                <div className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      <CountUpNumber endValue={stat.number} duration={1200} />
                    </span>
                    <span className="text-2xl font-bold text-[#AEBE89] ml-0.5">{stat.plus}</span>
                  </div>
                  <p className="text-[#DAE3BB]/70 text-[10px] font-bold mt-2 tracking-widest uppercase">
                    {stat.label}
                  </p>
                </div>
              </FadeUpAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Tools ─── */}
      <section className="section-padding bg-[#FCFCF7]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <FadeUpAnimation>
            <div className="text-center mb-14">
              <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Stack</span>
              <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mt-2 mb-3">Technical Tools</h2>
              <p className="text-[#666] max-w-md mx-auto text-sm leading-relaxed">
                Technologies I use to build everything from production web apps to autonomous robotic systems.
              </p>
              <div className="w-12 h-1 bg-[#006366] mx-auto mt-5 rounded-full" />
            </div>
          </FadeUpAnimation>
          <Skills />
        </div>
      </section>

      {/* ─── Featured Work ─── */}
      <section className="section-padding bg-[#f5f6ef]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <FadeUpAnimation>
            <div className="text-center mb-14">
              <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Portfolio</span>
              <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mt-2 mb-3">Featured Work</h2>
              <p className="text-[#666] max-w-md mx-auto text-sm leading-relaxed">
                A selection of projects that showcase my range — from production web apps to autonomous robotic systems.
              </p>
              <div className="w-12 h-1 bg-[#006366] mx-auto mt-5 rounded-full" />
            </div>
          </FadeUpAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredProjects.map((project, index) => (
              <FadeUpAnimation key={index} delay={index * 0.12}>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block group h-full">
                  <div className="bg-white rounded-2xl overflow-hidden border border-[#DAE3BB]/50 hover:border-[#006366]/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#006366]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#006366] text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-sm">
                        {project.category}
                      </span>
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                        <FaArrowRight className="w-3 h-3 text-[#006366] rotate-[-45deg]" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-[#006366] transition-colors duration-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[#666] text-sm leading-relaxed flex-1 line-clamp-2 mb-5">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
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
                  </div>
                </Link>
              </FadeUpAnimation>
            ))}
          </div>

          <FadeUpAnimation delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 border-2 border-[#006366] text-[#006366] font-bold text-xs tracking-wide rounded-lg hover:bg-[#006366] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                VIEW ALL PROJECTS
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeUpAnimation>
        </div>
      </section>

      {/* ─── About Me ─── */}
      <section className="section-padding bg-[#FCFCF7]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <FadeUpAnimation>
              <div className="text-center mb-14">
                <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Background</span>
                <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mt-2">About Me</h2>
                <div className="w-12 h-1 bg-[#006366] mx-auto mt-5 rounded-full" />
              </div>
            </FadeUpAnimation>

            <FadeUpAnimation delay={0.1}>
              <div className="grid md:grid-cols-5 gap-10 items-start">
                <div className="md:col-span-3 space-y-5">
                  <p className="text-[#444] leading-loose text-sm md:text-base">
                    I&apos;m a fourth-year Computer Engineering student passionate about building things that matter.
                    A natural project leader, I bridge the gap between <span className="text-[#006366] font-semibold">hardware and software</span> - designing robots in the morning and shipping web apps in the evening.
                  </p>
                  <p className="text-[#444] leading-loose text-sm md:text-base">
                    Currently deep in the world of <span className="text-[#006366] font-semibold">Robot Operating System (ROS 2)</span> and autonomous systems, while actively building full-stack web products. I care deeply about clean code, great UX, and technology that solves real problems.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {aboutCards.map((card) => (
                      <div key={card.label} className="bg-white rounded-xl border border-[#DAE3BB]/60 p-4">
                        <p className="text-[10px] font-bold text-[#AEBE89] tracking-widest uppercase mb-1">{card.label}</p>
                        <p className="text-sm font-semibold text-[#1a1a1a]">{card.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 flex justify-center">
                  <div className="relative w-52 h-52 md:w-64 md:h-64">
                    <div className="absolute inset-0 bg-[#DAE3BB]/50 rounded-2xl rotate-3" />
                    <div className="absolute inset-0 bg-[#AEBE89]/20 rounded-2xl -rotate-2" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#DAE3BB] shadow-xl">
                      <Image
                        src="/profile.png"
                        alt="Jonathan Darko Adoo"
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeUpAnimation>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-20">
        <FadeUpAnimation>
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Contact</span>
            <h2 className="text-3xl md:text-4xl text-white mt-3 mb-4">Let&apos;s Build Something Together</h2>
            <p className="text-white/50 text-sm max-w-md mx-auto mb-10 leading-relaxed">
              Whether you have a project in mind, a position to fill, or just want to connect - my inbox is always open.
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-md mx-auto">
              <Link
                href="mailto:adoojonathan412@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#DAE3BB] text-[#006366] font-bold text-xs tracking-wide rounded-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                SAY HELLO
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-[#DAE3BB]/50 text-[#DAE3BB] font-bold text-xs tracking-wide rounded-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                VIEW MY WORK
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </FadeUpAnimation>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-8 bg-[#1a1a1a]">
        <Footer />
      </section>
    </div>
  );
}
