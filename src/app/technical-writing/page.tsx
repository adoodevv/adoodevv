import Link from "next/link";
import Footer from "@/components/Footer";
import FadeUpAnimation from "@/components/FadeUp";
import { FaHashnode, FaArrowRight } from "react-icons/fa6";
import { Clock, BookOpen, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Technical Writing | adoodevv",
  description: "Articles and guides on robotics, ROS, web development, and software engineering.",
};

const articles = [
  {
    title: "Building a Differential Drive Robot in Gazebo: A Complete Guide",
    excerpt:
      "Step-by-step walkthrough of designing a diff-drive robot from URDF definition to full Gazebo simulation with velocity control and odometry.",
    tags: ["ROS 2", "Gazebo", "C++", "Simulation"],
    readTime: "12 min read",
    date: "Jan 2025",
    href: "https://hashnode.com/@adoodevv",
    featured: true,
  },
  {
    title: "Why I Use Next.js for Every Client Project",
    excerpt:
      "An honest breakdown of the features that make Next.js the default choice for production web projects - App Router, server components, image optimisation, and more.",
    tags: ["Next.js", "React", "Web Development"],
    readTime: "6 min read",
    date: "Nov 2024",
    href: "https://hashnode.com/@adoodevv",
    featured: false,
  },
  {
    title: "How I Juggled School, Side Projects, and a Tech Career",
    excerpt:
      "Practical lessons from four years of being a Computer Engineering student while building products, teaching robotics, and freelancing as a developer.",
    tags: ["Career", "Student Life", "Productivity"],
    readTime: "5 min read",
    date: "May 2024",
    href: "https://hashnode.com/@adoodevv",
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  "ROS 2": "bg-[#006366]/10 text-[#006366]",
  Robotics: "bg-[#006366]/10 text-[#006366]",
  "Next.js": "bg-[#DAE3BB]/60 text-[#3a5a00]",
  React: "bg-[#DAE3BB]/60 text-[#3a5a00]",
  Python: "bg-[#AEBE89]/30 text-[#3a5a00]",
  TypeScript: "bg-[#DAE3BB]/60 text-[#3a5a00]",
  Career: "bg-[#f3e8ff] text-[#7c3aed]",
};

function tagClass(tag: string) {
  return tagColors[tag] ?? "bg-[#f5f5f5] text-[#555]";
}

export default function TechnicalWritingPage() {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-[#FCFCF7]">
      {/* ─── Header ─── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-16">
        <FadeUpAnimation>
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Writing</span>
            <h1 className="text-4xl md:text-5xl text-[#1a1a1a] mt-2 mb-4">Technical Writing</h1>
            <p className="text-[#666] text-base leading-relaxed">
              I write about robotics, ROS, web development, and the lessons I learn building things. Articles are published on Hashnode.
            </p>
            <div className="w-12 h-1 bg-[#006366] mt-5 rounded-full" />
          </div>
        </FadeUpAnimation>

        {/* Hashnode CTA */}
        <FadeUpAnimation delay={0.1}>
          <Link
            href="https://hashnode.com/@adoodevv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-8 px-5 py-2.5 rounded-xl bg-white border border-[#DAE3BB] hover:border-[#006366]/30 hover:shadow-md transition-all duration-300"
          >
            <FaHashnode className="w-4 h-4 text-[#2962FF]" />
            <span className="text-sm font-semibold text-[#1a1a1a]">@adoodevv on Hashnode</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#aaa]" />
          </Link>
        </FadeUpAnimation>
      </div>

      {/* ─── Featured Articles ─── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-8">
        <FadeUpAnimation>
          <h2 className="text-xs font-bold text-[#aaa] tracking-widest uppercase mb-6">Featured</h2>
        </FadeUpAnimation>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featured.map((article, i) => (
            <FadeUpAnimation key={article.title} delay={i * 0.1}>
              <Link
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full bg-[#006366] rounded-2xl p-7 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-400">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-[10px] font-bold text-[#AEBE89] tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-[#DAE3BB] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-[#DAE3BB]/70 text-sm leading-relaxed flex-1 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] font-bold bg-white/10 text-[#DAE3BB] rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[#DAE3BB]/50 text-xs font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            </FadeUpAnimation>
          ))}
        </div>

        {/* ─── Other Articles ─── */}
        <FadeUpAnimation>
          <h2 className="text-xs font-bold text-[#aaa] tracking-widest uppercase mb-6">Other Articles</h2>
        </FadeUpAnimation>

        <div className="flex flex-col gap-4 mb-20">
          {rest.map((article, i) => (
            <FadeUpAnimation key={article.title} delay={i * 0.08}>
              <Link
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-2xl border border-[#DAE3BB]/50 hover:border-[#006366]/20 hover:shadow-xl transition-all duration-400 p-6 flex flex-col md:flex-row md:items-center gap-5">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-[#006366] transition-colors duration-300 mb-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-4 md:gap-2 shrink-0">
                    <div className="flex flex-wrap gap-1.5 md:justify-end">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 text-[10px] font-bold rounded-md ${tagClass(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 text-[#aaa] text-xs font-semibold whitespace-nowrap">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                      <span className="hidden md:block">·</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <FaArrowRight className="w-3.5 h-3.5 text-[#AEBE89] group-hover:text-[#006366] shrink-0 group-hover:translate-x-0.5 transition-all duration-300 hidden md:block" />
                </div>
              </Link>
            </FadeUpAnimation>
          ))}
        </div>
      </div>

      <section className="bg-[#1a1a1a] py-20">
        <FadeUpAnimation>
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-3">Read More on Hashnode</h2>
            <p className="text-white/50 text-sm max-w-md mx-auto mb-10 leading-relaxed">
              All articles are published on my Hashnode blog. Follow along for new posts on robotics, web development, and engineering.
            </p>
            <Link
              href="https://hashnode.com/@adoodevv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#DAE3BB] text-[#006366] font-bold text-xs tracking-wide rounded-lg hover:bg-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              <FaHashnode className="w-4 h-4" />
              VISIT MY BLOG
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
