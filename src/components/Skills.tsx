import { motion } from "framer-motion";

const skillsData = {
  technical: [
    { name: "Golang", level: 90 },
    { name: "System Optimization", level: 85 },
    { name: "Virtualization", level: 85 },
    { name: "Backend Development", level: 90 },
    { name: "Kubernetes", level: 80 },
    { name: "Redis", level: 85 },
    { name: "SQL", level: 85 },
    { name: "Protocol Buffers", level: 85 },
    { name: "gRPC", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Test Automation", level: 85 },
    { name: "Java", level: 80 },
    { name: "Python", level: 80 },
    { name: "C++", level: 75 },
  ],
  tools: [
    "AWS", "Azure", "Docker", "Git", "PostgreSQL", 
    "CockroachDB", "Selenium", "CI/CD", "Temporal", 
    "macOS", "Linux", "HyperExecute", "Snowflake"
  ],
  soft: [
    "Problem Solving", "Mentorship", "Technical Communication", 
    "Team Collaboration", "Time Management", "Adaptability", 
    "Leadership", "Innovation"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My expertise is anchored in backend system optimization, cloud infrastructure, and scalable architectures, with deep experience in Golang, virtualization, and high-performance backend solutions. I consistently deliver results through strong algorithmic knowledge, a wide range of engineering tools, and a commitment to continual learning.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm h-full">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Core Technical Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillsData.technical.slice(0, Math.ceil(skillsData.technical.length / 2)).map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-indigo-600"
                      ></motion.div>
                    </div>
                  </div>
                ))}
                
                {skillsData.technical.slice(Math.ceil(skillsData.technical.length / 2)).map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * (index + Math.ceil(skillsData.technical.length / 2)) }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-indigo-600"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.tools.map((tool, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Professional Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.soft.map((skill, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
