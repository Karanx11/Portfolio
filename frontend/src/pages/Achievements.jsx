import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";

const achievements = [
  {
    title: "NPTEL – Google Cloud Computing Foundations",
    description: "Completed NPTEL course with 65%, gaining strong cloud computing fundamentals.",
    certificate: "/certificates/nptel-google-cloud.png",
    icon: <FaCertificate />,
  },
  {
    title: "AKTU Zonals RoboRace – 3rd Prize",
    description: "Secured 3rd position in AKTU Zonal RoboRace with an autonomous racing robot.",
    certificate: "/certificates/aktu-roborace.png",
    icon: <FaTrophy />,
  },
  {
    title: "Robo Workshop – 1st Prize",
    description: "Won 1st prize in a robotics workshop for exceptional technical performance.",
    certificate: "/certificates/robo-workshop.png",
    icon: <FaMedal />,
  },
  {
    title: "Innovate X (Idea Pitching) – 2nd Prize",
    description: "Awarded 2nd prize for presenting an innovative technology-based idea.",
    certificate: "/certificates/innovate-x.png",
    icon: <FaTrophy />,
  },
];

const Achievements = () => {
  return (
<section
  id="achievements"
  className="px-6 md:px-20 py-20"
>

    
      <div className="max-w-7xl mx-auto w-full">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            Achievements
          </h2>
          <p className="mt-4 text-white/70">
            Academic and technical recognitions earned through competitions and learning.
          </p>
        </div>

        {/* ACHIEVEMENTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl p-6 flex flex-col justify-between
              hover:border-[#FA7D09] transition"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#FA7D09] text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-white/70 text-sm mb-6">
                  {item.description}
                </p>
              </div>

              {/* CERTIFICATE BUTTON */}
              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-4 py-2 rounded-lg
                bg-[#FA7D09] text-black font-semibold
                hover:bg-[#e96f08] transition"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
