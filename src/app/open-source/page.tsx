import Link from "next/link";
import Footer from "@/components/Footer";
import FadeUpAnimation from "@/components/FadeUp";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { ExternalLink, GitMerge, Heart, Users } from "lucide-react";

export const metadata = {
  title: "Open Source | adoodevv",
  description: "Open source projects, contributions, and repositories by Jonathan Darko Adoo.",
};

const repos = [
  {
    name: "diff_drive_robot",
    description:
      "A fully simulated differential drive robot built with ROS 2 and Gazebo. Includes URDF model, velocity controllers, and odometry - a great starting point for learning mobile robotics simulation.",
    tags: ["ROS 2", "C++", "Python", "Gazebo", "URDF"],
    stars: 36,
    forks: 12,
    language: "C++",
    langColor: "#f34b7d",
    href: "https://github.com/adoodevv/diff_drive_robot",
    featured: true,
  },
  {
    name: "adoodevv",
    description:
      "Source code for this portfolio website - built with Next.js, Tailwind CSS, and Framer Motion. Open for anyone looking to learn from or adapt the design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    stars: 0,
    forks: 0,
    language: "TypeScript",
    langColor: "#3178c6",
    href: "https://github.com/adoodevv/adoodevv",
    featured: false,
  },
];

const values = [
  {
    icon: Heart,
    title: "Built in the Open",
    body: "I believe in sharing knowledge freely. Open source makes learning accessible to everyone - especially developers in emerging ecosystems.",
  },
  {
    icon: Users,
    title: "Community First",
    body: "Good open source projects grow through collaboration. I welcome issues, feedback, and pull requests on all my public repositories.",
  },
  {
    icon: GitMerge,
    title: "Documentation Matters",
    body: "Code without context is hard to use. Every project I open source includes setup guides, READMEs, and usage examples.",
  },
];

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-[#FCFCF7]">
      {/* ─── Header ─── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-16">
        <FadeUpAnimation>
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Open Source</span>
            <h1 className="text-4xl md:text-5xl text-[#1a1a1a] mt-2 mb-4">Open Source Work & Contributions</h1>
            <p className="text-[#666] text-base leading-relaxed">
              Projects I&apos;ve built and shared publicly - from robotics simulation starters to this portfolio itself. All available on GitHub.
            </p>
            <div className="w-12 h-1 bg-[#006366] mt-5 rounded-full" />
          </div>
        </FadeUpAnimation>

        <FadeUpAnimation delay={0.1}>
          <Link
            href="https://github.com/adoodevv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-8 px-5 py-2.5 rounded-xl bg-white border border-[#DAE3BB] hover:border-[#006366]/30 hover:shadow-md transition-all duration-300"
          >
            <FaGithub className="w-4 h-4 text-[#1a1a1a]" />
            <span className="text-sm font-semibold text-[#1a1a1a]">github.com/adoodevv</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#aaa]" />
          </Link>
        </FadeUpAnimation>
      </div>

      {/* ─── Repos ─── */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-16">
        <FadeUpAnimation>
          <h2 className="text-xs font-bold text-[#aaa] tracking-widest uppercase mb-6">Repositories</h2>
        </FadeUpAnimation>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {repos.map((repo, i) => (
            <FadeUpAnimation key={repo.name} delay={i * 0.1}>
              <Link
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full bg-white rounded-2xl border border-[#DAE3BB]/50 hover:border-[#006366]/20 hover:shadow-2xl transition-all duration-500 p-7 flex flex-col">
                  {repo.featured && (
                    <span className="self-start mb-4 text-[10px] font-bold text-[#006366] tracking-widest uppercase bg-[#006366]/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2.5">
                      <FaGithub className="w-4 h-4 text-[#555] shrink-0" />
                      <span className="text-base font-bold text-[#1a1a1a] group-hover:text-[#006366] transition-colors duration-300 font-mono">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#AEBE89] group-hover:text-[#006366] shrink-0 transition-colors duration-300" />
                  </div>

                  <p className="text-[#666] text-sm leading-relaxed flex-1 mb-5">
                    {repo.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {repo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] font-semibold bg-[#DAE3BB]/50 text-[#006366] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 text-xs font-semibold text-[#888] border-t border-[#f0f0f0] pt-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.langColor }} />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaStar className="w-3.5 h-3.5" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch className="w-3.5 h-3.5" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUpAnimation>
          ))}
        </div>

        {/* ─── Values ─── */}
        <FadeUpAnimation>
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold text-[#AEBE89] tracking-widest uppercase">Philosophy</span>
            <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mt-2">Why Open Source</h2>
            <div className="w-12 h-1 bg-[#006366] mx-auto mt-5 rounded-full" />
          </div>
        </FadeUpAnimation>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((val, i) => (
            <FadeUpAnimation key={val.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-[#DAE3BB]/50 p-7 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#006366]/10 flex items-center justify-center shrink-0">
                  <val.icon className="w-5 h-5 text-[#006366]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a1a] mb-2">{val.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{val.body}</p>
                </div>
              </div>
            </FadeUpAnimation>
          ))}
        </div>

        {/* ─── Contributing callout ─── */}
        <FadeUpAnimation delay={0.1}>
          <div className="bg-[#f5f6ef] border border-[#DAE3BB]/60 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Want to contribute?</h3>
              <p className="text-sm text-[#666] leading-relaxed max-w-lg">
                All my public repositories are open for contributions. If you find a bug, have a feature idea, or just want to learn by doing - open an issue or submit a pull request.
              </p>
            </div>
            <Link
              href="https://github.com/adoodevv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a1a1a] text-white font-bold text-xs tracking-wide rounded-lg hover:bg-[#333] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shrink-0"
            >
              <FaGithub className="w-4 h-4" />
              VIEW GITHUB
            </Link>
          </div>
        </FadeUpAnimation>
      </div>

      <section className="bg-[#1a1a1a] py-20">
        <FadeUpAnimation>
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-2xl md:text-3xl text-white mb-3">More coming soon</h2>
            <p className="text-white/50 text-sm max-w-md mx-auto mb-10 leading-relaxed">
              I&apos;m actively working on more open source tools. Follow me on GitHub to stay updated.
            </p>
            <Link
              href="https://github.com/adoodevv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#DAE3BB] text-[#006366] font-bold text-xs tracking-wide rounded-lg hover:bg-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              <FaGithub className="w-4 h-4" />
              FOLLOW ON GITHUB
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
