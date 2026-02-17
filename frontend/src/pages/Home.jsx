import profile from "../assets/profile.png";

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
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500">
            Karan Sharma
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/80">
            Full Stack Developer | React & MERN | Arduino • ESP32 | AI & ML
            Student | IoT Enthusiast
          </p>

          <p className="mt-6 text-white/60 max-w-xl">
            Enthusiastic full-stack developer with hands-on experience in React,
            JavaScript, HTML, CSS, and backend integration. I enjoy building
            user-friendly interfaces and scalable web applications through
            real-world projects.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
              LinkedIn
            </a>

            <a className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
              GitHub
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-orange-500 text-black font-semibold hover:bg-orange-600 transition"
            >
              Hire Me
            </a>

            <a
                href="/Karan_Sharma.pdf"
                download
                className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                Download Resume
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">
          <div
            className="relative
            w-72 h-72
            md:w-96 md:h-96
            rounded-full
            border-4 border-orange-500
            overflow-hidden"
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
