import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WaveDivider from "@/components/WaveDivider";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, ClipboardList, PenTool, Users, FileCheck, Mail, GraduationCap } from "lucide-react";

// Data for easy admin panel integration
const admissionSteps = [
  { step: 1, title: "Submit Application", description: "Fill out the online application form with required documents.", icon: ClipboardList },
  { step: 2, title: "Entrance Assessment", description: "Students appear for our comprehensive aptitude test.", icon: PenTool },
  { step: 3, title: "Personal Interview", description: "Meet with our academic counselors and faculty members.", icon: Users },
  { step: 4, title: "Document Verification", description: "Submit and verify all academic records and certificates.", icon: FileCheck },
  { step: 5, title: "Admission Offer", description: "Successful candidates receive their admission letters.", icon: Mail },
  { step: 6, title: "Welcome to EduPrime!", description: "Complete fee payment and join our family.", icon: GraduationCap },
];

const feeStructure = [
  { level: "Primary (Grade 1-5)", tuition: "$4,500", admission: "$500", total: "$5,000" },
  { level: "Middle (Grade 6-8)", tuition: "$5,500", admission: "$600", total: "$6,100" },
  { level: "Secondary (Grade 9-10)", tuition: "$6,500", admission: "$700", total: "$7,200" },
  { level: "Higher Secondary (Grade 11-12)", tuition: "$7,500", admission: "$800", total: "$8,300" },
];

const Admissions = () => {
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
              <span className="text-mustard font-medium text-sm uppercase tracking-wider">Join Us</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-olive mt-4">
                Admissions
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
                Begin your journey to excellence. Join the EduPrime family today.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-mustard hover:bg-mustard-light text-olive font-semibold rounded-xl">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </div>
            </motion.div>
          </div>
          <WaveDivider fillColor="hsl(var(--beige))" className="mt-12" />
        </section>

        {/* Snake Timeline */}
        <section className="py-20 bg-beige">
          <div className="container mx-auto px-4">
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
                        <div className={`bg-cream rounded-2xl p-6 shadow-soft border border-border inline-block ${isLeft ? "md:ml-auto" : ""}`}>
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
          <WaveDivider fillColor="hsl(var(--cream))" className="mt-16" />
        </section>

        {/* Fee Structure */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-olive brush-underline inline-block">
                Fee Structure
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-olive text-cream">
                    <th className="px-6 py-4 text-left font-serif text-lg rounded-tl-2xl">Level</th>
                    <th className="px-6 py-4 text-right font-serif text-lg">Tuition Fee</th>
                    <th className="px-6 py-4 text-right font-serif text-lg">Admission Fee</th>
                    <th className="px-6 py-4 text-right font-serif text-lg rounded-tr-2xl">Total (Annual)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr
                      key={fee.level}
                      className={`${
                        index % 2 === 0 ? 'bg-beige' : 'bg-cream'
                      } border-b border-border hover:bg-mustard/5 transition-colors`}
                    >
                      <td className="px-6 py-5 font-medium text-olive">{fee.level}</td>
                      <td className="px-6 py-5 text-right text-muted-foreground">{fee.tuition}</td>
                      <td className="px-6 py-5 text-right text-muted-foreground">{fee.admission}</td>
                      <td className="px-6 py-5 text-right font-bold text-mustard">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-muted-foreground mt-8 text-sm">
              * Fees are subject to annual revision. Scholarships available for meritorious students.
            </p>
          </div>
          <WaveDivider fillColor="hsl(var(--olive))" className="mt-16" />
        </section>

        {/* CTA */}
        <section className="py-20 bg-olive">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
              Ready to Join Our Family?
            </h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              Take the first step towards academic excellence. Apply now for the 2026-27 session.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-mustard hover:bg-mustard-light text-olive font-semibold rounded-xl">
                Start Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
