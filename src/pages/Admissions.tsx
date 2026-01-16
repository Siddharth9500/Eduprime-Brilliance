import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { admissionProcess, feeStructure } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, CheckCircle } from "lucide-react";

const Admissions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Join Us</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              Admissions
            </h1>
            <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg">
              Begin your journey to excellence. Join the EduPrime family today.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-navy-dark font-semibold">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">How to Apply</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Admission Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

                {/* Steps */}
                {admissionProcess.map((step, index) => (
                  <div
                    key={step.step}
                    className={`relative flex items-start gap-8 mb-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Step Number */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-background shadow-lg">
                        <span className="text-gold font-bold text-lg">{step.step}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className="bg-card p-6 rounded-xl shadow-soft border border-border hover:shadow-card transition-all duration-300">
                        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">Investment in Future</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Fee Structure
              </h2>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-6 py-4 text-left font-display text-lg rounded-tl-xl">Level</th>
                    <th className="px-6 py-4 text-right font-display text-lg">Tuition Fee</th>
                    <th className="px-6 py-4 text-right font-display text-lg">Admission Fee</th>
                    <th className="px-6 py-4 text-right font-display text-lg rounded-tr-xl">Total (Annual)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr
                      key={fee.level}
                      className={`${
                        index % 2 === 0 ? 'bg-card' : 'bg-background'
                      } border-b border-border hover:bg-gold/5 transition-colors`}
                    >
                      <td className="px-6 py-5 font-medium text-foreground">{fee.level}</td>
                      <td className="px-6 py-5 text-right text-muted-foreground">{fee.tuition}</td>
                      <td className="px-6 py-5 text-right text-muted-foreground">{fee.admission}</td>
                      <td className="px-6 py-5 text-right font-bold text-gold">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-muted-foreground mt-8 text-sm">
              * Fees are subject to annual revision. Scholarships available for meritorious students.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Join Our Family?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Take the first step towards academic excellence. Apply now for the 2026-27 session.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-navy-dark font-semibold">
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
