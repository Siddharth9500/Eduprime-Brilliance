import { motion } from "framer-motion";
import WaveDivider from "@/components/WaveDivider";

// Data for easy admin panel integration
const aboutData = {
  title: "Who We Are",
  description: "At EduPrime Academy, we believe in creating a nurturing environment where every child can thrive. Our holistic approach combines academic excellence with character development, ensuring students grow into confident, compassionate leaders.",
  highlights: [
    "Child-centered learning approach",
    "Experienced and caring educators",
    "Safe and inclusive environment",
    "Focus on holistic development"
  ],
};

// Photo collage data
const collageImages = [
  { id: 1, alt: "Students learning", emoji: "👨‍🎓" },
  { id: 2, alt: "Classroom activity", emoji: "✏️" },
  { id: 3, alt: "Outdoor activities", emoji: "🌳" },
  { id: 4, alt: "Group project", emoji: "🤝" },
];

const AboutPreview = () => {
  return (
    <section className="bg-beige py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-1"
          >
            {collageImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-cream rounded-xl sm:rounded-2xl shadow-card overflow-hidden flex items-center justify-center ${
                  index === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                <div className="text-center p-4 sm:p-6">
                  <span className="text-3xl sm:text-4xl lg:text-5xl">{image.emoji}</span>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 sm:mt-2">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-olive mb-4 sm:mb-6 brush-underline inline-block">
              {aboutData.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 mt-6 sm:mt-8">
              {aboutData.description}
            </p>
            
            <ul className="space-y-3 sm:space-y-4">
              {aboutData.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-mustard/20 flex items-center justify-center shrink-0">
                    <span className="text-mustard text-sm sm:text-base">✓</span>
                  </span>
                  <span className="text-olive font-medium text-sm sm:text-base">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <WaveDivider fillColor="hsl(var(--cream))" className="mt-12 sm:mt-16" />
    </section>
  );
};

export default AboutPreview;
