import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [homeData, setHomeData] = useState({
    name: "",
    title: "",
    description: "",
    profileImage: null,
    linkedin: "",
    github: "",
    email: "",
    resume: null,
  });

  const [aboutData, setAboutData] = useState({
    heading: "",
    description: "",
  });

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({
    name: "",
    icon: "",
  });

  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: "",
    image: null,
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchHome();
    fetchAbout();
    fetchSkills();
    fetchProjects();
    fetchMessages();
  }, []);

  // ---------------- FETCH FUNCTIONS ----------------

  const fetchHome = async () => {
    const res = await axios.get("http://localhost:5000/api/home");
    if (res.data) setHomeData(res.data);
  };

  const fetchAbout = async () => {
    const res = await axios.get("http://localhost:5000/api/about");
    if (res.data) setAboutData(res.data);
  };

  const fetchSkills = async () => {
    const res = await axios.get("http://localhost:5000/api/skills");
    setSkills(res.data);
  };

  const fetchProjects = async () => {
    const res = await axios.get("http://localhost:5000/api/projects");
    setProjects(res.data);
  };

  const fetchMessages = async () => {
    const res = await axios.get("http://localhost:5000/api/contact/message");
    setMessages(res.data);
  };

  // ---------------- HOME ----------------

const handleHomeChange = (e) => {
  if (e.target.name === "profileImage" || e.target.name === "resume") {
    setHomeData({
      ...homeData,
      [e.target.name]: e.target.files[0],
    });
  } else {
    setHomeData({
      ...homeData,
      [e.target.name]: e.target.value,
    });
  }
};



const handleHomeSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("name", homeData.name);
    formData.append("title", homeData.title);
    formData.append("description", homeData.description);
    formData.append("linkedin", homeData.linkedin);
    formData.append("github", homeData.github);
    formData.append("email", homeData.email);

    if (homeData.profileImage) {
    formData.append("profileImage", homeData.profileImage);
    }
    if (homeData.resume) {
    formData.append("resume", homeData.resume);
    }

    await axios.post(
      "http://localhost:5000/api/home",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert("Home updated with profile image ✅");
  } catch (error) {
    console.error("Error updating home:", error);
  }
};

  // ---------------- ABOUT ----------------

  const handleAboutChange = (e) => {
    setAboutData({ ...aboutData, [e.target.name]: e.target.value });
  };

  const handleAboutSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/about", aboutData);
    alert("About updated ✅");
  };

  // ---------------- SKILLS ----------------

  const handleSkillChange = (e) => {
    setNewSkill({ ...newSkill, [e.target.name]: e.target.value });
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/skills", newSkill);
    setNewSkill({ name: "", icon: "" });
    fetchSkills();
  };

  const handleDeleteSkill = async (id) => {
    await axios.delete(`http://localhost:5000/api/skills/${id}`);
    fetchSkills();
  };

  // ---------------- PROJECTS ----------------

  const handleProjectChange = (e) => {
    if (e.target.name === "image") {
      setNewProject({ ...newProject, image: e.target.files[0] });
    } else {
      setNewProject({ ...newProject, [e.target.name]: e.target.value });
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newProject.title);
    formData.append("description", newProject.description);
    formData.append("tech", newProject.tech);
    formData.append("github", newProject.github);
    formData.append("live", newProject.live);
    formData.append("image", newProject.image);

    await axios.post("http://localhost:5000/api/projects", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setNewProject({
      title: "",
      description: "",
      tech: "",
      github: "",
      live: "",
      image: null,
    });

    fetchProjects();
  };

  const handleDeleteProject = async (id) => {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    fetchProjects();
  };

  // ---------------- MESSAGES ----------------

  const handleDeleteMessage = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/contact/message/${id}`
    );
    fetchMessages();
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-[#FF7722] mb-10">
        Admin Dashboard
      </h1>
    <button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
  className="absolute top-6 right-10 bg-red-500 px-4 py-2 rounded-lg"
>
  Logout
</button>

      {/* HOME */}
      <div className="bg-[#111111] p-8 rounded-lg border border-gray-800 max-w-3xl">
        <h2 className="text-2xl text-[#FF7722] mb-6">Edit Home</h2>
        <form onSubmit={handleHomeSubmit} className="space-y-4">
          <input name="name" value={homeData.name} onChange={handleHomeChange} className="w-full p-3 bg-black border border-gray-700 rounded-lg" />
          <input name="title" value={homeData.title} onChange={handleHomeChange} className="w-full p-3 bg-black border border-gray-700 rounded-lg" />
          <textarea name="description" value={homeData.description} onChange={handleHomeChange} className="w-full p-3 bg-black border border-gray-700 rounded-lg" />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={homeData.linkedin || ""}
            onChange={handleHomeChange}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg"
            />

            <input
            type="text"
            name="github"
            placeholder="GitHub URL"
            value={homeData.github || ""}
            onChange={handleHomeChange}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg"
            />

            <input
            type="email"
            name="email"
            placeholder="Hire Me Email"
            value={homeData.email || ""}
            onChange={handleHomeChange}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg"
            />
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleHomeChange}
            className="w-full p-3 bg-black border border-gray-700 rounded-lg"
            />
            <input
              type="file"
              name="resume"
              accept="application/pdf"
              onChange={handleHomeChange}
              className="w-full p-3 bg-black border border-gray-700 rounded-lg"
            />
          <button className="px-6 py-3 bg-[#FF7722] text-black rounded-lg">Save</button>
        </form>
      </div>

      {/* ABOUT */}
      <div className="bg-[#111111] p-8 rounded-lg border border-gray-800 max-w-3xl mt-10">
        <h2 className="text-2xl text-[#FF7722] mb-6">Edit About</h2>
        <form onSubmit={handleAboutSubmit} className="space-y-4">
          <input name="heading" value={aboutData.heading} onChange={handleAboutChange} className="w-full p-3 bg-black border border-gray-700 rounded-lg" />
          <textarea name="description" value={aboutData.description} onChange={handleAboutChange} className="w-full p-3 bg-black border border-gray-700 rounded-lg" />
          <button className="px-6 py-3 bg-[#FF7722] text-black rounded-lg">Save</button>
        </form>
      </div>

      {/* SKILLS */}
      <div className="bg-[#111111] p-8 rounded-lg border border-gray-800 max-w-3xl mt-10">
        <h2 className="text-2xl text-[#FF7722] mb-6">Manage Skills</h2>
        <form onSubmit={handleAddSkill} className="flex gap-4 mb-6">
          <input name="name" value={newSkill.name} onChange={handleSkillChange} placeholder="Skill Name" className="flex-1 p-3 bg-black border border-gray-700 rounded-lg" />
          <input name="icon" value={newSkill.icon} onChange={handleSkillChange} placeholder="Icon Name" className="w-40 p-3 bg-black border border-gray-700 rounded-lg" />
          <button className="px-4 py-3 bg-[#FF7722] text-black rounded-lg">Add</button>
        </form>

        {skills.map((skill) => (
          <div key={skill._id} className="flex justify-between bg-black p-3 mb-2 rounded-lg border border-gray-700">
            <span>{skill.icon} {skill.name}</span>
            <button onClick={() => handleDeleteSkill(skill._id)} className="text-red-500">Delete</button>
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <div className="bg-[#111111] p-8 rounded-lg border border-gray-800 max-w-4xl mt-10">
        <h2 className="text-2xl text-[#FF7722] mb-6">Manage Projects</h2>

        <form onSubmit={handleAddProject} className="grid gap-4 mb-6">
          <input name="title" value={newProject.title} onChange={handleProjectChange} placeholder="Title" className="p-3 bg-black border border-gray-700 rounded-lg" />
          <textarea name="description" value={newProject.description} onChange={handleProjectChange} placeholder="Description" className="p-3 bg-black border border-gray-700 rounded-lg" />
          <input name="tech" value={newProject.tech} onChange={handleProjectChange} placeholder="Tech Stack" className="p-3 bg-black border border-gray-700 rounded-lg" />
          <input name="github" value={newProject.github} onChange={handleProjectChange} placeholder="GitHub Link" className="p-3 bg-black border border-gray-700 rounded-lg" />
          <input name="live" value={newProject.live} onChange={handleProjectChange} placeholder="Live Link" className="p-3 bg-black border border-gray-700 rounded-lg" />
          <input type="file" name="image" onChange={handleProjectChange} className="p-3 bg-black border border-gray-700 rounded-lg" />
          <button className="px-6 py-3 bg-[#FF7722] text-black rounded-lg">Add Project</button>
        </form>

        {projects.map((project) => (
          <div key={project._id} className="flex justify-between bg-black p-3 mb-2 rounded-lg border border-gray-700">
            <span>{project.title}</span>
            <button onClick={() => handleDeleteProject(project._id)} className="text-red-500">Delete</button>
          </div>
        ))}
      </div>

      {/* MESSAGES */}
      <div className="bg-[#111111] p-8 rounded-lg border border-gray-800 max-w-5xl mt-10">
        <h2 className="text-2xl text-[#FF7722] mb-6">Contact Messages</h2>

        {messages.map((msg) => (
          <div key={msg._id} className="bg-black p-4 mb-3 rounded-lg border border-gray-700">
            <div className="flex justify-between">
              <h3 className="text-[#FF7722]">{msg.name}</h3>
              <button onClick={() => handleDeleteMessage(msg._id)} className="text-red-500">Delete</button>
            </div>
            <p className="text-gray-400">{msg.email}</p>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Admin;
