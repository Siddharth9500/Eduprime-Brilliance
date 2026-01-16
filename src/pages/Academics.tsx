import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { academicStreams } from "@/data/siteData";
import { FlaskConical, TrendingUp, Palette, CheckCircle } from "lucide-react";

const iconMap = {
  FlaskConical,
  TrendingUp,
  Palette,
};

const Academics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Programs</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              Academic Programs
            </h1>
            <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg">
              Discover our comprehensive curriculum designed for the leaders of tomorrow
            </p>
          </div>
        </section>

        {/* Streams */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {academicStreams.map((stream, index) => {
                const Icon = iconMap[stream.icon as keyof typeof iconMap];
                const isReversed = index % 2 === 1;

                return (
                  <div
                    key={stream.id}
                    className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className={isReversed ? 'md:order-2' : ''}>
                      <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                          <Icon className="h-7 w-7 text-gold" />
                        </div>
                        <h2 className="font-display text-3xl font-bold text-foreground">
                          {stream.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {stream.description}
                      </p>

                      {/* Subjects */}
                      <div className="mb-8">
                        <h3 className="font-semibold text-foreground mb-4">Core Subjects</h3>
                        <div className="flex flex-wrap gap-3">
                          {stream.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="px-4 py-2 bg-gold/10 text-gold rounded-lg text-sm font-medium border border-gold/20"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-4">Program Highlights</h3>
                        <ul className="space-y-3">
                          {stream.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-center gap-3 text-muted-foreground">
                              <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={`${isReversed ? 'md:order-1' : ''}`}>
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-primary/20 rounded-3xl blur-xl" />
                        <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center shadow-card overflow-hidden">
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
                          <Icon className="h-24 w-24 text-gold/30" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Academics;
