
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <SEO />
      <Header />
      <main className="relative">
        <section id="home" className="min-h-screen flex items-center pt-24 pb-12">
          <Hero />
        </section>
        
        <Suspense fallback={<LoadingSpinner />}>
          <section id="about" className="py-24 bg-white/90 backdrop-blur-sm border-y border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl">
              <Summary />
            </div>
          </section>
          
          <section id="experience" className="py-24 bg-gradient-to-br from-gray-50/90 to-blue-50/60 backdrop-blur-sm">
            <div className="container mx-auto px-6 max-w-7xl">
              <Experience />
            </div>
          </section>
          
          <section id="skills" className="py-24 bg-white/90 backdrop-blur-sm border-y border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl">
              <Skills />
            </div>
          </section>
          
          <section id="education" className="py-24 bg-gradient-to-br from-purple-50/40 to-blue-50/60 backdrop-blur-sm">
            <div className="container mx-auto px-6 max-w-7xl">
              <Education />
            </div>
          </section>
          
          <section id="contact" className="py-24 bg-white/90 backdrop-blur-sm border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl">
              <Contact />
            </div>
          </section>
          
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
