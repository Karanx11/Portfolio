import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// PROJECT IMAGES
import kaiImg from "../assets/projects/k-ai.png";
import portfolioImg from "../assets/projects/portfolio.png";
import iotImg from "../assets/projects/iot.png";

const projects = [
  {
    title: "AI Desktop Assistant (K-AI)",
    description:
      "A Python-based AI desktop assistant with voice commands, speech recognition, and text-to-speech features.",
    tech: ["Python", "Speech Recognition", "TTS"],
    github: "https://github.com/",
    live: "#",
    image: kaiImg,
  },
  {
    title: "Admin Portfolio Website",
    description:
      "A MERN portfolio with admin panel where all content can be updated dynamically with a modern dark UI.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/",
    live: "#",
    image: portfolioImg,
  },
  {
    title: "IoT Smart Automation",
    description:
      "IoT project using Arduino & ESP32 for real-time sensor monitoring and device control.",
    tech: ["Arduino", "ESP32", "IoT"],
    github: "https://github.com/",
    live: "#",
    image: iotImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 md:px-20 py-20 md:py-0"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            Projects
          </h2>
          <p className="mt-4 text-white/70">
            Some of the projects I have built to apply my skills in real-world scenarios.
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
              {/* PROJECT IMAGE */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                  hover:scale-110 transition duration-500"
                />
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
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
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-white/70
                    hover:text-[#FA7D09] transition"
                  >
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-white/70
                    hover:text-[#FA7D09] transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
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
