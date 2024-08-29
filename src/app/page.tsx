import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Link
        className="fixed top-10 right-10 hidden xl:block"
        href="/resume.pdf"
      >
        <Button variant="ghost" className="text-xl">
          Resume
          <ArrowUpRight className="ml-2" />
        </Button>
      </Link>

      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
