import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WaveDivider from "@/components/WaveDivider";
import { CheckCircle } from "lucide-react";

// Data for easy admin panel integration
const academicStreams = [
  {
    id: "primary",
    title: "Primary School",
    description: "Building strong foundations through play-based learning and structured academics. Our primary program focuses on developing literacy, numeracy, and social skills.",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Art & Craft"],
    highlights: ["Child-centered approach", "Activity-based learning", "Regular parent updates"],
  },
  {
    id: "middle",
    title: "Middle School",
    description: "Bridging elementary concepts with advanced learning. Students develop critical thinking and independent study skills through project-based learning.",
    subjects: ["Mathematics", "Science", "Languages", "Computer Science", "Physical Education"],
    highlights: ["Lab experiments", "Group projects", "Sports integration"],
  },
  {
    id: "secondary",
    title: "Secondary School",
    description: "Preparing students for board examinations with comprehensive academic programs. Focus on conceptual understanding and exam strategies.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Economics"],
    highlights: ["Board preparation", "Career counseling", "Competitive exam prep"],
  },
];

const Academics = () => {
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
              <span className="text-mustard font-medium text-sm uppercase tracking-wider">Programs</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-olive mt-4">
                Academic Programs
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
                Discover our comprehensive curriculum designed for the leaders of tomorrow
              </p>
            </motion.div>
          </div>
          <WaveDivider fillColor="hsl(var(--beige))" className="mt-12" />
        </section>

        {/* Streams */}
        <section className="py-20 bg-beige">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {academicStreams.map((stream, index) => {
                const isReversed = index % 2 === 1;

                return (
                  <motion.div
                    key={stream.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`grid md:grid-cols-2 gap-12 items-center`}
                  >
                    <div className={isReversed ? 'md:order-2' : ''}>
                      <h2 className="font-serif text-3xl font-bold text-olive mb-6 brush-underline inline-block">
                        {stream.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8 mt-8">
                        {stream.description}
                      </p>

                      {/* Subjects */}
                      <div className="mb-8">
                        <h3 className="font-serif text-lg font-bold text-olive mb-4">Core Subjects</h3>
                        <div className="flex flex-wrap gap-3">
                          {stream.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="px-4 py-2 bg-mustard/20 text-olive rounded-xl text-sm font-medium border border-mustard/30"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h3 className="font-serif text-lg font-bold text-olive mb-4">Program Highlights</h3>
                        <ul className="space-y-3">
                          {stream.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-center gap-3 text-muted-foreground">
                              <CheckCircle className="h-5 w-5 text-mustard shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={`${isReversed ? 'md:order-1' : ''}`}>
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-mustard/20 to-orange/20 rounded-3xl blur-xl" />
                        <div className="relative aspect-video rounded-2xl bg-cream flex items-center justify-center shadow-card overflow-hidden border border-border">
                          <div className="text-center p-8">
                            <span className="text-6xl mb-4 block">
                              {index === 0 ? "📚" : index === 1 ? "🔬" : "🎓"}
                            </span>
                            <p className="text-olive font-serif font-bold">{stream.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Academics;
