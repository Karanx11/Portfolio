import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur-xl pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-white/60">
          <p className="text-center">
            © {year} Karan Sharma. All rights reserved.
          </p>

          <span className="hidden md:block">•</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;