import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { aboutTabs } from "@/data/siteData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { History, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Story</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              About EduPrime Academy
            </h1>
            <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg">
              Seven decades of shaping minds, building character, and creating leaders
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="history" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-muted p-1 rounded-xl">
                <TabsTrigger value="history" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg py-3">
                  <History className="h-4 w-4" />
                  <span className="hidden sm:inline">History</span>
                </TabsTrigger>
                <TabsTrigger value="mission" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg py-3">
                  <Target className="h-4 w-4" />
                  <span className="hidden sm:inline">Mission & Vision</span>
                </TabsTrigger>
                <TabsTrigger value="leadership" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg py-3">
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Leadership</span>
                </TabsTrigger>
              </TabsList>

              {/* History Tab */}
              <TabsContent value="history" className="animate-fade-up">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                      {aboutTabs.history.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {aboutTabs.history.content}
                    </p>
                  </div>
                  <div className="bg-muted rounded-2xl p-8">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-6">Key Milestones</h3>
                    <div className="space-y-6">
                      {aboutTabs.history.milestones.map((milestone, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                              <span className="text-gold font-bold text-sm">{milestone.year}</span>
                            </div>
                            {index < aboutTabs.history.milestones.length - 1 && (
                              <div className="w-0.5 h-full bg-border mt-2" />
                            )}
                          </div>
                          <div className="pt-3">
                            <p className="text-foreground font-medium">{milestone.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Mission Tab */}
              <TabsContent value="mission" className="animate-fade-up">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                    <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-primary-foreground/90 leading-relaxed text-lg">
                      {aboutTabs.mission.mission}
                    </p>
                  </div>
                  <div className="bg-gold rounded-2xl p-8">
                    <h3 className="font-display text-2xl font-bold text-navy-dark mb-4">Our Vision</h3>
                    <p className="text-navy-dark/90 leading-relaxed text-lg">
                      {aboutTabs.mission.vision}
                    </p>
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-8">Our Core Values</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {aboutTabs.mission.values.map((value) => (
                      <span
                        key={value}
                        className="px-6 py-3 bg-muted rounded-full text-foreground font-medium border border-border hover:border-gold hover:bg-gold/10 transition-all duration-200"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Leadership Tab */}
              <TabsContent value="leadership" className="animate-fade-up">
                <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
                  Leadership Team
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {aboutTabs.leadership.map((leader, index) => (
                    <div key={index} className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                      <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-display text-gold font-bold">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h4 className="font-display text-lg font-semibold text-foreground">{leader.name}</h4>
                      <p className="text-gold text-sm font-medium mt-1">{leader.role}</p>
                      <p className="text-muted-foreground text-sm mt-2">{leader.qualification}</p>
                    </div>
                  ))}
                </div>
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
