import profile from "../assets/profile.png";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";

const Home = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center
        px-6 md:px-20
        py-20 md:py-0
      "
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500">
            Karan Sharma
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/80">
            Full Stack Developer | React & MERN | Flutter Developer | Arduino •
            ESP32 | IoT Enthusiast
          </p>

          <p className="mt-6 text-white/60 max-w-xl mx-auto md:mx-0">
            Full Stack and Flutter Developer experienced in building scalable, user-centric web and mobile applications using React, Node.js, Express.js, MongoDB, and Flutter. Passionate about creating efficient, real-world solutions and continuously exploring emerging technologies, including IoT and embedded systems.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/karan-s-290241298"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 hover:scale-105 flex items-center gap-2"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Karanx11"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300 hover:scale-105 flex items-center gap-2"
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-orange-500 text-black font-semibold hover:bg-orange-600 transition duration-300 hover:scale-105 flex items-center gap-2"
            >
              <HiOutlineBriefcase size={20} />
              Contact Me
            </a>

            <a
              href="/Karan_Sharma.pdf"
              download
              className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition duration-300 hover:scale-105 flex items-center gap-2"
            >
              <FaDownload size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div
            className="
              relative
              w-60 h-60
              sm:w-72 sm:h-72
              md:w-96 md:h-96
              rounded-full
              border-4 border-orange-500
              overflow-hidden
            "
          >
            <img
              src={profile}
              alt="Karan Sharma"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;