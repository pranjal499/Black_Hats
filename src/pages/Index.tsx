import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { EventFeed } from "@/components/EventFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EventFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
