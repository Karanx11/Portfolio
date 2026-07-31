const experiences = [
  {
    company: "Sypnotech India Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    duration: "July 2026 – Present",
    description: [
      "Building responsive web applications using React.js and Node.js.",
      "Working on REST APIs and backend integration.",
      "Collaborating with the development team on real-world projects.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold text-center text-[#FA7D09] mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {exp.role}
                  </h3>

                  <p className="text-[#FA7D09] mt-1">
                    {exp.company}
                  </p>
                </div>

                <p className="text-white/60 mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-white/80 list-disc list-inside">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;