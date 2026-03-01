const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-20 py-20 md:py-0"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE – TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            About Me
          </h2>

          <p className="mt-6 text-white/80 leading-relaxed">
            I am <span className="text-white font-semibold">Karan Sharma</span>,
            a passionate{" "}
            <span className="text-[#FA7D09] font-semibold">
              Full Stack Developer
            </span>{" "}
            with strong hands-on experience in React, MERN stack, and modern
            web technologies. I enjoy transforming ideas into scalable,
            user-friendly web applications.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            Along with web development, I actively work with Arduino, ESP32,
            and IoT-based projects. I enjoy applying technology to solve real-world
            problems.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            I believe in continuous learning, clean code practices, and
            building projects that create real impact. My goal is to grow as
            a software engineer while contributing to innovative teams.
          </p>

          {/* INFO ROW */}
          <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-white/80">
            <div>
              <p className="font-semibold text-white">Role</p>
              <p>Full Stack Developer</p>
            </div>

            <div>
              <p className="font-semibold text-white">Tech Stack</p>
              <p>React Native, MERN, Arduino</p>
            </div>

            <div>
              <p className="font-semibold text-white">Interests</p>
              <p>IoT</p>
            </div>

            <div>
              <p className="font-semibold text-white">Location</p>
              <p>Delhi, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – CARD */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-10">

          {/* EDUCATION SECTION */}
          <div>
            <h3 className="text-xl font-semibold text-[#FA7D09] mb-4">
              Education
            </h3>

            <div className="space-y-4 text-sm text-white/70">

              <div className="border-l-2 border-[#FA7D09] pl-4">
                <h4 className="text-white font-semibold">
                  B.Tech in Computer Science Engineering (Pursuing)
                </h4>
                <p>BBDITM (AKTU), Lucknow</p>
              </div>

              <div className="border-l-2 border-[#FA7D09] pl-4">
                <h4 className="text-white font-semibold">
                  Intermediate (2022)
                </h4>
                <p>Avadh Collegiate, CBSE, Lucknow</p>
              </div>

              <div className="border-l-2 border-[#FA7D09] pl-4">
                <h4 className="text-white font-semibold">
                  High School (2020)
                </h4>
                <p>Govt. Boys Sr. Sec. School, CBSE, Delhi</p>
              </div>

            </div>
          </div>

          {/* QUICK SUMMARY */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Summary
            </h3>

            <ul className="space-y-3 text-white/70 text-sm">
              <li>✔ React & MERN stack developer</li>
              <li>✔ Experience with REST APIs & backend integration</li>
              <li>✔ Hands-on IoT projects (Arduino, ESP32)</li>
              <li>✔ Strong problem-solving mindset</li>
              <li>✔ Passionate about learning new technologies</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;