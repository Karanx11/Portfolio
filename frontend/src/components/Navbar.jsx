import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", icon: FaHome },
    { id: "about", icon: FaUser },
    { id: "skills", icon: FaCode },
    { id: "projects", icon: FaProjectDiagram },
    { id: "contact", icon: FaEnvelope },
  ];

  const scrollToSection = (id) => {
    setActive(id); 

    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  //  Auto-detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-0 left-0 w-full bg-black border-b border-gray-800 px-10 py-4 justify-between items-center z-50">
        <h1
          className="text-xl font-bold text-[#FF7722] cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Portfolio
        </h1>

        <div className="flex gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`capitalize transition font-medium ${
                active === link.id
                  ? "text-[#FF7722]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.id}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around py-3 z-50">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.id;

          return (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`
                flex flex-col items-center text-xs px-3 py-2 rounded-xl transition-all duration-300
                ${
                  isActive
                    ? "bg-[#FF7722]/20 text-[#FF7722]"
                    : "text-gray-400"
                }
              `}
            >
              <Icon size={18} />
              <span className="mt-1 capitalize">{link.id}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
