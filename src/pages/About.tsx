
import Header from "../components/Header";
import Footer from "../components/Footer";
import Summary from "../components/Summary";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | Saurabh Upadhayay";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <Summary />
          <div className="mt-8 prose prose-indigo max-w-none">
            <p className="text-lg text-gray-700">
              I am a passionate Software Development Engineer with experience in designing and
              implementing robust back-end solutions. My expertise lies in optimizing system
              performance, implementing efficient data structures, and solving complex problems.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Currently working at LambdaTest, I focus on creating scalable applications and
              services that deliver exceptional user experiences. I am committed to continuous
              learning and staying updated with the latest technologies and best practices in
              software development.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
