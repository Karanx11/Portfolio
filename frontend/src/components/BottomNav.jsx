import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaTrophy, 
} from "react-icons/fa";
import useActiveSection from "../hooks/useActiveSection";

const BottomNav = () => {
  const active = useActiveSection();

  const items = [
    { id: "home", icon: <FaHome /> },
    { id: "about", icon: <FaUser /> },
    { id: "skills", icon: <FaTools /> },
    { id: "projects", icon: <FaProjectDiagram /> },
    { id: "achievements", icon: <FaTrophy /> },
    { id: "contact", icon: <FaEnvelope /> },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2
      w-[90%] py-3 rounded-2xl
      bg-white/10 backdrop-blur-xl border border-white/20
      flex justify-around z-50">

      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`flex flex-col items-center text-xs cursor-pointer transition
            ${
              active === item.id
                ? "text-[#FA7D09]"
                : "text-white/70"
            }`}
        >
          <span className="text-lg">{item.icon}</span>
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default BottomNav;
