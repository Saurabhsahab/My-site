
import { motion } from "framer-motion";

const skillsData = {
  technical: [
    { name: "Golang", level: 90, category: "Backend" },
    { name: "System Design", level: 90, category: "Architecture" }, 
    { name: "Backend Development", level: 90, category: "Backend" },
    { name: "System Optimization", level: 85, category: "Performance" },
    { name: "Virtualization", level: 85, category: "Infrastructure" },
    { name: "Kubernetes", level: 85, category: "DevOps" },
    { name: "Redis", level: 85, category: "Database" },
    { name: "SQL", level: 85, category: "Database" },
    { name: "Protocol Buffers", level: 85, category: "Backend" },
    { name: "gRPC", level: 85, category: "Backend" },
    { name: "Java", level: 80, category: "Backend" },
    { name: "Python", level: 80, category: "Backend" },
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "C++", level: 75, category: "Systems" },
  ],
  tools: [
    "AWS", "Azure", "Docker", "Kinesis", "Terraform",
    "Git", "PostgreSQL", "MySQL", "CockroachDB",
    "Selenium", "CI/CD", "Temporal", "HyperExecute",
    "macOS", "Linux", "Snowflake", "Grafana", "Kafka",
    "NodeJS", "Consul", "SumoLogic", "OpenSearch", "DynamoDB"
  ],
  soft: [
    "Problem Solving", "Mentorship", "Technical Communication",
    "Team Collaboration", "Time Management", "Adaptability",
    "Leadership", "Ownership", "System Thinking"
  ]
};

const skillCategories = {
  "Backend": { color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50" },
  "Architecture": { color: "from-purple-600 to-purple-800", bgColor: "bg-purple-50" },
  "Performance": { color: "from-green-600 to-green-800", bgColor: "bg-green-50" },
  "Infrastructure": { color: "from-orange-600 to-orange-800", bgColor: "bg-orange-50" },
  "DevOps": { color: "from-cyan-600 to-cyan-800", bgColor: "bg-cyan-50" },
  "Database": { color: "from-indigo-600 to-indigo-800", bgColor: "bg-indigo-50" },
  "Frontend": { color: "from-pink-600 to-pink-800", bgColor: "bg-pink-50" },
  "Systems": { color: "from-red-600 to-red-800", bgColor: "bg-red-50" },
};

const Skills = () => {
  const groupedSkills = skillsData.technical.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData.technical>);

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50/80 via-white to-blue-50/60">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-700 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mx-auto mb-8 rounded-full"
          />
          <motion.p 
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Specialized in backend systems, cloud infrastructure, and scalable architectures with expertise in Golang, virtualization, and high-performance solutions.
          </motion.p>
        </motion.div>
        
        {/* Technical Skills by Category */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Core Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r ${skillCategories[category as keyof typeof skillCategories]?.color} text-white`}>
                  {category}
                </div>
                <div className="space-y-5">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-white px-2 py-1 rounded-full bg-gradient-to-r from-gray-600 to-gray-700">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${skillCategories[category as keyof typeof skillCategories]?.color} shadow-sm`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
              <span className="w-3 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-4"></span>
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skillsData.tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.03 * index,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-md text-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
              <span className="w-3 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-4"></span>
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsData.soft.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.05 * index,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:border-purple-300 hover:shadow-md text-gray-800 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
