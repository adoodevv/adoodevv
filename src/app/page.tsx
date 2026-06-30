import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <Hero />
      <Projects />
      <Publications />
      <Footer />
    </div>
  );
}
