import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js" },
      { name: "MongoDB", icon: <FaDatabase /> },
      { name: "REST APIs" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Git & GitHub" },
      { name: "Arduino / ESP32" },
      { name: "IoT Systems" },
    ],
  },
];

const Skills = () => {
  return (
    <section
  id="skills"
  className="min-h-screen flex items-center px-6 md:px-20 py-20 md:py-0"
>

      <div className="max-w-7xl mx-auto w-full">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            Skills
          </h2>
          <p className="mt-4 text-white/70">
            Technologies and tools I work with regularly.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl p-6 hover:border-[#FA7D09] transition"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {group.category}
              </h3>

              <ul className="space-y-4">
                {group.items.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-white/80"
                  >
                    <span className="text-[#FA7D09] text-lg">
                      {skill.icon || "•"}
                    </span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
