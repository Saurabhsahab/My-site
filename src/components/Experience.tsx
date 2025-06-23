import { motion } from "framer-motion";
import { Award, Trophy, Star, ExternalLink } from "lucide-react";

// Updated experience data as per merged, deduplicated resume input
const experienceData = [
  {
    company: "LambdaTest India Pvt. Ltd.",
    role: "Member of Technical Staff",
    period: "Aug 2024 - Present",
    location: "Noida, India",
    team: "HyperExecute",
    responsibilities: [
      {
        title: "Storage Optimizations",
        description: "Built cross-cloud data storage aligned with customer data retention policies. Automated lifecycle rules for storage class transitions and clean-up, achieving up to 40% cost reduction.",
      },
      {
        title: "Kane AI and Accessibility Scheduling",
        description: "Built a whitelabel scheduling engine in HyperExecute, streamlining test execution for products like Kane AI and Accessibility. Improved scheduling efficiency by 20% and boosted test reliability through integrated workflows.",
      },
      {
        title: "macOS Virtualization",
        description: "Developed core systems for macOS virtualization, reducing bare-metal machine costs by 50% and improving system uptime by 100% through efficient resource utilization.",
      },
      {
        title: "Optimized VM Execution",
        description: "Improved binary execution inside virtual machines, resulting in a 30% increase in HyperExecute test performance by optimizing resource allocation and code execution.",
      },
      {
        title: "Dynamic OS and Browser Updates",
        description: "Designed a seamless update system for operating systems and browser platforms, accelerating update speeds by 40% for browsers and 70% for OS versions, which directly improved user test coverage.",
      },
      {
        title: "WebDriver Mode for Selenium",
        description: "Created a WebDriver mode for Selenium in HyperExecute, reducing one-hop latency by 25%, thereby improving test execution times and benefiting automated testing.",
      },
    ],
    technologies: "Golang, MySQL, Kubernetes, Apache Kafka, Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), Microservices, Back-End Web Development, Distributed Systems, Platform as a Service (PaaS), Software as a Service (SaaS), B2B Software, Engineering, Test Orchestration, Desktop Virtualization, Security, Scalable Architecture, Virtualization, HyperExecute, Selenium, macOS, Test Automation, System Optimization",
  },
  {
    company: "Epifi Technologies India Pvt. Ltd. (Fi Money)",
    role: "Software Engineer",
    period: "July 2023 - Aug 2024",
    location: "Bangalore, India",
    team: "Cards",
    responsibilities: [
      {
        title: "Credit Card Onboarding Flows",
        description: "Designed and developed credit card onboarding orchestration via templated temporal workflows utilizing A/B experimentation, significantly boosting user engagement metrics by 42% and decreasing funnel drop-off rates by 36%, resulting in higher conversion rates.",
      },
      {
        title: "SSE for Live Updates",
        description: "Decreased reliance on vendor API calls by over 99% through formulating SSE streams for live updates on stock and option prices, trades, and order status, enhancing user experience and reducing costs.",
      },
      {
        title: "Communication Orchestration",
        description: "Crafted an orchestrator for scheduling communications with agnostic trigger timing and communication types. Achieved a 30% system load reduction through optimized resource allocation and run time task management, ensuring flexible and scalable delivery of critical messages.",
      },
      {
        title: "Server-Driven UI",
        description: "Architected a scalable server-driven UI framework that streamlined frontend development by centralizing UI logic and content updates at BE, resulting in enhanced flexibility and reduced time-to-deployment by almost 70% for new UI content, layouts, texts and images.",
      },
      {
        title: "Performance Optimization",
        description: "Overhauled transaction processing using Amazon Kinesis for direct event writing to S3, increasing data retrieval speed by 40% and enabling immediate Snowflake analysis.",
      },
    ],
    technologies: "Golang, gRPC, Kubernetes, Snowflake, Temporal.io, PostgreSQL, CockroachDB, Apache Kafka, Amazon Kinesis, Amazon ECS, Protocol Buffers, Distributed Systems, Scalable Architecture, Microservices, Back-End Web Development, FinTech",
  },
  {
    company: "Epifi Technologies India Pvt. Ltd. (Fi Money)",
    role: "SDE Intern",
    period: "Nov 2022 - July 2023",
    location: "Bengaluru, India",
    team: "Wealth",
    responsibilities: [
      {
        title: "Deposits, US Stocks, and Mutual Funds",
        description: "Built features for deposits, US stocks, and mutual fund investments.",
      },
      {
        title: "Mutual Fund Tax Statements",
        description: "Developed a feature to generate and email automated tax statements in the Tax Saver category, simplifying proof of income and refunds for users.",
      },
      {
        title: "System Improvements",
        description: "Optimized high throughput DAOs and RPCs utilizing Redis for caching, reducing database load and enhancing performance by almost 50-70% while cutting infrastructure costs by 9%.",
      },
    ],
    technologies: "Golang, gRPC, Kubernetes, Snowflake, Temporal.io, PostgreSQL, CockroachDB, Apache Kafka, Amazon Kinesis, Amazon Web Services (AWS), Amazon ECS, Protocol Buffers, Distributed Systems, Scalable Architecture, Microservices, Back-End Web Development, FinTech",
  },
  {
    company: "Masai",
    role: "DSA Mentor",
    period: "Oct 2022 - Aug 2023",
    location: "Bengaluru, India",
    team: "Mentors",
    responsibilities: [
      {
        title: "Mentoring & Teaching DSA",
        description: "Taught Data Structures and Algorithms for competitive coding using Core Java, JavaScript, and Python (covering advanced topics such as dynamic programming and graph algorithms). Conducted both classroom and individual sessions for personalized learning.",
      },
      {
        title: "Classroom and Individual Instruction",
        description: "Conducting both classroom and individual sessions to ensure personalized learning experiences and addressing specific student needs.",
      },
      {
        title: "Assisting New Students",
        description: "Helping new students in competitive programming with daily activities, including problem-solving exercises, coding contests, and algorithmic challenges",
      },
      {
        title: "Student Support & Reviews",
        description: "Guided new students in daily coding activities, contests, assignments, code reviews, and optimized solutions for efficiency and clarity.",
      },
    ],
    technologies: "Core Java, JavaScript, Python, Data Structures, Algorithms, Dynamic Programming, Graph Algorithms",
  },
  {
    company: "Fractal: The Coding Club, IET Lucknow",
    role: "Mentor",
    period: "Sep 2020 - Jun 2023",
    location: "Lucknow, India",
    team: "Fractal Mentors 2020",
    responsibilities: [
      {
        title: "Cultivating Competitive Coding Culture",
        description: "Led initiatives to build a competitive coding culture, organized workshops and challenges, and instructed DSA concepts using C++ in interactive, hands-on sessions.",
      },
      {
        title: "Supporting Beginners & Collaborative Assignments",
        description: "Provided support for beginners and collaborated on coding assignments and activities to create a dynamic, growth-oriented learning environment.",
      },
    ],
    technologies: "C++, Data Structures, Algorithms, Competitive Programming, Problem-Solving, Coding Competitions",
  },
  {
    company: "Ridecell",
    role: "Software Development Engineer Intern",
    period: "May 2022 - Aug 2022",
    location: "Pune division, Maharashtra, India",
    team: "Fleet Automation",
    responsibilities: [
      {
        title: "Fleet Automation Communication",
        description: "Developed systems for notifying fleet owners about key vehicle events (speeding, subscription, maintenance), improving fleet management responsiveness by 50%.",
      },
      {
        title: "Lifecycle Management Features",
        description: "Implemented alerts for overdue service and fleet status to enhance uptime and minimize maintenance delays by 40%.",
      },
      {
        title: "Unit Testing",
        description: "Added unit tests for automation features, resulting in 30% improved test coverage.",
      },
    ],
    technologies: "Python, Django, Django REST Framework, PostgreSQL, Databases, Microservices, Distributed Systems, Object-Oriented Programming (OOP), Backend Development, Software Development, Linux, Teamwork",
  },
];

