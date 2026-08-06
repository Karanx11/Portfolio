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
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg"
>
  <div className="grid md:grid-cols-2 gap-8 items-center">
    
    {/* LEFT */}
    <div>
      <h3 className="text-3xl font-bold text-white">
        QA Engineer Intern
      </h3>

      <p className="text-[#FA7D09] text-lg font-medium mt-2">
        Channelplay Limited, Gurugram
      </p>

      <p className="text-white/60 mt-2">
        27 July 2026 – Present
      </p>

      <ul className="mt-6 space-y-3 text-white/80 list-disc list-inside">
        <li>Performing manual testing of web and mobile applications.</li>
        <li>Identifying, documenting, and tracking software bugs.</li>
        <li>Executing test cases to ensure software quality.</li>
        <li>Collaborating with developers to verify fixes and improve product reliability.</li>
      </ul>
    </div>

    {/* RIGHT */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="flex justify-center"
    >
      <img
        src="/channelplay-office.jpg"
        alt="Channelplay Office"
        className="w-full max-w-md h-72 object-cover rounded-2xl border border-white/20 shadow-xl"
      />
    </motion.div>

  </div>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;