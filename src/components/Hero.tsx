
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Rocket, Star, ArrowRight, MapPin, Sparkles } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
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
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
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
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-1.5 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-full mb-8 max-w-32 mx-auto lg:mx-0"
              />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <motion.span 
                  className="block text-gray-900 mb-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Saurabh
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Upadhayay
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                />
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Member of Technical Staff at 
                  <motion.span 
                    className="text-purple-700 ml-2 font-extrabold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    LambdaTest
                  </motion.span>
                </h2>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start text-gray-700 space-x-3">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-lg">Noida, Uttar Pradesh, India</span>
              </div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              Crafting high-performance backend solutions with expertise in 
              <motion.span 
                className="text-purple-800 font-bold mx-1 px-2 py-1 bg-purple-100 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                system optimization
              </motion.span>, 
              <motion.span 
                className="text-blue-800 font-bold mx-1 px-2 py-1 bg-blue-100 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                security
              </motion.span>, and 
              <motion.span 
                className="text-indigo-800 font-bold mx-1 px-2 py-1 bg-indigo-100 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                scalable applications
              </motion.span>.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              <motion.button 
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center group shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-white/20"
              >
                <Rocket className="w-5 h-5 mr-3" />
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/projects"
                  className="bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-2xl border-2 border-gray-300 hover:border-purple-400 transition-all duration-300 flex items-center group shadow-xl hover:shadow-2xl"
                >
                  <Star className="w-5 h-5 mr-3 text-yellow-500" />
                  View Projects
                  <Sparkles className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative max-w-md w-full">
              <motion.div 
                animate={{ 
                  scale: [1, 1.03, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-blue-200/50 rounded-3xl blur-2xl"
              />
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-gray-100/80 p-8 hover:shadow-3xl transition-all duration-500"
              >
                <div className="flex mb-8 items-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold shadow-xl relative overflow-hidden"
                  >
                    <span className="relative z-10">SU</span>
                    <motion.div
                      animate={{ scale: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-white/20 rounded-2xl"
                    />
                  </motion.div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900">Saurabh Upadhayay</h3>
                    <p className="text-purple-700 font-bold text-lg">MTS at LambdaTest</p>
                  </div>
                </div>
                
                <div className="space-y-5 mb-8">
                  {[
                    { icon: "💻", text: "Backend Development", color: "from-blue-600 to-cyan-600" },
                    { icon: "⚡", text: "System Optimization", color: "from-yellow-600 to-orange-600" },
                    { icon: "🚀", text: "Technical Leadership", color: "from-emerald-600 to-teal-600" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center p-6 rounded-xl bg-gray-50/90 backdrop-blur-sm border-2 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-xl mr-5 shadow-lg`}>
                        {item.icon}
                      </div>
                      <span className="text-gray-800 font-bold text-lg">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "4+", label: "Years Exp", color: "text-purple-700" },
                    { value: "10+", label: "Projects", color: "text-blue-700" },
                    { value: "5+", label: "Technologies", color: "text-indigo-700" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="text-center p-6 rounded-xl bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm border-2 border-gray-100 hover:from-gray-50/95 hover:to-white/95 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
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
