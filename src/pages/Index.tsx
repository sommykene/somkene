import { Navigation } from "@/components/Navigation";
import { Hero } from "@/pages/sections/Hero";
import { About } from "@/pages/sections/About";
import { Skills } from "@/pages/sections/Skills";
import { Projects } from "@/pages/sections/Projects";
import { Footer } from "@/pages/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
