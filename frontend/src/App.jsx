import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import api from "./utils/axiosConfig";

import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

import { FaReact, FaNodeJs, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

function App() {
  const [home, setHome] = useState(null);
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const iconMap = {
    FaReact,
    FaNodeJs,
    SiMongodb,
    SiTailwindcss,
  };

  // ---------------- FETCH PUBLIC DATA ----------------
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const homeRes = await api.get("/home");
      const aboutRes = await api.get("/about");
      const skillsRes = await api.get("/skills");
      const projectsRes = await api.get("/projects");
      const contactRes = await api.get("/contact/info");

      setHome(homeRes.data);
      setAbout(aboutRes.data);
      setSkills(skillsRes.data);
      setProjects(projectsRes.data);
      setContact(contactRes.data);
    } catch (error) {
      console.error("Error fetching public data:", error);
    }
  };

  // ---------------- CONTACT FORM ----------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/contact/message", formData);
      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message ❌");
    }
  };

  // ---------------- PROTECTED ROUTE ----------------
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
  };

  // ---------------- PUBLIC PORTFOLIO PAGE ----------------
  const Portfolio = () => (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* HERO */}
{home && (
  <section
    id="home"
    className="pt-28 pb-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-16"
  >
    {/* LEFT SIDE - TEXT */}
    <div className="max-w-xl text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-[#FF7722] leading-tight">
        {home.name}
      </h1>

      <h2 className="text-xl md:text-2xl text-gray-300 mt-4">
        {home.title}
      </h2>

      <p className="mt-6 text-gray-400 leading-relaxed">
        {home.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">

        {home.linkedin && (
          <a
            href={home.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-[#0A66C2] rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
        )}

        {home.github && (
          <a
            href={home.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-gray-800 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition"
          >
            <FaGithub /> GitHub
          </a>
        )}

        {home.email && (
          <a
            href={`mailto:${home.email}`}
            className="px-6 py-3 bg-[#FF7722] text-black rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Hire Me
          </a>
        )}

        {home.resume && (
          <a
            href={`http://localhost:5000${home.resume}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Download Resume
          </a>
        )}
      </div>
    </div>

    {/* RIGHT SIDE - PROFILE IMAGE */}
    {home.profileImage && (
      <div className="relative">
        <img
          src={`http://localhost:5000${home.profileImage}`}
          alt="Profile"
          className="
            w-64 h-64
            md:w-96 md:h-96
            rounded-full
            object-cover
            border-4 border-[#FF7722]
            shadow-2xl
          "
        />

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full border-4 border-[#FF7722] blur-xl opacity-30"></div>
      </div>
    )}
  </section>
)}


      {/* ABOUT */}
      {about && (
        <section id="about" className="px-6 md:px-16 py-20 bg-[#111111] text-center">
          <h2 className="text-3xl text-[#FF7722] font-bold">{about.heading}</h2>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">{about.description}</p>
        </section>
      )}

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-16 py-20">
        <h2 className="text-3xl text-[#FF7722] font-bold text-center">My Skills</h2>
        <div className="grid gap-6 mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill._id}
                 className="bg-[#111111] p-6 rounded-xl text-center">
              <div className="text-4xl text-[#FF7722] mb-2">
                {iconMap[skill.icon] &&
                  iconMap[skill.icon]({})}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-16 py-20 bg-[#111111]">
        <h2 className="text-3xl text-[#FF7722] font-bold text-center">Projects</h2>
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project._id}
                 className="bg-black rounded-lg overflow-hidden">
              {project.image && (
                <img src={`http://localhost:5000${project.image}`}
                     alt={project.title}
                     className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h3 className="text-[#FF7722] font-bold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex gap-4 mt-4">
                  <a href={project.github} target="_blank" rel="noreferrer"
                     className="bg-gray-800 px-3 py-1 rounded">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer"
                     className="bg-[#FF7722] text-black px-3 py-1 rounded">
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-16 py-20">
        <h2 className="text-3xl text-[#FF7722] font-bold text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 space-y-4">
          <input name="name" value={formData.name}
                 onChange={handleChange}
                 placeholder="Your Name"
                 className="w-full p-3 bg-[#111111] rounded" />
          <input name="email" value={formData.email}
                 onChange={handleChange}
                 placeholder="Your Email"
                 className="w-full p-3 bg-[#111111] rounded" />
          <textarea name="message" value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="4"
                    className="w-full p-3 bg-[#111111] rounded" />
          <button className="bg-[#FF7722] text-black px-6 py-2 rounded">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );

  return (
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
  );
}

export default App;
