import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from "react-router-dom";
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
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  SiMongodb: SiMongodb,
  SiTailwindcss: SiTailwindcss,
};

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home");
        setHome(res.data);
      } catch (error) {
        console.error("Error fetching home:", error);
      }
    };

    const fetchAbout = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/about");
        setAbout(res.data);
      } catch (error) {
        console.error("Error fetching about:", error);
      }
    };

    const fetchSkills = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/skills");
        setSkills(res.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    const fetchContact = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contact/info");
        setContact(res.data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    fetchHome();
    fetchAbout();
    fetchSkills();
    fetchProjects();
    fetchContact();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/contact/message",
        formData
      );
      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

return (
  <Routes>
    <Route 
    path="/" 
    element={
      <div className="bg-black min-h-screen text-white">
        <Navbar />

      {/* Hero Section */}
      {home && (
        <div
          id="home"
          className="pt-28 pb-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Text */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#FF7722]">
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
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
              )}

              {home.github && (
                <a
                  href={home.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-white/20 transition-all duration-300"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
              )}

              {home.email && (
                <a
                  href={`mailto:${home.email}`}
                  className="px-8 py-3 bg-[#FF7722] text-black font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-orange-500/40 transition-all duration-300"
                >
                  Hire Me
                </a>
              )}

            </div>


            {home?.resume && (
  <a
    href={`http://localhost:5000${home.resume}`}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:scale-105 transition"
  >
    Download Resume
  </a>
)}

          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={`http://localhost:5000${home.profileImage}`}
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#FF7722] object-cover shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* About Section */}
      {about && (
        <div
          id="about"
          className="px-6 md:px-16 py-20 bg-[#111111] text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF7722]">
            {about.heading}
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-relaxed text-lg">
            {about.description}
          </p>
        </div>
      )}

      {/* Skills Section */}
<div
  id="skills"
  className="px-6 md:px-16 py-20 bg-black text-center"
>
  <h2 className="text-3xl md:text-4xl font-bold text-[#FF7722]">
    My Skills
  </h2>

  <div className="mt-12 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {skills.map((skill) => (
      <div
        key={skill._id}
        className="bg-[#111111] p-6 rounded-xl border border-gray-800 hover:scale-105 transition duration-300 flex flex-col items-center"
      >
        <div className="text-4xl mb-4 text-[#FF7722]">
          {iconMap[skill.icon] &&
            React.createElement(iconMap[skill.icon])}
        </div>


        <h3 className="text-lg font-semibold text-white">
          {skill.name}
        </h3>
      </div>
    ))}
  </div>
</div>


      {/* Projects Section */}
      <div
        id="projects"
        className="px-6 md:px-16 py-20 bg-[#111111]"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF7722] text-center">
          My Projects
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:scale-105 transition duration-300"
            >
              <img
                src={`http://localhost:5000${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#FF7722]">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm">
                  {project.description}
                </p>

                <p className="text-gray-500 mt-3 text-xs">
                  Tech: {project.tech}
                </p>

                <div className="flex gap-4 mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 text-sm"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#FF7722] text-black rounded-md hover:opacity-90 text-sm"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="px-6 md:px-16 py-20 bg-black"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF7722] text-center">
          Contact Me
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="text-gray-300 space-y-4">
            {contact && (
              <>
                <p>
                  <span className="text-[#FF7722] font-semibold">
                    Email:
                  </span>{" "}
                  {contact.email}
                </p>
                <p>
                  <span className="text-[#FF7722] font-semibold">
                    Phone:
                  </span>{" "}
                  {contact.phone}
                </p>
                <p>
                  <span className="text-[#FF7722] font-semibold">
                    Location:
                  </span>{" "}
                  {contact.location}
                </p>
              </>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#111111] border border-gray-700 rounded-lg text-white focus:border-[#FF7722] outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#111111] border border-gray-700 rounded-lg text-white focus:border-[#FF7722] outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 bg-[#111111] border border-gray-700 rounded-lg text-white focus:border-[#FF7722] outline-none"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-[#FF7722] text-black font-semibold rounded-lg hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
     } />
    <Route 
    path="/login" 
    element={
    <Login />} />
    <Route 
    path="/signup" 
    element={
    <Signup />} />
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
