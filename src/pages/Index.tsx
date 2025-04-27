
import Header from "../components/Header";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "Saurabh Upadhayay | Software Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
