import { useCountry } from "@/lib/country-context";
import { useLanguage } from "@/lib/language-context";
import { usePageContent } from "@/hooks/use-page-content";
import HeroSlider from "@/components/hero-slider";
import AchievementCounters from "@/components/achievement-counters";
import ServicesSection from "@/components/services-section";
import ClientsSection from "@/components/clients-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  const { country } = useCountry();
  const { language } = useLanguage();
  const { data: pageContent, isLoading, error } = usePageContent(country, 'home', language);

  // If we have custom content for this country, show it
  if (pageContent) {
    return (
      <div data-testid="home-page">
        <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-8" data-testid="page-title">
                {pageContent.title}
              </h1>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: pageContent.content }}
                data-testid="page-content"
              />
            </div>
          </div>
        </div>
        <AchievementCounters />
        <BlogSection />
        <ContactSection />
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen" data-testid="loading-state">
        <div className="text-lg">Loading page content...</div>
      </div>
    );
  }

  // Default fallback - use the original components if no custom content
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
