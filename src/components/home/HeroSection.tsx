import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import WaveDivider from "@/components/WaveDivider";

// Data at top for easy admin panel integration
const heroData = {
  title: "Nurturing Future Leaders",
  subtitle: "Where every child's potential blossoms into excellence",
  description: "Join our warm community where education meets compassion. We believe in nurturing minds, building character, and creating lifelong learners.",
  ctaButtons: [
    { text: "Apply Now", path: "/admissions", variant: "primary" as const },
    { text: "Learn More", path: "/about", variant: "secondary" as const },
  ],
};

const HeroSection = () => {
  return (
    <section className="relative bg-cream pt-20 sm:pt-24 pb-0 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] py-8 lg:py-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-mustard/20 rounded-full border border-mustard/30 mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 bg-mustard rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-olive">Admissions Open 2026-27</span>
            </motion.div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-olive leading-tight mb-4 sm:mb-6">
              {heroData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-olive/70 font-serif mb-3 sm:mb-4">
              {heroData.subtitle}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 px-2 sm:px-0">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/admissions" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-mustard hover:bg-mustard-light text-olive font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl shadow-mustard hover:shadow-lg transition-all duration-300 group"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-olive/30 text-olive hover:bg-olive/5 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-square max-w-[280px] sm:max-w-sm lg:max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-mustard/20 rounded-full transform scale-90" />
              <div className="absolute inset-3 sm:inset-4 bg-orange/10 rounded-full" />
              <div className="absolute inset-6 sm:inset-8 bg-cream-dark rounded-full flex items-center justify-center border-2 sm:border-4 border-mustard/30">
                {/* Placeholder for hero illustration */}
                <div className="text-center p-4 sm:p-8">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4">📚</div>
                  <p className="text-olive font-serif text-base sm:text-lg lg:text-xl font-bold">Learning & Growing</p>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 sm:mt-2">Together</p>
                </div>
              </div>
              
              {/* Floating elements - hidden on very small screens */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="hidden sm:flex absolute top-6 sm:top-10 right-0 bg-mustard text-olive p-2 sm:p-3 rounded-xl shadow-lg"
              >
                <span className="text-lg sm:text-2xl">🎓</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="hidden sm:flex absolute bottom-12 sm:bottom-20 left-0 bg-orange text-cream p-2 sm:p-3 rounded-xl shadow-lg"
              >
                <span className="text-lg sm:text-2xl">✨</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="hidden sm:flex absolute top-1/3 -left-2 sm:-left-4 bg-olive text-cream p-2 sm:p-3 rounded-xl shadow-lg"
              >
                <span className="text-lg sm:text-2xl">🌟</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wavy Divider */}
      <WaveDivider fillColor="hsl(var(--beige))" className="mt-4 sm:mt-8" />
    </section>
  );
};

export default HeroSection;
