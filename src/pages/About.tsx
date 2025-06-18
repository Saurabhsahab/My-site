
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
                I'm <strong>Saurabh Upadhayay</strong>, a Software Development Engineer with 3+ years of experience
                building high-performance distributed systems. My core expertise lies in backend development using
                <strong> Golang</strong>, <strong>Kafka</strong>, <strong>Kinesis</strong>, and <strong>cloud-native architectures</strong>, with hands-on work across multiple domains like FinTech, Infrastructure, and Virtualization.
              </p>

              <p className="text-lg text-gray-700 mt-4">
                At <strong>LambdaTest</strong>, I work on critical systems like macOS virtualization and HyperExecute,
                optimizing VM performance, reducing infrastructure costs, and delivering seamless cross-cloud
                storage solutions. Previously at <strong>Epifi (Fi Money)</strong>, I led initiatives around credit card onboarding,
                server-driven UI, and SSE-based live trading updates, significantly improving user engagement and system efficiency.
              </p>

              <p className="text-lg text-gray-700 mt-4">
                I’ve had the opportunity to work on 0→1 product features — from building orchestrators with Temporal
                to architecting event-driven pipelines using AWS Kinesis and Snowflake. My focus remains on solving
                real-world engineering problems with clarity, performance, and scale in mind.
              </p>

              <p className="text-lg text-gray-700 mt-4">
                I am deeply enthusiastic about developer experience, system design, and observability. I enjoy
                mentoring others, contributing to open-source, and keeping up with evolving backend and cloud ecosystems.
                Outside of code, I rank among the top in platforms like HackerEarth and Google Kickstart and have
                mentored developers through Masai School and academic workshops.
              </p>

              <p className="text-lg text-gray-700 mt-4">
                Currently, I'm exploring opportunities to join a mission-driven company where I can take on more ownership,
                collaborate with talented engineers, and continue building reliable software at scale.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
};

export default About;
