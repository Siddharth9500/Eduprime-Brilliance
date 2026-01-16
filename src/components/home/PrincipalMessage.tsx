import { Quote } from "lucide-react";
import { principalMessage } from "@/data/siteData";

const PrincipalMessage = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Message</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
              From the Principal's Desk
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Image */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-primary/20 rounded-2xl blur-xl" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card border-4 border-gold/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-5xl font-display text-gold font-bold">MR</span>
                      </div>
                      <p className="text-primary-foreground font-display text-lg">{principalMessage.name}</p>
                      <p className="text-gold text-sm mt-1">{principalMessage.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="md:col-span-3">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 h-16 w-16 text-gold/20" />
                <blockquote className="relative z-10">
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light italic">
                    "{principalMessage.quote}"
                  </p>
                  <footer className="mt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-1 bg-gold rounded-full" />
                      <div>
                        <p className="font-display text-lg font-semibold text-foreground">
                          {principalMessage.name}
                        </p>
                        <p className="text-muted-foreground text-sm">{principalMessage.title}</p>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
