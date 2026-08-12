import { useState, useCallback } from "react";
import { Navigation } from "./components/navigation/Navigation";
import { HeroSection } from "./components/hero/HeroSection";
import { IntroSection } from "./components/intro/IntroSection";
import { ScienceSection } from "./components/science/ScienceSection";
import { PlatformSection } from "./components/platform/PlatformSection";
import { CapabilitiesSection } from "./components/capabilities/CapabilitiesSection";
import { ResearchSection } from "./components/research/ResearchSection";
import { ImpactSection } from "./components/impact/ImpactSection";
import { VisualizationSection } from "./components/visualization/VisualizationSection";
import { FinalCTASection } from "./components/cta/FinalCTASection";
import { Footer } from "./components/footer/Footer";
import { Loader } from "./components/loader/Loader";
import { CustomCursor } from "./components/cursor/CustomCursor";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loader onComplete={handleLoadComplete} />}
      <CustomCursor />
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <ScienceSection />
        <PlatformSection />
        <CapabilitiesSection />
        <ResearchSection />
        <ImpactSection />
        <VisualizationSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
};

export default App;
