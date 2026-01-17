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
    <section className="bg-cream py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-olive brush-underline inline-block">
            Admission Process
          </h2>
          <p className="text-muted-foreground mt-6 sm:mt-8 max-w-xl mx-auto text-sm sm:text-base px-4">
            Follow these simple steps to join our learning community
          </p>
        </motion.div>

        {/* Snake Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Curved Path SVG - hidden on mobile */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-full hidden lg:block"
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

          {/* Vertical line for mobile */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-mustard/30 lg:hidden" />

          {/* Timeline Steps */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 relative">
            {admissionSteps.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-4 sm:gap-6 lg:items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Circle - always first on mobile */}
                  <div className="relative z-10 shrink-0 lg:order-none">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-mustard flex items-center justify-center shadow-mustard">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-olive" />
                    </div>
                    <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-olive text-cream text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-soft border border-border inline-block max-w-full sm:max-w-sm lg:max-w-none ${isLeft ? "lg:ml-auto" : ""}`}>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-olive mb-1 sm:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer - desktop only */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <WaveDivider fillColor="hsl(var(--olive))" className="mt-12 sm:mt-16" />
    </section>
  );
};

export default AdmissionsTimeline;
