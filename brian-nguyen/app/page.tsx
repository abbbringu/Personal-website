import Image from "next/image";
import PopoverDemo from "@/components/PopoverDemo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-3">
      <Hero />
      <PopoverDemo />
    </main>
  );
}
