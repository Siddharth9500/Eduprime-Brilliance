import { motion } from "framer-motion";
import WaveDivider from "@/components/WaveDivider";

// Data for easy admin panel integration
const statsData = [
  { value: "2500+", label: "Students Enrolled" },
  { value: "150+", label: "Qualified Teachers" },
  { value: "98%", label: "Pass Percentage" },
  { value: "25+", label: "Years Active" },
];

const QuickStats = () => {
  return (
    <section className="bg-olive py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center py-2 sm:py-0"
            >
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-mustard mb-1 sm:mb-2">
                {stat.value}
              </p>
              <p className="text-cream/80 text-xs sm:text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <WaveDivider fillColor="hsl(var(--cream))" className="mt-12 sm:mt-16" />
    </section>
  );
};

export default QuickStats;
