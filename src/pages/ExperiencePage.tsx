
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import { useEffect } from "react";

const ExperiencePage = () => {
  useEffect(() => {
    document.title = "Experience | Saurabh Upadhayay";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">My Professional Experience</h1>
          <Experience />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
