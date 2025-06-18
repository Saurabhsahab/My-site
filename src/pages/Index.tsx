
import { useEffect, Suspense, lazy } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LoadingSpinner from "../components/LoadingSpinner";
import SEO from "../components/SEO";

const Summary = lazy(() => import("../components/Summary"));
const Experience = lazy(() => import("../components/Experience"));
const Skills = lazy(() => import("../components/Skills"));
const Education = lazy(() => import("../components/Education"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

const Index = () => {
  useEffect(() => {
    document.title = "Saurabh Upadhayay | Software Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative">
      <SEO />
      <Header />
      <main className="relative z-10">
        <section id="home" className="min-h-screen flex items-center pt-32 pb-16 relative z-20">
          <Hero />
        </section>
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="about" className="py-24 bg-white/95 backdrop-blur-sm border-y border-gray-100 relative z-30">
            <div className="container mx-auto px-6 max-w-7xl">
              <Summary />
            </div>
          </section>
          
          <section id="experience" className="py-24 bg-gradient-to-br from-gray-50/95 to-blue-50/70 backdrop-blur-sm relative z-30">
            <div className="container mx-auto px-6 max-w-7xl">
              <Experience />
            </div>
          </section>
          
          <section id="skills" className="py-24 bg-white/95 backdrop-blur-sm border-y border-gray-100 relative z-30">
            <div className="container mx-auto px-6 max-w-7xl">
              <Skills />
            </div>
          </section>
          
          <section id="education" className="py-24 bg-gradient-to-br from-purple-50/50 to-blue-50/70 backdrop-blur-sm relative z-30">
            <div className="container mx-auto px-6 max-w-7xl">
              <Education />
            </div>
          </section>
          
          <section id="contact" className="py-24 bg-white/95 backdrop-blur-sm border-t border-gray-100 relative z-30">
            <div className="container mx-auto px-6 max-w-7xl">
              <Contact />
            </div>
          </section>
          
          <div className="relative z-30">
            <Footer />
          </div>
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
