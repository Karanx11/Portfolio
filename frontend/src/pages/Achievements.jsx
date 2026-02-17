import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";

const achievements = [
  {
    title: "NPTEL – Google Cloud Computing Foundations",
    description:
      "Successfully completed NPTEL course with 65%, gaining strong fundamentals of cloud computing and GCP.",
    icon: <FaCertificate />,
  },
  {
    title: "AKTU Zonal RoboRace – 3rd Prize",
    description:
      "Secured 3rd position in AKTU Zonal RoboRace by designing and competing with an autonomous robot.",
    icon: <FaTrophy />,
  },
  {
    title: "Robo Workshop – 1st Prize",
    description:
      "Won 1st prize in a robotics workshop for outstanding performance and technical skills.",
    icon: <FaMedal />,
  },
  {
    title: "Innovate X (Idea Pitching) – 2nd Prize",
    description:
      "Awarded 2nd prize for pitching an innovative tech-based solution at Innovate X.",
    icon: <FaTrophy />,
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center px-6 md:px-20 py-20 md:py-0"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FA7D09]">
            Achievements
          </h2>
          <p className="mt-4 text-white/70">
            Recognitions and accomplishments from my academic and technical journey.
          </p>
        </div>

        {/* ACHIEVEMENTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl p-6 hover:border-[#FA7D09] transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#FA7D09] text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-white/70 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
