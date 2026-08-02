import { motion } from "framer-motion";

const experiences = [
  {
    company: "Channelplay Limited, Gurugram",
    role: "QA Engineer Intern",
    duration: "27 July 2026 – Present",
    description: [
      "Performing manual testing of web and mobile applications.",
      "Identifying, documenting, and tracking software bugs.",
      "Executing test cases to ensure application quality and reliability.",
      "Working closely with developers to verify bug fixes and improve product quality.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-[#FA7D09] mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {exp.role}
                  </h3>

                  <p className="text-[#FA7D09] mt-1 font-medium">
                    {exp.company}
                  </p>
                </div>

                <p className="text-white/60 mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-white/80 list-disc list-inside">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;