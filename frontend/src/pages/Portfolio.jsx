import { useEffect, useState } from "react";
import api from "../utils/axiosConfig";

import Navbar from "../components/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Contact from "../components/portfolio/Contact";

function Portfolio() {
  const [home, setHome] = useState(null);
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero home={home} />
      <About about={about} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={contact} />
    </div>
  );
}

export default Portfolio;
