import { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Achievement } from "@shared/schema";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function CounterItem({ achievement }: { achievement: Achievement }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounter();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounter = () => {
        const duration = 2000;
        const steps = 60;
        const increment = achievement.value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= achievement.value) {
                setCount(achievement.value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
    };

    // Format display suffix based on label (e.g., "3000 Clients" → just number; "95% Success" → add %)
    const displayValue = (() => {
        if (achievement.label.includes('%')) return `${count}%`;
        if (achievement.label.includes('Million') || achievement.label.includes('M')) return `${count}M`;
        return count.toString();
    })();

    return (
        <div
            ref={elementRef}
            className="text-center"
            data-testid={`achievement-${achievement.label.toLowerCase().replace(/\s+/g, '-')}`}
        >
            <div className="text-5xl font-bold text-white mb-2" data-testid="counter-value">
                {displayValue}
            </div>
            <h3 className="text-lg font-semibold text-neutral-300 mb-2" data-testid="counter-label">
                {achievement.label}
            </h3>
            <p className="text-neutral-100 text-muted-white" data-testid="counter-description">
                {achievement.description}
            </p>
        </div>
    );
}

export default function AchievementCounters() {
    const { language } = useLanguage();
    const translations = useTranslations();
    const t = translations[language];

    // Fallback to English if not loaded
    const safeT = t || translations.en;

    const { data: achievements, isLoading, error } = useQuery<Achievement[]>({
        queryKey: ["/api/achievements"],
    });

    // Loading state
    if (isLoading) {
        return (
            <section className="py-16 bg-red-700 min-h-[60vh]">
                <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
                            {safeT.achievements?.title || "Our Achievements"}
                        </h2>
                        <p className="text-xl text-neutral-100">
                            {safeT.achievements?.subtitle || "Delivering exceptional results for our clients across all sectors"}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="text-center animate-pulse">
                                <div className="h-16 bg-muted rounded mb-2"></div>
                                <div className="h-6 bg-muted rounded mb-2 mx-auto w-32"></div>
                                <div className="h-4 bg-muted rounded mx-auto w-40"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="h-full py-16 bg-red-700 min-h-[60vh]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
                            {safeT.achievements?.title || "Our Achievements"}
                        </h2>
                        <p className="text-neutral-100">
                            {safeT.achievements?.error || "Unable to load achievements at this time."}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    // Success state
    return (
        <section className="py-16 min-h-[60vh]" data-testid="achievement-counters">
            <BackgroundBeamsWithCollision className="h-full">
                <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
                            {safeT.achievements?.title || "Our Achievements"}
                        </h2>
                        <p className="text-xl text-neutral-100">
                            {safeT.achievements?.subtitle || "Delivering exceptional results for our clients across all sectors"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements?.map((achievement) => (
                            <CounterItem key={achievement.id} achievement={achievement} />
                        ))}
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    );
}