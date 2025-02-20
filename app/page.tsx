import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductSection";
import { ServicesSection } from "@/components/ServiceSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/testimonial";

export default function Home() {
  return (
  <>
    <HeroSection />
    <ServicesSection />
    <StatsSection />
    <ProductsSection />
    <TestimonialsSection />
    <ContactSection />
  </>
  );
}
