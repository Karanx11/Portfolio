import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";

const getSkillIcon = (skillName) => {
  const name = skillName.toLowerCase();

  if (name.includes("react")) return <FaReact />;
  if (name.includes("node")) return <FaNodeJs />;
  if (name.includes("mongo")) return <SiMongodb />;
  if (name.includes("tailwind")) return <SiTailwindcss />;
  if (name.includes("express")) return <SiExpress />;
  if (name.includes("next")) return <SiNextdotjs />;
  if (name.includes("firebase")) return <SiFirebase />;
  if (name.includes("javascript") || name === "js") return <FaJs />;
  if (name.includes("html")) return <FaHtml5 />;
  if (name.includes("css")) return <FaCss3Alt />;
  if (name.includes("git")) return <FaGitAlt />;

  return <FaCode />;
};

export default function Skills({ skills }) {
  return (
    <section id="skills" className="px-6 md:px-16 py-20">
      <h2 className="text-3xl text-[#FF7722] font-bold text-center">
        My Skills
      </h2>

      <div className="grid gap-6 mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill._id}
            className="bg-[#111111] p-6 rounded-xl text-center hover:scale-105 transition"
          >
            <div className="flex justify-center text-4xl text-[#FF7722] mb-2">
                {getSkillIcon(skill.name)}
            </div>

            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
