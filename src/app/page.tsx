import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MetricsSection from "@/components/sections/MetricsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { getPexelsImages } from "@/lib/pexels";

export default async function HomePage() {
  const images = await getPexelsImages("modern home renovation", 6);

  return (
    <div>
      <HeroSection images={images} />
      <MetricsSection />
      <ServicesSection />
      <ProcessSection />
      <ExperienceSection />
      <GallerySection images={images} />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
