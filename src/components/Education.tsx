import { motion } from "framer-motion";

const educationData = [
  {
    school: "Institute of Engineering and Technology",
    degree: "Bachelor of Technology - BTech",
    field: "Information Technology",
    period: "2019 - 2023",
  },
  {
    school: "Gyan Deep Senior Secondary Public School",
    degree: "Intermediate",
    field: "PCM",
    period: "April 2017 - April 2018",
  },
  {
    school: "Gyan Deep Senior Secondary Public School",
    degree: "High School",
    period: "April 2015 - April 2016",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With a robust technical and academic background including a BTech in Information Technology, 
            I have consistently excelled in engineering, backend development, and competitive coding.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                {index < educationData.length - 1 && (
                  <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-indigo-200"></div>
                )}

                <div className="absolute left-0 top-3 h-6 w-6 rounded-full border-4 border-indigo-100 bg-indigo-600"></div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {edu.school}
                  </h4>
                  <p className="text-indigo-600 font-medium mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-gray-500 mb-4 text-sm">{edu.period}</p>
                  <p className="text-gray-600">{edu.field}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
