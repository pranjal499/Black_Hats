import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { ValuePropositionSection } from '@/components/ValuePropositionSection';
import { DifferentiatorSection } from '@/components/DifferentiatorSection';
import { TargetAudienceSection } from '@/components/TargetAudienceSection';
import { ScorecardPreviewSection } from '@/components/ScorecardPreviewSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Footer } from '@/components/Footer';

const Home = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <HowItWorksSection />
          <ValuePropositionSection />
          <DifferentiatorSection />
          <TargetAudienceSection />
          <ScorecardPreviewSection />
          <TestimonialsSection />
          <PricingSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;