import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Creative from "@/components/Creative";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-slate-950">
      <Hero />
      <Projects />
      <Experience />
      <Certifications />
      <Creative />
      <Contact />
      <Footer />
    </main>
  );
}
