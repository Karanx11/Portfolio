import api from "../../utils/axiosConfig";

export default function HomeSection({ homeData, setHomeData }) {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setHomeData({ ...homeData, [name]: files ? files[0] : value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(homeData).forEach((key) => {
      if (homeData[key]) formData.append(key, homeData[key]);
    });
    await api.post("/home", formData);
    alert("Home updated ✅");
  };

  return (
    <section className="bg-[#111] p-6 rounded-lg mb-10">
      <h2 className="text-[#FF7722] mb-4">Edit Home</h2>

      <form onSubmit={submit} className="space-y-4">
        <input name="name" onChange={handleChange} placeholder="Name" className="input" />
        <input name="title" onChange={handleChange} placeholder="Title" className="input" />
        <textarea name="description" onChange={handleChange} placeholder="Description" className="input" />
        <input type="file" name="profileImage" onChange={handleChange} />
        <input type="file" name="resume" onChange={handleChange} />
        <button className="btn">Save</button>
      </form>
    </section>
  );     
}
