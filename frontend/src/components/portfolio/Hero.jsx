import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero({ home }) {
  if (!home) return null;

  return (
    <section
      id="home"
      className="pt-28 pb-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-16"
    >
      {/* LEFT */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-[#FF7722]">
          {home.name}
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 mt-4">
          {home.title}
        </h2>

        <p className="mt-6 text-gray-400">
          {home.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
          {home.linkedin && (
            <a
              href={home.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#0A66C2] rounded-xl flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
          )}

          {home.github && (
            <a
              href={home.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-800 rounded-xl flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
          )}

          {home.email && (
            <a
              href={`mailto:${home.email}`}
              className="px-6 py-3 bg-[#FF7722] text-black rounded-xl font-semibold"
            >
              Hire Me
            </a>
          )}

          {/* ✅ CLOUDINARY PDF */}
          {home.resume && (
            <a
              href={home.resume}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-white text-black rounded-xl font-semibold"
            >
              Download Resume
            </a>
          )}
        </div>
      </div>

      {/* RIGHT */}
      {home.profileImage && (
        <div className="relative">
          <img
            src={home.profileImage}
            alt="Profile"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-[#FF7722] object-cover"
          />
          <div className="absolute inset-0 rounded-full border-4 border-[#FF7722] blur-xl opacity-30"></div>
        </div>
      )}
    </section>
  );
}
