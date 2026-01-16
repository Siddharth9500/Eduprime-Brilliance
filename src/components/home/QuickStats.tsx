import { useEffect, useState, useRef } from "react";
import { Users, GraduationCap, Award, Trophy } from "lucide-react";
import { quickStats } from "@/data/siteData";

const iconMap = {
  Users,
  GraduationCap,
  Award,
  Trophy,
};

const QuickStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(quickStats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = quickStats.map((stat, index) => {
      let step = 0;
      return setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.round(stat.value * easeOut);
          return newCounts;
        });

        if (step >= steps) {
          clearInterval(timers[index]);
        }
      }, interval);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {quickStats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                  <Icon className="h-10 w-10 text-gold" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-navy font-display mb-2">
                  {counts[index].toLocaleString()}{stat.suffix}
                </p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
