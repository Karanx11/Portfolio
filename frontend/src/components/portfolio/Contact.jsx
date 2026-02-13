import { useState } from "react";
import api from "../../utils/axiosConfig";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/contact/message", formData);
      alert("Message sent 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-20">
      <h2 className="text-3xl text-[#FF7722] font-bold text-center">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto mt-8 space-y-4"
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 bg-[#111111] rounded"
          placeholder="Your Name"
          required
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-[#111111] rounded"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 bg-[#111111] rounded"
          placeholder="Message"
          rows="4"
          required
        />

        <button
          disabled={loading}
          className={`px-6 py-2 rounded flex items-center gap-2 justify-center
            ${loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#FF7722] text-black hover:scale-105 transition"}`}
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Sending message..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
