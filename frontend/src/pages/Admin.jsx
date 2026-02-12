import { useEffect, useState } from "react";
import api from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const [homeData, setHomeData] = useState({
    name: "",
    title: "",
    description: "",
    linkedin: "",
    github: "",
    email: "",
    profileImage: null,
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

  // ---------------- FETCH DATA ----------------
  useEffect(() => {
    fetchHome();
    fetchAbout();
    fetchSkills();
    fetchProjects();
    fetchMessages();
  }, []);

  const fetchHome = async () => {
    const res = await api.get("/home");
    if (res.data) setHomeData(res.data);
  };

  const fetchAbout = async () => {
    const res = await api.get("/about");
    if (res.data) setAboutData(res.data);
  };

  const fetchSkills = async () => {
    const res = await api.get("/skills");
    setSkills(res.data);
  };

  const fetchProjects = async () => {
    const res = await api.get("/projects");
    setProjects(res.data);
  };

  const fetchMessages = async () => {
    const res = await api.get("/contact/message");
    setMessages(res.data);
  };

  // ---------------- LOGOUT ----------------
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // ---------------- HOME ----------------
  const handleHomeChange = (e) => {
    if (e.target.type === "file") {
      setHomeData({ ...homeData, [e.target.name]: e.target.files[0] });
    } else {
      setHomeData({ ...homeData, [e.target.name]: e.target.value });
    }
  };

  const handleHomeSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(homeData).forEach((key) => {
      if (homeData[key]) {
        formData.append(key, homeData[key]);
      }
    });

    await api.post("/home", formData);
    alert("Home updated ✅");
  };

  // ---------------- ABOUT ----------------
  const handleAboutSubmit = async (e) => {
    e.preventDefault();
    await api.post("/about", aboutData);
    alert("About updated ✅");
  };

  // ---------------- SKILLS ----------------
  const handleAddSkill = async (e) => {
    e.preventDefault();
    await api.post("/skills", newSkill);
    setNewSkill({ name: "", icon: "" });
    fetchSkills();
  };

  const handleDeleteSkill = async (id) => {
    await api.delete(`/skills/${id}`);
    fetchSkills();
  };

  // ---------------- PROJECTS ----------------
  const handleProjectChange = (e) => {
    if (e.target.type === "file") {
      setNewProject({ ...newProject, image: e.target.files[0] });
    } else {
      setNewProject({ ...newProject, [e.target.name]: e.target.value });
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(newProject).forEach((key) => {
      if (newProject[key]) {
        formData.append(key, newProject[key]);
      }
    });

    await api.post("/projects", formData);

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
    await api.delete(`/projects/${id}`);
    fetchProjects();
  };

  // ---------------- MESSAGES ----------------
  const handleDeleteMessage = async (id) => {
    await api.delete(`/contact/message/${id}`);
    fetchMessages();
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-[#FF7722] mb-10">
        Admin Dashboard
      </h1>

      <div className="absolute top-6 right-10 flex gap-4">
  
  <button
    onClick={() => navigate("/")}
    className="bg-[#FF7722] px-4 py-2 rounded-lg text-black font-semibold hover:scale-105 transition"
  >
    Go to Homepage
  </button>

  <button
    onClick={handleLogout}
    className="bg-red-500 px-4 py-2 rounded-lg hover:scale-105 transition"
  >
    Logout
  </button>

</div>


      {/* HOME SECTION */}
<section className="bg-[#111111] p-6 rounded-lg mb-10">
  <h2 className="text-xl mb-6 text-[#FF7722] font-semibold">
    Edit Home Section
  </h2>

  <form onSubmit={handleHomeSubmit} className="space-y-5">

    <input
      name="name"
      value={homeData.name || ""}
      onChange={handleHomeChange}
      className="w-full p-3 bg-black border border-gray-700 rounded"
      placeholder="Name"
    />

    <input
      name="title"
      value={homeData.title || ""}
      onChange={handleHomeChange}
      className="w-full p-3 bg-black border border-gray-700 rounded"
      placeholder="Title"
    />

    <textarea
      name="description"
      value={homeData.description || ""}
      onChange={handleHomeChange}
      className="w-full p-3 bg-black border border-gray-700 rounded"
      placeholder="Description"
    />

    <input
      name="linkedin"
      value={homeData.linkedin || ""}
      onChange={handleHomeChange}
      className="w-full p-3 bg-black border border-gray-700 rounded"
      placeholder="LinkedIn URL"
    />

    <input
      name="github"
      value={homeData.github || ""}
      onChange={handleHomeChange}
      className="w-full p-3 bg-black border border-gray-700 rounded"
      placeholder="GitHub URL"
    />

    <input
      name="email"
      value={homeData.email || ""}
      onChange={handleHomeChange}
      className="w-full p-3 bg-black border border-gray-700 rounded"
      placeholder="Hire Me Email"
    />

    {/* Profile Picture Upload */}
    <div>
      <label className="block text-sm text-gray-400 mb-2">
        Upload Profile Picture
      </label>
      <input
        type="file"
        name="profileImage"
        accept="image/*"
        onChange={handleHomeChange}
        className="w-full p-3 bg-black border border-gray-700 rounded"
      />
    </div>

    {/* Resume Upload */}
    <div>
      <label className="block text-sm text-gray-400 mb-2">
        Upload Resume (PDF only)
      </label>
      <input
        type="file"
        name="resume"
        accept="application/pdf"
        onChange={handleHomeChange}
        className="w-full p-3 bg-black border border-gray-700 rounded"
      />
    </div>

    <button className="bg-[#FF7722] px-6 py-2 rounded text-black font-semibold hover:scale-105 transition">
      Save Changes
    </button>

  </form>
</section>


      {/* ABOUT SECTION */}
      <section className="bg-[#111111] p-6 rounded-lg mb-10">
        <h2 className="text-xl mb-4 text-[#FF7722]">Edit About</h2>
        <form onSubmit={handleAboutSubmit} className="space-y-4">
          <input name="heading" value={aboutData.heading || ""} onChange={(e)=>setAboutData({...aboutData,heading:e.target.value})} className="w-full p-3 bg-black border rounded" placeholder="Heading" />
          <textarea name="description" value={aboutData.description || ""} onChange={(e)=>setAboutData({...aboutData,description:e.target.value})} className="w-full p-3 bg-black border rounded" placeholder="Description" />
          <button className="bg-[#FF7722] px-6 py-2 rounded text-black">Save</button>
        </form>
      </section>

      {/* SKILLS */}
<section className="bg-[#111111] p-6 rounded-lg mb-10">
  <h2 className="text-xl mb-4 text-[#FF7722]">Manage Skills</h2>

  <form
    onSubmit={handleAddSkill}
    className="flex flex-col md:flex-row gap-4 mb-6"
  >
    <input
      value={newSkill.name}
      onChange={(e) =>
        setNewSkill({ ...newSkill, name: e.target.value })
      }
      className="p-3 bg-black border border-gray-700 rounded flex-1"
      placeholder="Skill Name"
      required
    />

    <input
      value={newSkill.icon}
      onChange={(e) =>
        setNewSkill({ ...newSkill, icon: e.target.value })
      }
      className="p-3 bg-black border border-gray-700 rounded md:w-40"
      placeholder="Icon Name"
      required
    />

    <button
      type="submit"
      className="bg-[#FF7722] px-6 py-3 rounded text-black font-semibold hover:scale-105 transition"
    >
      Add Skill
    </button>
  </form>

  {skills.map((skill) => (
    <div
      key={skill._id}
      className="flex justify-between items-center bg-black p-3 mb-2 rounded border border-gray-700"
    >
      <span>
        {skill.icon} {skill.name}
      </span>

      <button
        onClick={() => handleDeleteSkill(skill._id)}
        className="text-red-500 hover:text-red-400"
      >
        Delete
      </button>
    </div>
  ))}
</section>


      {/* PROJECTS */}
      <section className="bg-[#111111] p-6 rounded-lg mb-10">
        <h2 className="text-xl mb-4 text-[#FF7722]">Manage Projects</h2>
        <form onSubmit={handleAddProject} className="grid gap-4 mb-4">
          <input name="title" value={newProject.title} onChange={handleProjectChange} className="p-3 bg-black border rounded" placeholder="Title" />
          <textarea name="description" value={newProject.description} onChange={handleProjectChange} className="p-3 bg-black border rounded" placeholder="Description" />
          <input name="tech" value={newProject.tech} onChange={handleProjectChange} className="p-3 bg-black border rounded" placeholder="Tech Stack" />
          <input name="github" value={newProject.github} onChange={handleProjectChange} className="p-3 bg-black border rounded" placeholder="GitHub" />
          <input name="live" value={newProject.live} onChange={handleProjectChange} className="p-3 bg-black border rounded" placeholder="Live Link" />
          <input type="file" name="image" onChange={handleProjectChange} className="p-3 bg-black border rounded" />
          <button className="bg-[#FF7722] px-6 py-2 rounded text-black">Add Project</button>
        </form>

        {projects.map(project=>(
          <div key={project._id} className="flex justify-between bg-black p-3 mb-2 rounded">
            <span>{project.title}</span>
            <button onClick={()=>handleDeleteProject(project._id)} className="text-red-500">Delete</button>
          </div>
        ))}
      </section>

      {/* CONTACT MESSAGES */}
      <section className="bg-[#111111] p-6 rounded-lg">
        <h2 className="text-xl mb-4 text-[#FF7722]">Contact Messages</h2>

        {messages.map(msg=>(
          <div key={msg._id} className="bg-black p-4 mb-3 rounded">
            <div className="flex justify-between">
              <strong>{msg.name}</strong>
              <button onClick={()=>handleDeleteMessage(msg._id)} className="text-red-500">Delete</button>
            </div>
            <p className="text-gray-400">{msg.email}</p>
            <p>{msg.message}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Admin;
