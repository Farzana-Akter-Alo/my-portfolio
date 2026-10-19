import { Heart, Lightbulb, Target } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const highlights = [
  {
    icon: Lightbulb,
    title: "Always Learning",
    description: "I keep exploring new technologies and improving my skills.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "I learn by setting goals and building practical projects.",
  },
  {
    icon: Heart,
    title: "Passionate Creator",
    description: "I enjoy creating useful and user-friendly experiences.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white px-5 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#9A5CC7]">
            Get to know me
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            About <span className="text-[#B47AE5]">Me</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-8 text-[#75657F]">
            <p>{personalInfo.about}</p>
            <p>{personalInfo.journey}</p>

            <div className="rounded-2xl border border-[#E9DDFB] bg-[#F8F2FF] p-6">
              <h3 className="font-bold text-[#392747]">My interests</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-[#E9DDFB] bg-white px-3 py-2 text-sm font-medium text-[#604474]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-[#E9DDFB] p-6 transition hover:-translate-y-1 hover:shadow-lg ${
                    index === 2 ? "bg-[#FBE4ED] sm:col-span-2" : "bg-[#FFFBFE]"
                  }`}
                >
                  <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-[#9A5CC7]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#75657F]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
