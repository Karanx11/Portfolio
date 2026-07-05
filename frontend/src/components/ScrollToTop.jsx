import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed right-5
        z-50
        flex items-center justify-center
        w-12 h-12
        rounded-full
        bg-orange-500
        text-white
        shadow-lg shadow-orange-500/40
        transition-all duration-300
        hover:bg-orange-600
        hover:scale-110
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }

        bottom-24 md:bottom-6
      `}
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;