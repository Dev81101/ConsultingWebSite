import HeroSlider from "@/components/hero-slider";
import AchievementCounters from "@/components/achievement-counters";
import ServicesSection from "@/components/services-section";
import ClientsSection from "@/components/clients-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div data-testid="home-page">
      <HeroSlider />
      <AchievementCounters />
      <ServicesSection />
      <ClientsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
