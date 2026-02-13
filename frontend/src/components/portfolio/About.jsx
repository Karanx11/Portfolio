export default function About({ about }) {
  if (!about) return null;

  return (
    <section id="about" className="px-6 md:px-16 py-20 bg-[#111111] text-center">
      <h2 className="text-3xl text-[#FF7722] font-bold">{about.heading}</h2>
      <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
        {about.description}
      </p>
    </section>
  );
}
