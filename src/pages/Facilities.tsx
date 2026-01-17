import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WaveDivider from "@/components/WaveDivider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Data for easy admin panel integration
const facilities = [
  { id: 1, title: "Modern Library", description: "50,000+ books, digital resources, and quiet study zones", emoji: "📚" },
  { id: 2, title: "Science Labs", description: "State-of-the-art Physics, Chemistry, and Biology labs", emoji: "🔬" },
  { id: 3, title: "Computer Labs", description: "300+ latest computers with high-speed internet", emoji: "💻" },
  { id: 4, title: "Sports Complex", description: "Olympic-sized pool, indoor courts, and athletics track", emoji: "🏆" },
  { id: 5, title: "Auditorium", description: "1000-seat capacity with professional audio-visual setup", emoji: "🎭" },
  { id: 6, title: "Cafeteria", description: "Nutritious meals prepared by certified chefs", emoji: "🍽️" },
  { id: 7, title: "Medical Center", description: "24/7 healthcare with qualified medical staff", emoji: "🏥" },
  { id: 8, title: "Art Studio", description: "Creative spaces for painting, sculpture, and design", emoji: "🎨" },
];

const Facilities = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-8 bg-cream">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-mustard font-medium text-sm uppercase tracking-wider">Infrastructure</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-olive mt-4">
                World-Class Facilities
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
                State-of-the-art infrastructure designed to foster learning and growth
              </p>
            </motion.div>
          </div>
          <WaveDivider fillColor="hsl(var(--beige))" className="mt-12" />
        </section>

        {/* Facilities Grid */}
        <section className="py-20 bg-beige">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-cream rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Emoji Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-mustard/20 to-orange/20 relative overflow-hidden flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                      {facility.emoji}
                    </span>
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-olive/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                      <p className="text-cream text-sm text-center">
                        {facility.description}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-olive">
                      {facility.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <WaveDivider fillColor="hsl(var(--cream))" className="mt-16" />
        </section>

        {/* Virtual Tour CTA */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive mb-6">
              Experience Our Campus
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Can't visit in person? Take a virtual tour of our state-of-the-art facilities.
            </p>
            <div className="aspect-video max-w-4xl mx-auto bg-gradient-to-br from-olive to-olive-dark rounded-2xl flex items-center justify-center shadow-card">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-mustard/20 mx-auto mb-4 flex items-center justify-center cursor-pointer hover:bg-mustard/30 transition-colors">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-mustard border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-cream font-serif font-bold">Virtual Campus Tour</p>
                <p className="text-cream/60 text-sm mt-1">Coming Soon</p>
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
