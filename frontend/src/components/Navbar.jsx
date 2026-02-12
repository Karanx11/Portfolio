import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  const links = ["home", "about", "skills", "projects", "contact"];

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
              key={link}
              onClick={() => scrollToSection(link)}
              className={`capitalize transition ${
                active === link
                  ? "text-[#FF7722]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around py-3 z-50">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => scrollToSection(link)}
            className={`capitalize text-sm ${
              active === link
                ? "text-[#FF7722]"
                : "text-gray-400"
            }`}
          >
            {link}
          </button>
        ))}
      </div>
    </>
  );
}

export default Navbar;
