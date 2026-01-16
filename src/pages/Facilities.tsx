import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { facilities } from "@/data/siteData";
import { BookOpen, FlaskConical, Monitor, Trophy, Theater, UtensilsCrossed, Heart, Palette } from "lucide-react";

const iconMap = {
  BookOpen,
  FlaskConical,
  Monitor,
  Trophy,
  Theater,
  UtensilsCrossed,
  Heart,
  Palette,
};

const Facilities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Infrastructure</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              World-Class Facilities
            </h1>
            <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg">
              State-of-the-art infrastructure designed to foster learning and growth
            </p>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => {
                const Icon = iconMap[facility.icon as keyof typeof iconMap];
                return (
                  <div
                    key={facility.id}
                    className="group relative bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-card transition-all duration-500 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Image Placeholder */}
                    <div className="aspect-square bg-gradient-to-br from-navy to-navy-dark relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="h-20 w-20 text-gold/30 group-hover:text-gold/50 group-hover:scale-110 transition-all duration-500" />
                      </div>

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <p className="text-primary-foreground/90 text-sm">
                          {facility.description}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                          <Icon className="h-5 w-5 text-gold group-hover:text-navy-dark transition-colors duration-300" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {facility.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experience Our Campus
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Can't visit in person? Take a virtual tour of our state-of-the-art facilities.
            </p>
            <div className="aspect-video max-w-4xl mx-auto bg-gradient-to-br from-navy to-navy-dark rounded-2xl flex items-center justify-center shadow-card">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center cursor-pointer hover:bg-gold/30 transition-colors">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gold border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-primary-foreground font-medium">Virtual Campus Tour</p>
                <p className="text-primary-foreground/60 text-sm mt-1">Coming Soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;
