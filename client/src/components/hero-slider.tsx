import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

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
    <section className="relative h-screen overflow-hidden mt-16" data-testid="hero-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="absolute inset-0"
          data-testid={`slide-${currentSlide}`}
        >
          {/* Animated Background with Parallax Effect */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
            animate={{
              scale: [1, 1.05, 1],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Content Container */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                {/* Animated Title - Using slide-specific content */}
                <motion.h1
                  variants={titleVariants}
                  className="text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                {/* Animated Subtitle - Using slide-specific content */}
                <motion.p
                  variants={subtitleVariants}
                  className="text-xl text-gray-200 mb-8"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                
                {/* Floating CTA Buttons - Using slide-specific content */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={buttonVariants}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut"
                    }}
                  >
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
                      data-testid={`cta-primary-${currentSlide}`}
                    >
                      {slides[currentSlide].cta1}
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 font-semibold transition-all duration-300 backdrop-blur-sm"
                      data-testid={`cta-secondary-${currentSlide}`}
                    >
                      {slides[currentSlide].cta2}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows with hover animation */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-20 transition-all duration-300"
          onClick={prevSlide}
          data-testid="slider-prev"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      </motion.div>
      
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-20 transition-all duration-300"
          onClick={nextSlide}
          data-testid="slider-next"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </motion.div>

      {/* Slider dots with animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            data-testid={`slider-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
