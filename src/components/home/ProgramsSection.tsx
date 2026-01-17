import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveDivider from "@/components/WaveDivider";

// Data for easy admin panel integration
const programsData = [
  {
    id: 1,
    title: "Primary School",
    features: ["Grades 1-5", "Foundation building", "Activity-based learning", "Regular assessments"],
    color: "bg-mustard/10",
    borderColor: "border-mustard/30",
  },
  {
    id: 2,
    title: "Middle School",
    features: ["Grades 6-8", "Subject specialization", "Lab experiments", "Sports integration"],
    color: "bg-orange/10",
    borderColor: "border-orange/30",
  },
  {
    id: 3,
    title: "Secondary School",
    features: ["Grades 9-10", "Board preparation", "Career counseling", "Leadership programs"],
    color: "bg-olive/10",
    borderColor: "border-olive/30",
  },
  {
    id: 4,
    title: "Higher Secondary",
    features: ["Grades 11-12", "Stream selection", "Competitive prep", "College guidance"],
    color: "bg-mustard/10",
    borderColor: "border-mustard/30",
  },
];

const ProgramsSection = () => {
  return (
    <section className="bg-beige py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-olive brush-underline inline-block">
            Our Programs
          </h2>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {programsData.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${program.color} ${program.borderColor} border-2 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1`}
            >
              <h3 className="font-serif text-lg sm:text-xl font-bold text-olive mb-3 sm:mb-4">
                {program.title}
              </h3>
              
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-olive shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="ghost"
                className="w-full justify-between text-olive hover:bg-olive/10 rounded-lg sm:rounded-xl group text-sm sm:text-base h-10 sm:h-11"
              >
                Know More
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <WaveDivider fillColor="hsl(var(--olive))" className="mt-12 sm:mt-16" />
    </section>
  );
};

export default ProgramsSection;
