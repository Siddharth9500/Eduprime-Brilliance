import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import NoticeTicker from "@/components/home/NoticeTicker";
import QuickStats from "@/components/home/QuickStats";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import AcademicsPreview from "@/components/home/AcademicsPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <NoticeTicker />
        <QuickStats />
        <PrincipalMessage />
        <AcademicsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
