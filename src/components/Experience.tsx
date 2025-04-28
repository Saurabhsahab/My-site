import { motion } from "framer-motion";

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
        description: "Designed a seamless update system for operating systems and browser platforms, accelerating update speeds by 40% for browsers and 70% for OS versions, directly improving user test coverage.",
      },
    ],
    technologies: "Golang, Virtualization, HyperExecute, Selenium, macOS, Test Automation, System Optimization",
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
        description: "Designed and developed templated Temporal workflows for credit card onboarding, implementing efficient A/B experimentation strategies. Achieved notable increase in user engagement metrics and reduced funnel drop-off rates.",
      },
      {
        title: "SSE for Live Updates",
        description: "Reduced dependency on vendor API calls by over 99% through Server-Sent Events (SSE) integration for real-time updates on stock prices, option trades, and order statuses.",
      },
      {
        title: "Communication Orchestration",
        description: "Engineered a versatile communication orchestrator for scheduling messages with agnostic trigger timings and types, optimizing resource allocation and runtime task management.",
      },
      {
        title: "Server-Driven UI",
        description: "Architected a scalable server-driven UI framework, reducing time-to-deployment for new UI content by up to 70% and improving frontend content flexibility.",
      },
      {
        title: "Performance Optimization",
        description: "Overhauled transaction processing using Amazon Kinesis for direct event writing to S3, increasing data retrieval speed by 40% and enabling immediate Snowflake analysis.",
      },
    ],
    technologies: "Golang, SQL, Protocol Buffers, gRPCs, HTML, CSS, JavaScript, Temporal, Kubernetes, Redis, CockroachDB, PostgreSQL",
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
    ],
    technologies: "Golang, SQL, Protocol Buffers, gRPCs, HTML, CSS, JavaScript",
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
    technologies: "Golang, SQL, Protocol Buffers, gRPC, Vehicle Fleet Management, Unit Testing",
  },
];

// Achievements & Certifications as before, leave unchanged for this update
const achievementsData = [
  {
    title: "Spot Award - Fi (Epifi Technologies)",
    link: "https://www.linkedin.com/in/is0nic/overlay/1713153390448/single-media-viewer/?profileId=ACoAADF7qiIBDqVHMcNBKKLpTMC8u5qnBXmZf_c",
    description: "Received for outstanding performance in implementing critical features, reducing infrastructure costs, and enhancing system reliability."
  },
  {
    title: "Ranked 26th - Hackerearth January Circuits 21",
    link: "https://www.hackerearth.com/challenges/competitive/january-circuits-21/leaderboard/page/1/",
    description: "Achieved among 40,000+ participants, showcasing competitive programming proficiency."
  },
  {
    title: "Ranked 41st - Scaler Codex 2.0",
    link: "https://moonshot.scaler.com/s/sl/1o503kBk9p",
    description: "Ranked high in a competitive coding contest with 30,000+ participants, demonstrating coding expertise and algorithmic skills."
  },
  {
    title: "Google Kickstart Round G 2022",
    link: "https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/00000000008caba4",
    description: "Achieved 866th rank, showcasing ability to solve complex problems under timed conditions in a competitive environment."
  },
];

const certificationsData = [
  "Certified Problem Solver",
  "Algorithms on Graph",
  "Patent Law for Engineers and Scientists",
  "Developing Soft Skills and Personality",
  "Certificate of Achievement (Ranked #41)"
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My journey includes backend engineering, mentorship, and core platform work with major tech companies and institutions.
          </p>
        </motion.div>
        <div className="space-y-12">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-indigo-900 text-white p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-2">{experience.company}</h3>
                  <p className="text-indigo-200 mb-2">{experience.role}</p>
                  <p className="text-indigo-300 text-sm mb-6">{experience.period}</p>
                  <p className="text-indigo-200 mb-1 text-sm">
                    <span className="font-medium">Location:</span> {experience.location}
                  </p>
                  {experience.team && (
                    <p className="text-indigo-200 text-sm">
                      <span className="font-medium">Team:</span> {experience.team}
                    </p>
                  )}
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="space-y-6">
                    {experience.responsibilities.map((resp, rIndex) => (
                      <div key={rIndex}>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {resp.title}
                        </h4>
                        <p className="text-gray-600">
                          {resp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">TECHNOLOGIES USED</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.split(", ").map((tech, tIndex) => (
                        <span key={tIndex} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 mb-16 text-center"
          id="achievements"
        >
          <h3 className="text-2xl font-bold mb-6">Achievements</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {achievementsData.map((a, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-gray-200 bg-white shadow-sm text-left">
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-indigo-700 font-semibold hover:underline inline-block mb-1">{a.title}</a>
                <div className="text-gray-600">{a.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
          id="certifications"
        >
          <h3 className="text-2xl font-bold mb-4">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {certificationsData.map((cert, i) => (
              <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{cert}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
