import Hero from "@/components/Hero";
import Story from "@/components/Story";
import FinalMessage from "@/components/FinalMessage";
import LookUp from "@/components/LookUp";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <FinalMessage />
      <LookUp />
    </main>
  );
}