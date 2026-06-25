import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { NoiseTexture } from "@/components/effects/NoiseTexture";
import { ClientEffects } from "@/components/effects/ClientEffects";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <NoiseTexture />
      <ClientEffects />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <StatsSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
