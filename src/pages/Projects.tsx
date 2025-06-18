
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Database, Globe, Sparkles, ArrowUpRight } from "lucide-react";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Saurabh Upadhayay";
  }, []);

  const projects = [
    {
      title: "Tax Statement Generator & Backend Systems – Fi Money",
      description:
          "Built and optimized multiple backend services at Fi Money, including a tax statement generator for emailing income reports, server-driven UI orchestration, live SSE streams for real-time updates, and a high-scale communication scheduler. Implemented performance optimization with Kinesis + S3 + Snowflake for real-time analytics.",
      tech: [
        "Golang", "SQL", "Redis", "Protocol Buffers", "gRPC", "Temporal",
        "Kinesis", "Snowflake", "PostgreSQL", "HTML", "CSS", "JavaScript"
      ],
      link: "https://fi.money/",
      type: "Backend Systems",
      icon: <Database className="h-6 w-6" />,
      gradient: "from-emerald-400 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      title: "HyperExecute – LambdaTest",
      description:
          "Core contributor to HyperExecute platform — worked on scheduling engine for Kane AI & Accessibility, macOS virtualization, VM execution optimization, storage lifecycle management, and WebDriver mode integration for Selenium. Improved system performance and resource utilization across multiple dimensions.",
      tech: [
        "Golang", "Kubernetes", "Redis", "Protocol Buffers", "gRPC", "Docker",
        "AWS", "Azure", "Terraform", "Temporal", "CI/CD", "Grafana", "Opensearch"
      ],
      link: "https://www.lambdatest.com/hyperexecute",
      type: "Smart Test Orchestration",
      icon: <Globe className="h-6 w-6" />,
      gradient: "from-purple-400 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      title: "Data Structures & Algorithms Library",
      description:
          "A hand-built C++ library of optimized data structures and algorithms used in competitive programming. Includes segment trees, binary indexed trees, graph algorithms, and advanced DP patterns.",
      tech: ["C++", "STL", "DSA", "Algorithms", "Templates"],
      link: "https://i-s0nic.github.io/Code_It_Out/",
      type: "Competitive Programming Resource",
      icon: <Code2 className="h-6 w-6" />,
      gradient: "from-blue-400 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <SEO 
        title="Projects | Saurabh Upadhayay"
        description="Explore the innovative projects and technical solutions developed by Saurabh Upadhayay, including full-stack applications, backend systems, and algorithmic libraries."
      />
      <Header />
      <main className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <Sparkles className="w-12 h-12 text-purple-500 animate-pulse" />
                <div className="absolute inset-0 w-12 h-12 bg-purple-500/20 rounded-full blur-xl animate-ping"></div>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of innovative solutions and technical expertise across full-stack development, 
              backend systems, and algorithmic implementations.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3 } 
                }}
                className="group relative overflow-hidden"
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl transform scale-105`}></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 h-full">
                  {/* Header gradient bar */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-4 bg-gradient-to-br ${project.gradient} rounded-2xl text-white shadow-lg`}
                      >
                        {project.icon}
                      </motion.div>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent px-4 py-2 rounded-full border border-gray-200`}>
                        {project.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * techIndex }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group/btn relative inline-flex items-center justify-center w-full bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-purple-500/25 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center">
                        {project.link.includes('github') ? (
                          <>
                            <Github className="h-5 w-5 mr-2 group-hover/btn:animate-pulse" />
                            <span>View Code</span>
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-5 w-5 mr-2 group-hover/btn:animate-pulse" />
                            <span>Live Demo</span>
                          </>
                        )}
                        <ArrowUpRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-20"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-white/50 shadow-xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                  More Projects Coming Soon!
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  I'm constantly working on new projects and expanding my technical expertise. 
                  Stay tuned for more innovative solutions and creative implementations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
