import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WaveDivider from "@/components/WaveDivider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { History, Target, Users } from "lucide-react";

// Data for easy admin panel integration
const aboutData = {
  history: {
    title: "Our Legacy",
    content: "Founded in 2000 by visionary educators, EduPrime Academy began as a small institution with just 50 students and 5 teachers. Over two decades, we have grown into one of the most respected educational institutions in the region, while maintaining our core values of excellence, integrity, and innovation.",
    milestones: [
      { year: "2000", event: "EduPrime Academy founded" },
      { year: "2005", event: "First computer lab established" },
      { year: "2010", event: "New campus building opened" },
      { year: "2015", event: "International exchange program launched" },
      { year: "2020", event: "Digital learning initiative launched" },
    ],
  },
  mission: {
    title: "Mission & Vision",
    mission: "To nurture intellectual curiosity, foster critical thinking, and develop well-rounded individuals who will contribute positively to society.",
    vision: "To be the beacon of educational excellence, recognized for producing ethical leaders, innovative thinkers, and compassionate citizens.",
    values: ["Excellence", "Integrity", "Innovation", "Inclusivity", "Community"],
  },
  leadership: [
    { name: "Dr. Margaret Richardson", role: "Principal", qualification: "Ph.D. in Educational Leadership" },
    { name: "Prof. James Chen", role: "Vice Principal", qualification: "M.Ed, Cambridge University" },
    { name: "Dr. Sarah Williams", role: "Dean of Students", qualification: "Ed.D in Student Affairs" },
    { name: "Mr. Robert Kumar", role: "Director of Admin", qualification: "MBA, Stanford University" },
  ],
};

const About = () => {
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
              <span className="text-mustard font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-olive mt-4">
                About EduPrime Academy
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
                Two decades of shaping minds, building character, and creating leaders
              </p>
            </motion.div>
          </div>
          <WaveDivider fillColor="hsl(var(--beige))" className="mt-12" />
        </section>

        {/* Tabs Section */}
        <section className="py-20 bg-beige">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="history" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-cream p-2 rounded-2xl border border-border">
                <TabsTrigger value="history" className="flex items-center gap-2 data-[state=active]:bg-olive data-[state=active]:text-cream rounded-xl py-3">
                  <History className="h-4 w-4" />
                  <span className="hidden sm:inline">History</span>
                </TabsTrigger>
                <TabsTrigger value="mission" className="flex items-center gap-2 data-[state=active]:bg-olive data-[state=active]:text-cream rounded-xl py-3">
                  <Target className="h-4 w-4" />
                  <span className="hidden sm:inline">Mission & Vision</span>
                </TabsTrigger>
                <TabsTrigger value="leadership" className="flex items-center gap-2 data-[state=active]:bg-olive data-[state=active]:text-cream rounded-xl py-3">
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Leadership</span>
                </TabsTrigger>
              </TabsList>

              {/* History Tab */}
              <TabsContent value="history">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid md:grid-cols-2 gap-12 items-start"
                >
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-olive mb-6">
                      {aboutData.history.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {aboutData.history.content}
                    </p>
                  </div>
                  <div className="bg-cream rounded-2xl p-8 shadow-soft">
                    <h3 className="font-serif text-xl font-bold text-olive mb-6">Key Milestones</h3>
                    <div className="space-y-6">
                      {aboutData.history.milestones.map((milestone, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-mustard flex items-center justify-center">
                              <span className="text-olive font-bold text-sm">{milestone.year}</span>
                            </div>
                            {index < aboutData.history.milestones.length - 1 && (
                              <div className="w-0.5 h-full bg-border mt-2" />
                            )}
                          </div>
                          <div className="pt-3">
                            <p className="text-olive font-medium">{milestone.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Mission Tab */}
              <TabsContent value="mission">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-olive rounded-2xl p-8 text-cream">
                      <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
                      <p className="text-cream/90 leading-relaxed text-lg">
                        {aboutData.mission.mission}
                      </p>
                    </div>
                    <div className="bg-mustard rounded-2xl p-8">
                      <h3 className="font-serif text-2xl font-bold text-olive mb-4">Our Vision</h3>
                      <p className="text-olive/90 leading-relaxed text-lg">
                        {aboutData.mission.vision}
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 text-center">
                    <h3 className="font-serif text-2xl font-bold text-olive mb-8">Our Core Values</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {aboutData.mission.values.map((value) => (
                        <span
                          key={value}
                          className="px-6 py-3 bg-cream rounded-full text-olive font-medium border border-border hover:border-mustard hover:bg-mustard/10 transition-all duration-200"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Leadership Tab */}
              <TabsContent value="leadership">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="font-serif text-3xl font-bold text-olive mb-8 text-center">
                    Leadership Team
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aboutData.leadership.map((leader, index) => (
                      <div key={index} className="bg-cream rounded-2xl p-6 text-center shadow-soft border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                        <div className="w-24 h-24 rounded-full bg-olive mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-serif text-mustard font-bold">
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <h4 className="font-serif text-lg font-bold text-olive">{leader.name}</h4>
                        <p className="text-mustard text-sm font-medium mt-1">{leader.role}</p>
                        <p className="text-muted-foreground text-sm mt-2">{leader.qualification}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
