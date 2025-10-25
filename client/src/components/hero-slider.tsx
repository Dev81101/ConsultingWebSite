import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

const slides = [
  {
    id: 1,
    title: "Transform Your Agricultural Business",
    subtitle: "Access up to €1.3M in IPARD funding for agricultural modernization and rural development",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    cta1: "Learn More",
    cta2: "View Programs"
  },
  {
    id: 2,
    title: "Develop Rural Tourism Excellence",
    subtitle: "Create sustainable tourism businesses with our comprehensive support and funding guidance",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    cta1: "Tourism Programs",
    cta2: "Success Stories"
  },
  {
    id: 3,
    title: "Expert Financial Consulting",
    subtitle: "Strategic business planning and financial advisory services to accelerate your growth",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    cta1: "Our Services",
    cta2: "Get Consultation"
  }
];

export default function HeroSlider() {
  const { language } = useLanguage();
  const t = useTranslations()[language];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen slider-container mt-16" data-testid="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          data-testid={`slide-${index}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-gray-200 mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold"
                    data-testid={`cta-primary-${index}`}
                  >
                    {t.hero.learnMore}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-3 font-semibold"
                    data-testid={`cta-secondary-${index}`}
                  >
                    {t.hero.viewPrograms}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
        data-testid="slider-prev"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
        data-testid="slider-next"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slider dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            data-testid={`slider-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
