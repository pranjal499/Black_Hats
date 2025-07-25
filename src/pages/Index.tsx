import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { EventFeed } from "@/components/EventFeed";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection onSearch={setSearchTerm} />
        <EventFeed searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
