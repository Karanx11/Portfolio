import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        "portfolio",                 // Service ID
        "template_85yvazj",           // Template ID
        formRef.current,
        "q2iYWsXObVS2kLdih"           // Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully 🚀");
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess("Something went wrong ❌ Try again");
        }
      );
  };

  return (
    <section id="contact" className="px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto w-full">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            Contact Me
          </h2>
          <p className="mt-4 text-white/70">
            Feel free to reach out for collaborations or opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT – CONTACT INFO */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Let’s Connect
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#FA7D09]/20 text-[#FA7D09]">
                  <FaEnvelope />
                </div>
                <span className="text-white/80">
                  karanx11.72898@gmail.com
                </span>
              </div>

              <a
                href="https://www.linkedin.com/in/karan-s-290241298"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-[#FA7D09] transition"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href="https://github.com/Karanx11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-[#FA7D09] transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          {/* RIGHT – CONTACT FORM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10
                focus:outline-none focus:border-[#FA7D09] text-white"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10
                focus:outline-none focus:border-[#FA7D09] text-white"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10
                focus:outline-none focus:border-[#FA7D09] text-white resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-[#FA7D09] text-black font-semibold
                hover:bg-[#e96f08] transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-sm text-green-400">
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
