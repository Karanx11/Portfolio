import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
  id="contact"
  className="min-h-screen flex items-center px-6 md:px-20 py-20 md:py-0"
>

      <div className="max-w-6xl mx-auto w-full">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            Contact Me
          </h2>
          <p className="mt-4 text-white/70">
            Feel free to reach out for collaborations, projects, or just a
            friendly hello 👋
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT – CONTACT INFO */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Let’s Connect
            </h3>

            <p className="text-white/70 mb-8">
              I’m open to internship opportunities, freelance work, and
              full-time roles. If you have an idea or opportunity, let’s talk!
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#FA7D09]/20 text-[#FA7D09]">
                  <FaEnvelope />
                </div>
                <span className="text-white/80">
                  karansharma@example.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#FA7D09]/20 text-[#FA7D09]">
                  <FaLinkedin />
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-[#FA7D09] transition"
                >
                  linkedin.com/in/karansharma
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#FA7D09]/20 text-[#FA7D09]">
                  <FaGithub />
                </div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-[#FA7D09] transition"
                >
                  github.com/karansharma
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT – CONTACT FORM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <form className="space-y-6">

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10
                  focus:outline-none focus:border-[#FA7D09] text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10
                  focus:outline-none focus:border-[#FA7D09] text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10
                  focus:outline-none focus:border-[#FA7D09] text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#FA7D09] text-white font-semibold
                hover:bg-[#5e0802] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
