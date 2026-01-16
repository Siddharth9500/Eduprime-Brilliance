import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { facultyMembers } from "@/data/siteData";
import { Mail } from "lucide-react";

const Faculty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Team</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              Meet Our Faculty
            </h1>
            <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg">
              Dedicated educators committed to nurturing the next generation of leaders
            </p>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {facultyMembers.map((faculty, index) => (
                <div
                  key={faculty.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Photo Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-navy to-navy-dark relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl font-display text-gold font-bold">
                          {faculty.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faculty.name}
                    </h3>
                    <p className="text-gold text-sm font-medium mt-1">{faculty.designation}</p>
                    <p className="text-muted-foreground text-sm mt-2">{faculty.qualification}</p>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                        {faculty.department}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Teaching Family
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're always looking for passionate educators to join our team.
            </p>
            <a
              href="mailto:careers@eduprime.edu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-navy-dark transition-colors"
            >
              <Mail className="h-5 w-5" />
              careers@eduprime.edu
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;
