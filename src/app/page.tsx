import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
        {/* Pins beside the scrolling content on wide screens, stacks on small. */}
        <aside className="pt-16 lg:sticky lg:top-0 lg:max-h-screen lg:w-[300px] lg:shrink-0 lg:overflow-y-auto lg:pt-24 lg:pb-16 xl:w-[340px]">
          <Hero />
        </aside>

        <main className="min-w-0 flex-1 lg:pt-24">
          <Projects />
          <Publications />
          <Footer />
        </main>
      </div>
    </div>
  );
}