// Achievements & Certifications as before, leave unchanged for this update
const achievementsData = [
  {
    title: "Spot Award - Fi (Epifi Technologies)",
    link: "https://www.linkedin.com/in/is0nic/overlay/1713153390448/single-media-viewer/?profileId=ACoAADF7qiIBDqVHMcNBKKLpTMC8u5qnBXmZf_c",
    description: "Received for outstanding performance in implementing critical features, reducing infrastructure costs, and enhancing system reliability.",
    type: "award"
  },
  {
    title: "Ranked 26th - Hackerearth January Circuits 21",
    link: "https://www.hackerearth.com/challenges/competitive/january-circuits-21/leaderboard/page/1/",
    description: "Achieved among 40,000+ participants, showcasing competitive programming proficiency.",
    type: "ranking"
  },
  {
    title: "Ranked 41st - Scaler Codex 2.0",
    link: "https://moonshot.scaler.com/s/sl/1o503kBk9p",
    description: "Ranked high in a competitive coding contest with 30,000+ participants, demonstrating coding expertise and algorithmic skills.",
    type: "ranking"
  },
  {
    title: "Google Kickstart Round G 2022",
    link: "https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/00000000008caba4",
    description: "Achieved 866th rank, showcasing ability to solve complex problems under timed conditions in a competitive environment.",
    type: "competition"
  },
];

