import { motion } from "framer-motion";
import WaveDivider from "@/components/WaveDivider";

// Data for easy admin panel integration
const academicsData = {
  title: "What We Do",
  description: "Our comprehensive curriculum combines traditional values with modern teaching methodologies. We focus on developing critical thinking, creativity, and a love for learning in every child.",
  features: [
    "CBSE & State Board curriculum",
    "Hands-on learning experiences",
    "Regular assessments & feedback",
    "Parent-teacher collaboration",
    "Extracurricular integration",
  ],
};

// Photo collage data
const collageImages = [
  { id: 1, alt: "Science lab", emoji: "🔬" },
  { id: 2, alt: "Art class", emoji: "🎨" },
  { id: 3, alt: "Library", emoji: "📖" },
  { id: 4, alt: "Sports", emoji: "⚽" },
];

const AcademicsPreview = () => {
  return (
    <section className="bg-cream py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-1"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive mb-6 brush-underline inline-block">
              {academicsData.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 mt-8">
              {academicsData.description}
            </p>
            
            <ul className="space-y-4">
              {academicsData.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-mustard" />
                  <span className="text-olive">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 lg:order-2"
          >
            {collageImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-beige rounded-2xl shadow-card overflow-hidden flex items-center justify-center ${
                  index === 3 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                <div className="text-center p-6">
                  <span className="text-5xl">{image.emoji}</span>
                  <p className="text-muted-foreground text-sm mt-2">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <WaveDivider fillColor="hsl(var(--beige))" className="mt-16" />
    </section>
  );
};

export default AcademicsPreview;
