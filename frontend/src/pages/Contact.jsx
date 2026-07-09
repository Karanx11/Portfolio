import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
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
        "portfolio",
        "template_85yvazj",
        formRef.current,
        "q2iYWsXObVS2kLdih"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully :)");
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess("Something went wrong..... Try again :(");
        }
      );
  };

  return (
    <section id="contact" className="px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto w-full">

        {/* Title */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            Contact Me
          </h2>

          <p className="mt-4 text-white/70">
            Feel free to reach out for collaborations or opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Let's Connect
            </h3>

            <div className="space-y-6">

              <motion.a
                whileHover={{ y: 8 }}
                href="mailto:karanx11.72898@gmail.com"
                className="flex items-center gap-4 text-white/80 hover:text-[#FA7D09] transition"
              >
                <FaEnvelope size={20} />
                Email
              </motion.a>

              <motion.a
                whileHover={{ y: 8 }}
                href="https://www.linkedin.com/in/karan-s-290241298"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-[#FA7D09] transition"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </motion.a>

              <motion.a
                whileHover={{ y: 8 }}
                href="https://github.com/Karanx11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-[#FA7D09] transition"
              >
                <FaGithub size={20} />
                GitHub
              </motion.a>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -8,
            }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 focus:outline-none focus:border-[#FA7D09] text-white"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 focus:outline-none focus:border-[#FA7D09] text-white"
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 focus:outline-none focus:border-[#FA7D09] text-white resize-none"
              />

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-[#FA7D09] text-black font-semibold hover:bg-[#e96f08] transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-green-400"
                >
                  {success}
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;