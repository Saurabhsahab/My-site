
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -left-10 -top-10 text-8xl font-bold text-white opacity-10"
              >
                SDE
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 relative z-10">
                Saurabh Upadhayay
              </h1>
            </div>
            
            <h2 className="text-xl md:text-2xl mb-6 text-indigo-200">
              Member of Technical Staff at LambdaTest
            </h2>
            <p className="text-lg md:text-xl mb-8 text-indigo-100 max-w-xl">
              Backend specialist with expertise in system optimization, virtualization, and high-performance applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-indigo-900 font-medium rounded-md hover:bg-indigo-100 transition-colors transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                Get in Touch
              </Link>
              <Link 
                to="/experience" 
                className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors transform hover:-translate-y-1 duration-300"
              >
                View Experience
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-2/5"
          >
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-1 rounded-2xl shadow-2xl">
              <div className="bg-white rounded-2xl p-4">
                <div className="bg-gray-100 rounded-xl p-6">
                  <div className="flex mb-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">SU</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">Saurabh Upadhayay</h3>
                      <p className="text-gray-600">MTS at LambdaTest</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-gray-700">Backend Development</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                      <span className="text-gray-700">System Optimization</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      <span className="text-gray-700">Mentorship</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-indigo-600">4+</div>
                      <div className="text-xs text-gray-500">Years Exp</div>
                    </motion.div>
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-indigo-600">10+</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </motion.div>
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-indigo-600">5+</div>
                      <div className="text-xs text-gray-500">Technologies</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
