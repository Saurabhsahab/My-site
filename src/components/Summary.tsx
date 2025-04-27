
import { motion } from "framer-motion";

const Summary = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-8"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:shadow-xl transition-all duration-300"
          >
            <div className="p-8 md:p-10">
              <div className="prose prose-lg max-w-none text-gray-700">
                <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="mb-6">
                  Hello, I'm Saurabh Upadhayay, a passionate and results-driven Software Development Engineer at LambdaTest. 
                  With a strong foundation in backend development, I specialize in crafting innovative solutions that elevate 
                  user engagement, streamline system efficiency, and drive impactful results.
                </motion.p>
                
                <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="mb-6">
                  I thrive on embracing the latest advancements in software development, constantly exploring new tools, 
                  technologies, and methodologies to refine my skill set and stay ahead of the curve. My dedication to 
                  continual growth in the tech space is matched only by my drive to deliver high-quality code and impactful solutions.
                </motion.p>
                
                <motion.p {...fadeIn} transition={{ delay: 0.3 }} className="mb-6">
                  Beyond my technical endeavors, I am deeply committed to giving back to the programming community. 
                  As a mentor at Masai, I empower aspiring coders by guiding them through the challenges of competitive 
                  programming using Core Java, Python, and JavaScript. My love for mentorship is fueled by the belief 
                  that sharing knowledge and nurturing talent is key to building a thriving, collaborative ecosystem.
                </motion.p>
                
                <motion.p {...fadeIn} transition={{ delay: 0.4 }} className="mb-6">
                  My track record includes not only success in the development world but also achievements in coding 
                  competitions, where I continually push myself to solve complex problems and sharpen my skills.
                </motion.p>
                
                <motion.p {...fadeIn} transition={{ delay: 0.5 }}>
                  Looking forward to connecting with like-minded professionals and potential collaborators in the tech community.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
