
import { BriefcaseBusiness } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  if (experience.length === 0) return null;

  return (
    <section
      id="experience"
      className="scroll-mt-24 px-5 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#9A5CC7]">
            Professional journey
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Work <span className="text-[#B47AE5]">Experience</span>
          </h2>
        </div>

        <div className="space-y-5">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-2xl border border-[#E9DDFB] bg-white p-6 sm:p-8"
            >
              <div className="flex gap-4">
                <div className="h-fit rounded-xl bg-[#F2EAFB] p-3 text-[#9A5CC7]">
                  <BriefcaseBusiness size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#9A5CC7]">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{item.role}</h3>
                  <p className="mt-1 font-medium text-[#604474]">
                    {item.company}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#75657F]">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
