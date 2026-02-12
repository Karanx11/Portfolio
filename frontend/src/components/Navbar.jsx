import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope
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
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // 👇 Auto detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      links.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-0 left-0 w-full bg-black border-b border-gray-800 px-10 py-4 justify-between items-center z-50">
        <h1
          className="text-xl font-bold text-[#FF7722] cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Karan
        </h1>

        <div className="flex gap-8">
          {links.map((link) => (
  <button
    key={link.id}
    onClick={() => scrollToSection(link.id)}
    className={`capitalize transition ${
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
          ${isActive 
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
