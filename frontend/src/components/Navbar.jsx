import useActiveSection from "../hooks/useActiveSection";

const Navbar = () => {
  const active = useActiveSection();
  const links = ["home", "about", "skills", "projects", "achievements", "contact"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2
      w-[90%] px-8 py-4 rounded-2xl
      bg-white/10 backdrop-blur-xl border border-white/20
      justify-between items-center z-50">

      <h1 className="text-xl font-bold text-[#FA7D09]">Portfolio</h1>

      <ul className="flex gap-6">
        {links.map((link) => (
          <li
            key={link}
            onClick={() => scrollTo(link)}
            className={`cursor-pointer capitalize transition
              ${
                active === link
                  ? "text-[#FA7D09]"
                  : "text-white/70 hover:text-white"
              }`}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
