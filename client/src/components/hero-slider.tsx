import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Assuming useLanguage and useTranslations are correctly implemented and provide the translation object 't'
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
import { Link } from "wouter";
import { useCountry } from "@/lib/country-context";

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

// New translation keys needed for the slider content:
// 1. home.slide1Title: "For the clients we choose the best!"
// 2. home.slide1Subtitle: "3000 clients and counting"
// 3. home.slide2Title: "Our way of work"
// 4. home.slide2Subtitle: "Meet how we work, and learn why our aproach gives best results"
// 5. home.slide3Title: "Experts in the finance field"
// 6. home.slide3Subtitle: "Strategic business planning and financial advisory services to accelerate your growth"

export default function HeroSlider() {
    const { language } = useLanguage();
    const t = useTranslations()[language]; // Translation object (e.g., t['contact']['contactUs'])
    const { country } = useCountry();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Define slides using the translation object 't'
    const slides = useMemo(() => [
        {
            id: 1,
            // Using existing translations for CTA buttons (nav.contact & nav.programs)
            // NOTE: You need to add keys like 'home.slide1Title' to your translation JSON
            title: t?.home?.slide1Title || "For the clients we choose the best!",
            subtitle: t?.home?.slide1Subtitle || "3000 clients and counting",
            image: "/images/zgrada.png",
            cta1: t?.nav?.contact || "Contact", // Using 'Contact' from nav
            cta2: t?.nav?.programs || "Services" // Using 'Programs' from nav
        },
        {
            id: 2,
            title: t?.home?.slide2Title || "Our way of work",
            subtitle: t?.home?.slide2Subtitle || "Meet how we work, and learn why our aproach gives best results",
            image: "/images/Recepcija1.jpg",
            cta1: t?.nav?.contact || "Contact",
            cta2: t?.nav?.programs || "Services"
        },
        {
            id: 3,
            title: t?.home?.slide3Title || "Experts in the finance field",
            subtitle: t?.home?.slide3Subtitle || "Strategic business planning and financial advisory services to accelerate your growth",
            image: "/images/TimPic1.jpg",
            cta1: t?.nav?.contact || "Contact",
            cta2: t?.nav?.programs || "Services"
        }
    ], [t]); // Re-run useMemo when 't' changes (language switch)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);

        return () => clearInterval(timer);
    }, [slides.length]); // Dependency added for robustness

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    if (!t || slides.length === 0) {
        // Handle loading state if translations haven't loaded yet
        return (
            <section className="h-screen flex items-center justify-center bg-gray-100">
                <p>{t?.home?.loadingContent || "Loading..."}</p>
            </section>
        );
    }

    return (
        <section className="relative h-screen overflow-hidden" data-testid="hero-slider">
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
                                        <Link href={`/${country}/contact`}>
                                            <Button
                                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
                                                data-testid={`cta-primary-${currentSlide}`}
                                            >
                                                {slides[currentSlide].cta1}
                                            </Button>
                                        </Link>
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
                                        <Link href={`/${country}/programs`}>
                                            <Button
                                                variant="outline"
                                                className="border-2 border-white text-primary hover:bg-white hover:text-black px-8 py-3 font-semibold transition-all duration-300 backdrop-blur-sm"
                                                data-testid={`cta-secondary-${currentSlide}`}
                                            >
                                                {slides[currentSlide].cta2}
                                            </Button>
                                        </Link>
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