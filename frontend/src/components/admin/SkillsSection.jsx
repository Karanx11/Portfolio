import { useState } from "react";
import api from "../../utils/axiosConfig";

export default function SkillsSection({ skills, setSkills }) {
  const [newSkill, setNewSkill] = useState({
    name: "",
  });

  const handleAddSkill = async (e) => {
    e.preventDefault();

    await api.post("/skills", {
      name: newSkill.name,
    });

    setNewSkill({ name: "" });

    const res = await api.get("/skills");
    setSkills(res.data);
  };

  const handleDeleteSkill = async (id) => {
    await api.delete(`/skills/${id}`);
    setSkills(skills.filter((s) => s._id !== id));
  };

  return (
    <section className="bg-[#111111] p-6 rounded-lg mb-10">
      <h2 className="text-xl mb-4 text-[#FF7722]">
        Manage Skills
      </h2>

      {/* ADD SKILL */}
      <form
        onSubmit={handleAddSkill}
        className="flex flex-col md:flex-row gap-4 mb-6"
      >
        <input
          value={newSkill.name}
          onChange={(e) =>
            setNewSkill({ name: e.target.value })
          }
          className="p-3 bg-black border border-gray-700 rounded flex-1"
          placeholder="Skill Name (e.g. React, Node.js, MongoDB)"
          required
        />

        <button
          type="submit"
          className="bg-[#FF7722] px-6 py-3 rounded text-black font-semibold hover:scale-105 transition"
        >
          Add Skill
        </button>
      </form>

      {/* SKILL LIST */}
      {skills.map((skill) => (
        <div
          key={skill._id}
          className="flex justify-between items-center bg-black p-3 mb-2 rounded border border-gray-700"
        >
          <span>{skill.name}</span>

          <button
            onClick={() => handleDeleteSkill(skill._id)}
            className="text-red-500 hover:text-red-400"
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
}