const certificationsData = [
  { name: "Certified Problem Solver", category: "Programming" },
  { name: "Algorithms on Graph", category: "Computer Science" },
  { name: "Patent Law for Engineers and Scientists", category: "Legal" },
  { name: "Developing Soft Skills and Personality", category: "Soft Skills" },
  { name: "Certificate of Achievement (Ranked #41)", category: "Achievement" }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey includes backend engineering, mentorship, and core platform work with major tech companies and institutions.
          </p>
        </motion.div>

        {/* Timeline section with enhanced animations */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-blue-200 hidden md:block"></div>
          
          <div className="space-y-16">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Enhanced timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 hidden md:flex items-center justify-center z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg relative"
                  >
                    {/* Optimized pulsing animation */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.7, 0.2, 0.7]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                    />
                    {/* Inner dot */}
                    <div className="absolute inset-1 bg-white rounded-full shadow-sm"></div>
                  </motion.div>
                </div>

                {/* Card with enhanced styling */}
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 md:ml-16"
                >
                  <div className="md:flex">
                    {/* Company info section with gradient */}
                    <div className="md:w-1/3 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white p-8 relative overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-y-12"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <motion.h3 
                          className="text-xl font-bold mb-4 text-white"
                          whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                        >
                          {experience.company}
                        </motion.h3>
                        <motion.p 
                          className="text-indigo-100 mb-3 text-lg font-semibold"
                          whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          {experience.role}
                        </motion.p>
                        <motion.p 
                          className="text-indigo-200 text-base mb-8 font-medium"
                          whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                          viewport={{ once: true }}
                        >
                          {experience.period}
                        </motion.p>
                        
                        <div className="space-y-4">
                          <motion.div 
                            className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                            whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                          >
                            <p className="text-indigo-100 text-sm font-semibold mb-2 flex items-center">
                              <span className="w-2 h-2 bg-indigo-300 rounded-full mr-2"></span>
                              Location
                            </p>
                            <p className="text-white font-medium text-base">{experience.location}</p>
                          </motion.div>
                          
                          {experience.team && (
                            <motion.div 
                              className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                              whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                              viewport={{ once: true }}
                            >
                              <p className="text-indigo-100 text-sm font-semibold mb-2 flex items-center">
                                <span className="w-2 h-2 bg-purple-300 rounded-full mr-2"></span>
                                Team
                              </p>
                              <p className="text-white font-medium text-base">{experience.team}</p>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities section */}
                    <div className="md:w-2/3 p-8">
                      <div className="space-y-6">
                        {experience.responsibilities.map((resp, rIndex) => (
                          <motion.div 
                            key={rIndex}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + rIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                          >
                            <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors flex items-start">
                              <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {resp.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed ml-5">
                              {resp.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Technologies section */}
                      <motion.div 
                        className="mt-8 pt-6 border-t border-gray-100"
                        whileInView={{ opacity: [0, 1], y: [20, 0] }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="text-sm font-bold text-gray-500 mb-4 tracking-wide">TECHNOLOGIES USED</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.split(", ").map((tech, tIndex) => (
                            <motion.span 
                              key={tIndex} 
                              className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-3 py-2 rounded-full text-sm font-medium border border-indigo-100 hover:border-indigo-200 hover:shadow-sm transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: tIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 mb-20"
          id="achievements"
        >
          <div className="text-center mb-16">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Achievements & Recognition
            </motion.h3>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-6 rounded-full"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notable accomplishments and recognitions throughout my professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {achievementsData.map((achievement, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 h-full">
                  {/* Header with icon and type */}
                  <div className="bg-gradient-to-r from-amber-500 to-red-500 p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-y-6"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {achievement.type === 'award' && <Award className="w-6 h-6 text-white" />}
                        {achievement.type === 'ranking' && <Trophy className="w-6 h-6 text-white" />}
                        {achievement.type === 'competition' && <Star className="w-6 h-6 text-white" />}
                        <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                          {achievement.type}
                        </span>
                      </div>
                      <ExternalLink className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <a 
                      href={achievement.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block group-hover:scale-[1.02] transition-transform duration-300"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors line-clamp-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </a>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-1 bg-gradient-to-r from-amber-200 to-red-200 group-hover:from-amber-400 group-hover:to-red-400 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
          id="certifications"
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Certifications
            </motion.h3>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6 rounded-full"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional certifications and completed courses
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {certificationsData.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200 rounded-2xl px-6 py-4 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 cursor-default">
                  <div className="text-center">
                    <h4 className="text-emerald-800 font-semibold text-base mb-2 group-hover:text-emerald-900 transition-colors">
                      {cert.name}
                    </h4>
                    <span className="text-emerald-600 text-sm font-medium bg-emerald-100 px-3 py-1 rounded-full">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
