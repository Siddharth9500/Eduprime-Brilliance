import { motion } from "framer-motion";
import { ClipboardList, PenTool, Users, FileCheck, Mail, GraduationCap } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

// Data for easy admin panel integration
const admissionSteps = [
  { 
    step: 1, 
    title: "Submit Application", 
    description: "Fill out the online application form with required documents.",
    icon: ClipboardList 
  },
  { 
    step: 2, 
    title: "Entrance Assessment", 
    description: "Students appear for our comprehensive aptitude test.",
    icon: PenTool 
  },
  { 
    step: 3, 
    title: "Personal Interview", 
    description: "Meet with our academic counselors and faculty members.",
    icon: Users 
  },
  { 
    step: 4, 
    title: "Document Verification", 
    description: "Submit and verify all academic records and certificates.",
    icon: FileCheck 
  },
  { 
    step: 5, 
    title: "Admission Offer", 
    description: "Successful candidates receive their admission letters.",
    icon: Mail 
  },
  { 
    step: 6, 
    title: "Welcome to EduPrime!", 
    description: "Complete fee payment and join our family.",
    icon: GraduationCap 
  },
];

const AdmissionsTimeline = () => {
  return (
    <section className="bg-cream py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive brush-underline inline-block">
            Admission Process
          </h2>
          <p className="text-muted-foreground mt-8 max-w-xl mx-auto">
            Follow these simple steps to join our learning community
          </p>
        </motion.div>

        {/* Snake Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Curved Path SVG */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-full hidden md:block"
            preserveAspectRatio="none"
          >
            <path
              d="M400,60 C550,60 550,160 400,160 C250,160 250,260 400,260 C550,260 550,360 400,360 C250,360 250,460 400,460 C550,460 550,560 400,560"
              fill="none"
              stroke="hsl(var(--mustard))"
              strokeWidth="3"
              strokeDasharray="8 8"
              className="opacity-50"
            />
          </svg>

          {/* Timeline Steps */}
          <div className="space-y-12 relative">
            {admissionSteps.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div className={`bg-card rounded-2xl p-6 shadow-soft border border-border inline-block ${isLeft ? "md:ml-auto" : ""}`}>
                      <h3 className="font-serif text-lg font-bold text-olive mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Step Circle */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-mustard flex items-center justify-center shadow-mustard">
                      <Icon className="h-7 w-7 text-olive" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-olive text-cream text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <WaveDivider fillColor="hsl(var(--olive))" className="mt-16" />
    </section>
  );
};

export default AdmissionsTimeline;
