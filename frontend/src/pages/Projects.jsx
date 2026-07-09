import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// PROJECT IMAGES
import portfolioImg from "../assets/projects/portfolio.png";
import rentkaroImg from "../assets/projects/rentkaro.png";
import studyPlannerImg from "../assets/projects/ai-study-planner.png";
import beepyImg from "../assets/projects/beepy.png";
import roboraceImg from "../assets/projects/roborace.png";
import expenseImg from "../assets/projects/expense.png";
import hostelPassImg from "../assets/projects/hostelpass.png";
import layer7Img from "../assets/projects/Layer_7.png";

const filters = ["All", "MERN", "Flutter", "Java", "IoT"];

const projects = [
  {
    category: "MERN",
    title: "RentKaro — Rental Marketplace Platform",
    description:
      "A full-stack MERN rental marketplace where users can rent, sell, buy and manage products.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "AI Chatbot",
      "Google Signin",
    ],
    github: "https://github.com/Karanx11/RentKaro",
    live: "https://rentkaro-frontend.onrender.com",
    image: rentkaroImg,
  },

  {
    category: "Java",
    title: "Layer 7 Load Balancer",
    description:
      "Java HTTP Layer 7 Load Balancer with Round Robin, health checks and routing.",
    tech: [
      "Java",
      "HTTP",
      "Round Robin",
      "Health Checks",
      "Routing",
    ],
    github: "https://github.com/Karanx11/layer7-load-balancer-java",
    image: layer7Img,
  },

   {
    category: "Flutter",
    title: "Hostel Pass Management System",
    description:
      "Flutter + Supabase hostel gate pass system with QR verification.",
    tech: [
      "Flutter",
      "Supabase",
      "PostgreSQL",
      "QR",
    ],
    github: "https://github.com/Karanx11/Hostel-Pass",
    live: "https://hostel-pass-app.onrender.com/",
    image: hostelPassImg,
  },
  {
    category: "MERN",
    title: "Portfolio",
    description:
      "Modern responsive portfolio built with React and Tailwind CSS.",
    tech: [
      "React",
      "Tailwind",
      "JavaScript",
      "Glassmorphism",
    ],
    github: "https://github.com/Karanx11/Portfolio",
    live: "https://portfolio-eight-liart-94.vercel.app/",
    image: portfolioImg,
  },

  {
    category: "Flutter",
    title: "Expense Tracker App",
    description:
      "Smart expense tracker with analytics and SMS transaction detection.",
    tech: [
      "Flutter",
      "Node.js",
      "MongoDB",
      "Socket.IO",
    ],
    github: "https://github.com/Karanx11/Expense-Tracker",
    live: "https://expense-tracker-website-9iy2.onrender.com/",
    image: expenseImg,
  },

  {
    category: "MERN",
    title: "AI Study Planner",
    description:
      "AI-powered personalized study planner and syllabus tracker.",
    tech: [
      "React",
      "Node.js",
      "Tailwind",
      "AI APIs",
    ],
    github: "https://github.com/Karanx11/AI-Study-Planner",
    live: "https://ai-study-planner-1-1ixn.onrender.com/",
    image: studyPlannerImg,
  },

  {
    category: "IoT",
    title: "Beepy — Smart Assistant Robot",
    description:
      "Arduino smart assistant robot with OLED eyes and Bluetooth.",
    tech: [
      "Arduino",
      "Bluetooth",
      "Servo",
      "OLED",
    ],
    github: "https://github.com/Karanx11/Beepy-Smart-Assistant-Bot",
    image: beepyImg,
  },

  {
    category: "IoT",
    title: "RoboRace — ESP32 Bluetooth Car",
    description:
      "Bluetooth controlled ESP32 racing car with Android app.",
    tech: [
      "ESP32",
      "Bluetooth",
      "MIT App Inventor",
    ],
    github: "https://github.com/Karanx11/Roborace-Car",
    image: roboraceImg,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );
          return (
    <section id="projects" className="px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto w-full">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            Projects
          </h2>

          <p className="mt-4 text-white/70">
            A showcase of full-stack, AI, Flutter, Java and IoT projects.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium
                ${
                  activeFilter === filter
                    ? "bg-[#FA7D09] text-black shadow-[0_0_20px_rgba(250,125,9,0.4)]"
                    : "bg-white/5 border border-white/10 text-white hover:border-[#FA7D09]"
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-2xl
                  overflow-hidden
                  flex
                  flex-col
                  hover:border-[#FA7D09]
                  hover:shadow-[0_0_30px_rgba(250,125,9,0.25)]
                  transition-all
                "
              >
                {/* IMAGE */}
                <div className="h-44 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1 justify-between">

                  <div>
                    <span className="inline-block mb-3 px-3 py-1 rounded-full bg-[#FA7D09]/20 text-[#FA7D09] text-xs font-semibold">
                      {project.category}
                    </span>

                    <h3 className="text-lg font-semibold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-white/70 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* LINKS */}
                  <div className="flex gap-5">

                    <motion.a
                      whileHover={{ y: 5 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-[#FA7D09]"
                    >
                      <FaGithub />
                      GitHub
                    </motion.a>

                    {project.live && (
                      <motion.a
                        whileHover={{ y: 5 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/70 hover:text-[#FA7D09]"
                      >
                        <FaExternalLinkAlt />
                        Live
                      </motion.a>
                    )}

                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;