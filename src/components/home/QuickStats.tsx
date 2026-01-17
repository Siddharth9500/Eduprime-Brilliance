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
    <section className="bg-olive py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-4xl md:text-5xl font-bold text-mustard mb-2">
                {stat.value}
              </p>
              <p className="text-cream/80 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <WaveDivider fillColor="hsl(var(--cream))" className="mt-16" />
    </section>
  );
};

export default QuickStats;
