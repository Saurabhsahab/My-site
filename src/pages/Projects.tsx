
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Saurabh Upadhayay";
  }, []);

  const projects = [
    {
      title: "Tax Statement Generator",
      description: "Implemented a report generator button to send tax statement reports via email to users, facilitating proof of income and refund claims.",
      tech: ["Golang", "SQL", "Protocol Buffers", "gRPCs", "HTML", "CSS", "JS"],
      link: "https://fi.money/"
    },
    {
      title: "Combett",
      description: "Developed a fullstack platform that helps in building a community where we can help each other in every aspect of software engineering, be it coding, development, placement preparation by providing right resources and direct interactions among the community.",
      tech: ["Node.js", "Express.js", "MongoDB Atlas", "Redis"],
      link: "https://github.com/Saurabhsahab/combett"
    },
    {
      title: "Data Structures Library",
      description: "A comprehensive library of data structures and algorithms implementations in C++.",
      tech: ["C++", "STL", "Algorithms"],
      link: "https://saurabhsahab.github.io/Code_It_Out/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-10">My Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                  >
                    View on GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
