import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// PROJECT IMAGES
import portfolioImg from "../assets/projects/portfolio.png";
import rentkaroImg from "../assets/projects/rentkaro.png";
import studyPlannerImg from "../assets/projects/ai-study-planner.png";
import beepyImg from "../assets/projects/beepy.png";
import roboraceImg from "../assets/projects/roborace.png";

const projects = [
  {
    title: "Portfolio",
    description:
      "A modern, responsive portfolio website with a glassmorphic dark UI. Includes desktop top navbar, mobile bottom app-style navigation, smooth scrolling, and active section highlighting.",
    tech: ["React (Vite)", "Tailwind CSS", "JavaScript", "Glassmorphism UI"],
    github: "https://github.com/Karanx11",
    live: "https://karan-portfolio-x11.netlify.app/",
    image: portfolioImg,
  },
  {
    title: "RentKaro — Rental Marketplace Platform",
    description:
      "A full-stack MERN rental marketplace where users can rent, sell, and manage products. Built as a modern alternative to OLX/Rentomojo.",
    tech: [
      "React (Vite)",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "AI Chatbot",
    ],
    github: "https://github.com/Karanx11/RentKaro",
    image: rentkaroImg,
  },
  {
    title: "AI Study Planner",
    description:
      "An AI-powered study planning platform that extracts syllabus topics, tracks progress, predicts exam readiness, and generates personalized study plans.",
    tech: ["React", "Tailwind CSS", "Node.js", "AI APIs"],
    github: "https://github.com/Karanx11/AI-Study-Planner",
    live:"https://ai-study-planner-1-1ixn.onrender.com/",
    image: studyPlannerImg,
  },
  {
    title: "🤖 Beepy — Smart Assistant Robot",
    description:
      "An Arduino-based smart assistant robot with animated OLED eyes, Bluetooth control, servo-based head movement, and obstacle detection.",
    tech: [
      "Arduino",
      "C++",
      "OLED (SH1106)",
      "Servo Motors",
      "Bluetooth",
      "IR Sensors",
    ],
    github: "https://github.com/Karanx11",
    image: beepyImg,
  },
  {
    title: "RoboRace — ESP32 Bluetooth Car",
    description:
      "A Bluetooth-controlled racing car powered by ESP32 and driven via an Android app with optional voice commands.",
    tech: [
      "ESP32",
      "C++",
      "Bluetooth",
      "Motor Driver",
      "MIT App Inventor",
    ],
    github: "https://github.com/Karanx11",
    image: roboraceImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto w-full">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            Projects
          </h2>
          <p className="mt-4 text-white/70">
            A showcase of full-stack, AI, and hardware projects demonstrating my
            technical skills and problem-solving approach.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl overflow-hidden flex flex-col
              hover:border-[#FA7D09] transition"
            >
              {/* IMAGE */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                  hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full
                        bg-[#FA7D09]/20 text-[#FA7D09]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/70
                    hover:text-[#FA7D09] transition"
                  >
                    <FaGithub /> GitHub
                  </a>

                  {/* ✅ Render Live button ONLY if link exists */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70
                      hover:text-[#FA7D09] transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
