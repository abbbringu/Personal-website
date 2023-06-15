import Image from "next/image";
import PopoverDemo from "@/components/PopoverDemo";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 overflow-x-hidden">
      <Hero />
      <Projects />
      <Education />
      <PopoverDemo />
    </main>
  );
}
