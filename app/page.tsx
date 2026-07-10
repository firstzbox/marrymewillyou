import LoadingScreen from "@/components/LoadingScreen";
import FloatingHearts from "@/components/FloatingHearts";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import LoveLetter from "@/components/LoveLetter";
import FinalPage from "@/components/FinalPage";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="relative bg-[#FFF8F5]">

      <LoadingScreen />

      <FloatingHearts />

      <Hero />

      <SectionDivider />

      <StorySection />

      <SectionDivider />

      <LoveLetter />

      <SectionDivider />

      <FinalPage />

    </main>
  );
}