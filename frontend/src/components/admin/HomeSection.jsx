import api from "../../utils/axiosConfig";

export default function HomeSection({ homeData, setHomeData }) {
  const handleChange = (e) => {
    if (e.target.type === "file") {
      setHomeData({ ...homeData, [e.target.name]: e.target.files[0] });
    } else {
      setHomeData({ ...homeData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(homeData).forEach((key) => {
      if (homeData[key]) {
        formData.append(key, homeData[key]);
      }
    });

    await api.post("/home", formData);
    alert("Home updated ✅");
  };

  return (
    <section className="bg-[#111111] p-6 rounded-lg mb-10">
      <h2 className="text-xl mb-6 text-[#FF7722] font-semibold">
        Edit Home Section
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="name"
          value={homeData.name || ""}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-gray-700 rounded"
          placeholder="Name"
        />

        <input
          name="title"
          value={homeData.title || ""}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-gray-700 rounded"
          placeholder="Title"
        />

        <textarea
          name="description"
          value={homeData.description || ""}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-gray-700 rounded"
          placeholder="Description"
        />

        <input
          name="linkedin"
          value={homeData.linkedin || ""}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-gray-700 rounded"
          placeholder="LinkedIn URL"
        />

        <input
          name="github"
          value={homeData.github || ""}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-gray-700 rounded"
          placeholder="GitHub URL"
        />

        <input
          name="email"
          value={homeData.email || ""}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-gray-700 rounded"
          placeholder="Hire Me Email"
        />

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Upload Profile Picture
          </label>
          <input
            type="file"
            name="profileImage"
            onChange={handleChange}
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Upload Resume (PDF only)
          </label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />
        </div>

        <button className="bg-[#FF7722] px-6 py-2 rounded text-black font-semibold hover:scale-105 transition">
          Save Changes
        </button>
      </form>
    </section>
  );
}
