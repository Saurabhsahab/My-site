import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Rocket, Star, ArrowRight, MapPin, Sparkles, Zap, Award } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 z-10">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-300/20 via-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/20 via-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.2, 0.08]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-indigo-200/15 to-purple-200/15 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          <div className="text-center lg:text-left space-y-10">
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                className="h-2 bg-gradient-to-r from-purple-600 via-blue-600 via-cyan-500 to-indigo-600 rounded-full mb-8 max-w-40 mx-auto lg:mx-0 shadow-lg"
              />
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <motion.span 
                  className="block text-gray-900 mb-3 drop-shadow-sm"
                  whileHover={{ scale: 1.02, color: "#1f2937" }}
                  transition={{ duration: 0.3 }}
                >
                  Saurabh
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-purple-600 via-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Upadhayay
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center justify-center lg:justify-start space-x-5">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-4 h-4 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-full shadow-lg"
                />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Member of Technical Staff at 
                  <motion.span 
                    className="text-transparent bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-700 bg-clip-text ml-2 font-extrabold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    LambdaTest
                  </motion.span>
                </h2>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start text-gray-700 space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-6 h-6 text-purple-600" />
                </motion.div>
                <span className="font-semibold text-xl">Noida, Uttar Pradesh, India</span>
              </div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              Crafting high-performance backend solutions with expertise in 
              <motion.span 
                className="text-purple-800 font-bold mx-2 px-3 py-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                system optimization
              </motion.span>, 
              <motion.span 
                className="text-blue-800 font-bold mx-2 px-3 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                security
              </motion.span>, and 
              <motion.span 
                className="text-cyan-800 font-bold mx-2 px-3 py-2 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                scalable applications
              </motion.span>.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              <motion.button 
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-500 flex items-center group shadow-2xl hover:shadow-purple-500/25 border-2 border-transparent hover:border-white/30"
              >
                <Rocket className="w-6 h-6 mr-4 group-hover:rotate-12" />
                Get in Touch
                <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/projects"
                  className="bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white text-gray-900 font-bold py-5 px-10 rounded-2xl border-2 border-gray-300 hover:border-purple-400 transition-all duration-500 flex items-center group shadow-2xl hover:shadow-blue-500/25"
                >
                  <Star className="w-6 h-6 mr-4 text-yellow-500 group-hover:rotate-12" />
                  View Projects
                  <Sparkles className="w-6 h-6 ml-4 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative max-w-lg w-full">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-purple-300/40 via-blue-300/40 to-cyan-300/40 rounded-3xl blur-3xl"
              />
              <motion.div 
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-gray-100/80 p-10 hover:shadow-3xl transition-all duration-700 hover:border-purple-200"
              >
                <div className="flex mb-10 items-center">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.4 }}
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white flex items-center justify-center text-3xl font-bold shadow-2xl relative overflow-hidden"
                  >
                    <span className="relative z-10">SU</span>
                    <motion.div
                      animate={{ 
                        scale: [0, 1.2, 0],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-white rounded-2xl"
                    />
                  </motion.div>
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-gray-900">Saurabh Upadhayay</h3>
                    <p className="text-transparent bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text font-bold text-xl">MTS at LambdaTest</p>
                  </div>
                </div>
                
                <div className="space-y-6 mb-10">
                  {[
                    { icon: "💻", text: "Backend Development", gradient: "from-blue-600 to-cyan-600" },
                    { icon: "⚡", text: "System Optimization", gradient: "from-yellow-600 to-orange-600" },
                    { icon: "🚀", text: "Technical Leadership", gradient: "from-emerald-600 to-teal-600" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 10, scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center p-7 rounded-2xl bg-gradient-to-r from-gray-50/90 to-white/90 backdrop-blur-sm border-2 border-gray-100 hover:from-white hover:to-gray-50 hover:border-purple-200 hover:shadow-xl transition-all duration-500"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white text-2xl mr-6 shadow-xl`}>
                        {item.icon}
                      </div>
                      <span className="text-gray-800 font-bold text-xl">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-5">
                  {[
                    { value: "4+", label: "Years Exp", color: "from-purple-700 to-purple-800", bg: "from-purple-50 to-purple-100" },
                    { value: "10+", label: "Projects", color: "from-blue-700 to-blue-800", bg: "from-blue-50 to-blue-100" },
                    { value: "5+", label: "Technologies", color: "from-cyan-700 to-cyan-800", bg: "from-cyan-50 to-cyan-100" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -8, scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      className={`text-center p-7 rounded-2xl bg-gradient-to-br ${stat.bg} backdrop-blur-sm border-2 border-white/80 hover:border-purple-200 hover:shadow-xl transition-all duration-500`}
                    >
                      <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>{stat.value}</div>
                      <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
