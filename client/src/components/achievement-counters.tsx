import { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Achievement } from "@shared/schema";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

// ---------------------------
//   Counter Item Component
// ---------------------------
function CounterItem({ achievement }: { achievement: Achievement }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    const value = achievement.value ?? null;

    useEffect(() => {
        if (value === null) return; // Skip animation

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

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [hasAnimated, value]);

    const animateCounter = () => {
        if (value === null) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;

            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
    };

    // Format value (if null, display nothing)
    const displayValue = (() => {
        if (value === null) return ""; // <--- nothing displayed

        if (achievement.label.includes("%")) return `${count}%`;
        if (achievement.label.includes("Million") || achievement.label.includes("M")) return `${count}M`;

        return count.toString();
    })();

    return (
        <div
            ref={elementRef}
            className="text-center w-full flex flex-col items-center mt-10"
            data-testid={`achievement-${achievement.label.toLowerCase().replace(/\s+/g, "-")}`}
        >
            {value !== null && (
                <div className="text-5xl font-bold text-white mb-1" data-testid="counter-value">
                    {displayValue}
                </div>
            )}

            <h3 className="text-lg font-semibold text-neutral-300 mb-1" data-testid="counter-label">
                {achievement.label}
            </h3>

            <p className="text-neutral-100 text-muted-white leading-tight">
                {achievement.description}
            </p>
        </div>
    );
}

// ---------------------------
//   Main Achievements Section
// ---------------------------
export default function AchievementCounters() {
    const { language } = useLanguage();
    const translations = useTranslations();
    const t = translations[language];
    const safeT = t || translations.en;

    const { data: achievements, isLoading, error } = useQuery<Achievement[]>({
        queryKey: ["/api/achievements"],
    });

    // Loading
    if (isLoading) {
        return (
            <section className="py-16 bg-red-700 min-h-[60vh]">
                <div className="h-full max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
                            {safeT.achievements?.title || "Our Achievements"}
                        </h2>
                        <p className="text-xl text-neutral-100">
                            {safeT.achievements?.subtitle ||
                                "Delivering exceptional results for our clients across all sectors"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="text-center animate-pulse">
                                <div className="h-16 bg-muted rounded mb-2"></div>
                                <div className="h-6 bg-muted rounded mb-2 w-32 mx-auto"></div>
                                <div className="h-4 bg-muted rounded w-40 mx-auto"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Error
    if (error) {
        return (
            <section className="py-16 bg-red-700 min-h-[60vh]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
                        {safeT.achievements?.title || "Our Achievements"}
                    </h2>
                    <p className="text-neutral-100">
                        {safeT.achievements?.error || "Unable to load achievements right now."}
                    </p>
                </div>
            </section>
        );
    }

    // Success
    return (
        <section className="py-16 min-h-[50vh] bg-primary" data-testid="achievement-counters">
            <div className="h-full max-w-7xl mx-auto px-0 py-0">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-100 mb-4">
                        {safeT.achievements?.title || "Our Achievements"}
                    </h2>
                    <p className="text-xl text-neutral-100">
                        {safeT.achievements?.subtitle ||
                            "Delivering exceptional results for our clients across all sectors"}
                    </p>
                </div>

                <div className="grid grid-rows-1 grid-cols-5">
                    {achievements?.map((achievement) => (
                        <CounterItem key={achievement.id} achievement={achievement} />
                    ))}
                </div>
            </div>
        </section>
    );
}
