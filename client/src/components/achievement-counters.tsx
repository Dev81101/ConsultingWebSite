import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

// ---------------------------
//   Counter Item
// ---------------------------
type AchievementItem = {
    id: string;
    label: string;
    value: number;
    description: string;
    showEuro?: boolean;
    suffix?: string;
    order: number;
};

function CounterItem({ item }: { item: AchievementItem }) {
    const [count, setCount] = useState(0);
    const [animated, setAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated) {
                    setAnimated(true);
                    animate();
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [animated]);

    const animate = () => {
        const duration = 2000;
        const steps = 60;
        const increment = item.value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= item.value) {
                setCount(item.value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
    };

    return (
        <div ref={ref} className="flex flex-col items-center text-center px-4">
            {/* NUMBER */}
            <div className="flex items-start mb-4 text-white">
                {item.showEuro && (
                    <span className="text-4xl font-semibold mt-2 mr-1">€</span>
                )}
                <span className="text-7xl lg:text-8xl font-extrabold tracking-tight">
                    {count}
                    {item.suffix ?? ""}
                </span>
            </div>

            {/* LABEL */}
            <h3 className="text-xl font-semibold text-neutral-100 mb-1">
                {item.label}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-neutral-300 text-base max-w-xs">
                {item.description}
            </p>
        </div>
    );
}

// ---------------------------
//   Main Component
// ---------------------------
export default function AchievementCounters() {
    const { language } = useLanguage();
    const translations = useTranslations();
    const t = translations[language] || translations.en;

    // ✅ TRANSLATED DATA CREATED INSIDE COMPONENT
    const achievementsData: AchievementItem[] = [
        {
            id: "projects",
            label: t.achievements?.title1 || "Successfully completed projects",
            value: 4300,
            description:
                t.achievements?.subtitle1 ||
                "Over 4.000 successfully completed projects",
            order: 1,
        },
        {
            id: "grants",
            label: t.achievements?.title2 || "Approved grants",
            value: 35,
            description:
                t.achievements?.subtitle2 ||
                "Over 35 million euros in approved grants",
            showEuro: true,
            suffix: "M",
            order: 2,
        },
        {
            id: "credits",
            label: t.achievements?.title3 || "Approved credits",
            value: 80,
            description:
                t.achievements?.subtitle3 ||
                "Over 80 million euros in approved financial credits",
            showEuro: true,
            suffix: "M",
            order: 3,
        },
    ];

    return (
        <section className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4">
                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        {t.achievements?.supertitle || "Our Achievements"}
                    </h2>
                    <p className="text-xl text-neutral-300">
                        {t.achievements?.supersubtitle ||
                            "Delivering measurable results for our clients"}
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                    {achievementsData
                        .sort((a, b) => a.order - b.order)
                        .map((item) => (
                            <CounterItem key={item.id} item={item} />
                        ))}
                </div>
            </div>
        </section>
    );
}
