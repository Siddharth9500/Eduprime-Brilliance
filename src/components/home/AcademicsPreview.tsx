import { Link } from "react-router-dom";
import { FlaskConical, TrendingUp, Palette, ArrowRight } from "lucide-react";
import { academicStreams } from "@/data/siteData";
import { Button } from "@/components/ui/button";

const iconMap = {
  FlaskConical,
  TrendingUp,
  Palette,
};

const AcademicsPreview = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Programs</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Academic Excellence
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose from our comprehensive range of academic programs designed to nurture your potential
          </p>
        </div>

        {/* Stream Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {academicStreams.map((stream, index) => {
            const Icon = iconMap[stream.icon as keyof typeof iconMap];
            return (
              <div
                key={stream.id}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-gold" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {stream.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{stream.description}</p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {stream.subjects.slice(0, 3).map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                  {stream.subjects.length > 3 && (
                    <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      +{stream.subjects.length - 3} more
                    </span>
                  )}
                </div>

                {/* Link */}
                <Link
                  to="/academics"
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-gold transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/academics">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicsPreview;
