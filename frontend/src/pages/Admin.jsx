import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axiosConfig";

import AdminHeader from "../components/admin/AdminHeader";
import HomeSection from "../components/admin/HomeSection";
import AboutSection from "../components/admin/AboutSection";
import SkillsSection from "../components/admin/SkillsSection";
import ProjectsSection from "../components/admin/ProjectsSection";
import MessagesSection from "../components/admin/MessagesSection";

function Admin() {
  const navigate = useNavigate();

  const [homeData, setHomeData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    setHomeData((await api.get("/home")).data);
    setAboutData((await api.get("/about")).data);
    setSkills((await api.get("/skills")).data);
    setProjects((await api.get("/projects")).data);
    setMessages((await api.get("/contact/message")).data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 pt-28 pb-24">

      <AdminHeader onLogout={logout} />

      <HomeSection homeData={homeData} setHomeData={setHomeData} />
      <AboutSection aboutData={aboutData} setAboutData={setAboutData} />
      <SkillsSection skills={skills} setSkills={setSkills} />
      <ProjectsSection projects={projects} setProjects={setProjects} />
      <MessagesSection messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default Admin;
