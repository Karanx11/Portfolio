import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiTailwindcss,
  SiGithub,
  SiArduino,
  SiPostman,
  SiJsonwebtokens,
  SiFlutter,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <FaDatabase /> },
      { name: "REST APIs", icon: <FaServer /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Arduino / ESP32", icon: <SiArduino /> },
      { name: "IoT Systems", icon: <FaServer /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-6 md:px-20 py-20 md:py-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            Skills
          </h2>

          <p className="mt-4 text-white/70">
            Technologies and Tools I work with regularly.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((group, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-2xl
                p-6
                hover:border-[#FA7D09]
                hover:shadow-[0_0_25px_rgba(250,125,9,0.25)]
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {group.category}
              </h3>

              <ul className="space-y-4">
                {group.items.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.35,
                    }}
                    whileHover={{
                      y: 6,
                    }}
                    className="flex items-center gap-4 text-white/80 hover:text-white"
                  >
                    <motion.span
                      whileHover={{
                        rotate: 15,
                        scale: 1.2,
                      }}
                      className="text-[#FA7D09] text-xl"
                    >
                      {skill.icon}
                    </motion.span>

                    <span>{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;