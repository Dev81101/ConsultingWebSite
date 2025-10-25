import { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Achievement } from "@shared/schema";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

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

  return (
    <div ref={elementRef} className="text-center" data-testid={`achievement-${achievement.label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="text-5xl font-bold text-primary mb-2" data-testid="counter-value">
        {count}
        {achievement.label.includes('%') && '%'}
        {achievement.label.includes('Million') && 'M'}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="counter-label">
        {achievement.label}
      </h3>
      <p className="text-muted-foreground" data-testid="counter-description">
        {achievement.description}
      </p>
    </div>
  );
}

export default function AchievementCounters() {
  const { language } = useLanguage();
  const t = useTranslations()[language];
  const { data: achievements, isLoading, error } = useQuery<Achievement[]>({
    queryKey: ["/api/achievements"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.achievements.title}</h2>
            <p className="text-xl text-muted-foreground">{t.achievements.subtitle}</p>
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

  if (error) {
    return (
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.achievements.title}</h2>
            <p className="text-muted-foreground">{t.achievements.error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-card" data-testid="achievement-counters">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.achievements.title}</h2>
          <p className="text-xl text-muted-foreground">{t.achievements.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements?.map((achievement) => (
            <CounterItem key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
