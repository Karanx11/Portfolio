import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-20 py-20 md:py-0"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            About Me
          </h2>

          <p className="mt-6 text-white/80 leading-relaxed">
            I am{" "}
            <span className="text-white font-semibold">
              Karan Sharma
            </span>
            , a passionate{" "}
            <span className="text-[#FA7D09] font-semibold">
              Full Stack & Flutter Developer
            </span>{" "}
            with strong hands-on experience in React, MERN stack,
            Flutter, modern technologies and backend development.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            Along with web development, I actively build
            cross-platform mobile apps using Flutter,
            Firebase and Supabase. I also work with Arduino,
            ESP32, and IoT-based projects to solve real-world
            problems.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            I believe in continuous learning, clean code
            practices, and building impactful projects.
            My goal is to grow as a software engineer while
            contributing to innovative teams.
          </p>

          {/* INFO ROW */}
          <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-white/80">
            <div>
              <p className="font-semibold text-white">
                Role
              </p>
              <p>Full Stack & Flutter</p>
            </div>

            <div>
              <p className="font-semibold text-white">
                Tech Stack
              </p>
              <p>MERN, Flutter, Firebase</p>
            </div>

            <div>
              <p className="font-semibold text-white">
                Interests
              </p>
              <p>IoT & Mobile Apps</p>
            </div>

            <div>
              <p className="font-semibold text-white">
                Location
              </p>
              <p>Delhi, India</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            y: -8,
            transition: { duration: 0.3 },
          }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-10"
        >
          {/* EDUCATION */}
          <div>
            <h3 className="text-xl font-semibold text-[#FA7D09] mb-4">
              Education
            </h3>

            <div className="space-y-4 text-sm text-white/70">

              <div className="border-l-2 border-[#FA7D09] pl-4">
                <h4 className="text-white font-semibold">
                  B.Tech in Computer Science Engineering
                  (2023-2027)
                </h4>
                <p>Dr. APJ Abdul Kalam Technical University, Lucknow</p>
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

          {/* SUMMARY */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Summary
            </h3>

            <ul className="space-y-3 text-white/70 text-sm">
              <li>✔ MERN, Flutter</li>
              <li>✔ Experience with Firebase & REST APIs</li>
              <li>✔ Cross-platform app development</li>
              <li>✔ Hands-on IoT projects (Arduino, ESP32)</li>
              <li>✔ Strong problem-solving mindset</li>
              <li>✔ Passionate about learning new technologies</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;