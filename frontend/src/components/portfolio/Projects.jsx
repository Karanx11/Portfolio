import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="px-6 md:px-16 py-20 bg-[#111111]">
      <h2 className="text-3xl text-[#FF7722] font-bold text-center">
        Projects
      </h2>

      <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(projects) &&
          projects.map((project) => (
            <div
              key={project._id}
              className="bg-black rounded-lg overflow-hidden hover:scale-105 transition"
            >
              {project.image && (
                <img
                  src={`${import.meta.env.VITE_API_URL}${project.image}`}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-4">
                <h3 className="text-[#FF7722] font-bold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>

                {project.tech && (
                  <p className="text-sm text-gray-500 mt-3">
                    <span className="text-gray-300 font-semibold">
                      Tech:
                    </span>{" "}
                    {project.tech}
                  </p>
                )}

                <div className="flex gap-3 mt-4">
                  {project.github?.trim() && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}

                  {project.live?.trim() && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#FF7722] text-black rounded hover:scale-105 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
