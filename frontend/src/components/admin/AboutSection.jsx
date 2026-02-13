import api from "../../utils/axiosConfig";

export default function AboutSection({ aboutData, setAboutData }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/about", aboutData);
    alert("About updated ✅");
  };

  return (
    <section className="bg-[#111111] p-6 rounded-lg mb-10">
      <h2 className="text-xl mb-4 text-[#FF7722]">
        Edit About
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={aboutData.heading || ""}
          onChange={(e) =>
            setAboutData({ ...aboutData, heading: e.target.value })
          }
          className="w-full p-3 bg-black border border-gray-700 rounded"
          placeholder="Heading"
        />

        <textarea
          value={aboutData.description || ""}
          onChange={(e) =>
            setAboutData({ ...aboutData, description: e.target.value })
          }
          className="w-full p-3 bg-black border border-gray-700 rounded"
          placeholder="Description"
        />

        <button className="bg-[#FF7722] px-6 py-2 rounded text-black">
          Save
        </button>
      </form>
    </section>
  );
}
