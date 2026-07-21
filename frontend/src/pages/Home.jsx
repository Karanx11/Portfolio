import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-20 pt-8 pb-20"
    >
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          mt-10 md:mt-16

          bg-gradient-to-br
          from-white/10
          via-white/5
          to-transparent

          backdrop-blur-xl

          border
          border-white/10

          rounded-[32px]

          shadow-2xl

          p-8
          md:p-12

          grid
          md:grid-cols-[1.5fr_0.8fr]
          gap-4

          gap-12
          items-center
        "
      >
        {/* LEFT SIDE */}
        <motion.div
          className="order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500">
            Karan Sharma.
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/80 leading-relaxed">
            Full Stack Developer (MERN) | Flutter Developer | IoT Enthusiast
          </p>

          <p className="mt-6 text-white/60 max-w-xl mx-auto md:mx-0 leading-8">
            Full Stack and Flutter Developer experienced in building
            scalable, user-centric web and mobile applications using
            React, Node.js, Express.js, MongoDB, and Flutter.
            Passionate about creating efficient, real-world solutions
            and continuously exploring emerging technologies,
            including IoT and embedded systems.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/karan-s-290241298"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Karanx11"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <HiOutlineBriefcase size={20} />
              Contact Me
            </a>

            <a
              href="/Karan_Sharma.pdf"
              download
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <FaDownload size={18} />
              Resume
            </a>
          </div>
        </motion.div>
               
        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
  <div
    className="
      relative

      w-64 h-80
      sm:w-72 sm:h-[420px]
      md:w-80 md:h-[500px]

      rounded-3xl

      overflow-hidden

      border-2
      border-white/10

      bg-white/5
      backdrop-blur-xl

      shadow-xl

      transition-all
      duration-300

      hover:scale-105
      hover:border-[#FA7D09]
    "
  >
    <img
      src={profile}
      alt="Karan Sharma"
      className="w-full h-full object-cover object-top"
    />
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Home;