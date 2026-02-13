import { useState } from "react";
import api from "../../utils/axiosConfig";

export default function ProjectsSection({ projects, setProjects }) {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewProject({
      ...newProject,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.keys(newProject).forEach((key) => {
        if (newProject[key]) {
          formData.append(key, newProject[key]);
        }
      });

      await api.post("/projects", formData);

      alert("Project added ✅");

      setNewProject({
        title: "",
        description: "",
        tech: "",
        github: "",
        live: "",
        image: null,
      });

      const res = await api.get("/projects");
      setProjects(res.data);

    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
        "Failed to add project ❌ (check backend fields)"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/projects/${id}`);
      setProjects(projects.filter((p) => p._id !== id));
      alert("Project deleted 🗑️");
    } catch (error) {
      alert("Failed to delete project ❌");
    }
  };

  return (
    <section className="bg-[#111111] p-6 rounded-lg mb-10">
      <h2 className="text-xl mb-4 text-[#FF7722]">
        Manage Projects
      </h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="grid gap-4 mb-6">
        <input
          name="title"
          value={newProject.title}
          onChange={handleChange}
          className="p-3 bg-black border border-gray-700 rounded"
          placeholder="Title"
          required
        />

        <textarea
          name="description"
          value={newProject.description}
          onChange={handleChange}
          className="p-3 bg-black border border-gray-700 rounded"
          placeholder="Description"
          required
        />

        <input
          name="tech"
          value={newProject.tech}
          onChange={handleChange}
          className="p-3 bg-black border border-gray-700 rounded"
          placeholder="Tech Stack"
        />

        <input
          name="github"
          value={newProject.github}
          onChange={handleChange}
          className="p-3 bg-black border border-gray-700 rounded"
          placeholder="GitHub"
        />

        <input
          name="live"
          value={newProject.live}
          onChange={handleChange}
          className="p-3 bg-black border border-gray-700 rounded"
          placeholder="Live Link"
        />

        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="p-3 bg-black border border-gray-700 rounded"
        />

        <button
          disabled={loading}
          className={`px-6 py-2 rounded font-semibold transition
            ${loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#FF7722] text-black hover:scale-105"}`}
        >
          {loading ? "Adding Project..." : "Add Project"}
        </button>
      </form>

      {/* LIST */}
      {projects.map((project) => (
        <div
          key={project._id}
          className="flex justify-between bg-black p-3 mb-2 rounded"
        >
          <span>{project.title}</span>

          <button
            onClick={() => handleDelete(project._id)}
            className="text-red-500 hover:text-red-400"
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
}
