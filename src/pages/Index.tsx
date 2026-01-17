import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import AcademicsPreview from "@/components/home/AcademicsPreview";
import ProgramsSection from "@/components/home/ProgramsSection";
import QuickStats from "@/components/home/QuickStats";
import AdmissionsTimeline from "@/components/home/AdmissionsTimeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <AcademicsPreview />
        <ProgramsSection />
        <QuickStats />
        <AdmissionsTimeline />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
