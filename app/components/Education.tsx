
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 bg-white px-5 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#9A5CC7]">
            Academic background
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            My <span className="text-[#B47AE5]">Education</span>
          </h2>
        </div>

        <div className="space-y-5">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="flex gap-4 rounded-2xl border border-[#E9DDFB] bg-[#FFFBFE] p-6 sm:gap-6 sm:p-8"
            >
              <div className="h-fit rounded-xl bg-[#F2EAFB] p-3 text-[#9A5CC7]">
                <GraduationCap size={26} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#9A5CC7]">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-bold sm:text-xl">
                  {item.degree}
                </h3>
                <p className="mt-2 font-medium text-[#604474]">
                  {item.institution}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#75657F]">
                  {item.details}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
