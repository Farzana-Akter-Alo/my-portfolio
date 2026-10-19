
import { Code2, Database, Wrench } from "lucide-react";
import { skills } from "../data/portfolio";

const icons = [Code2, Database, Wrench];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-5 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#9A5CC7]">
            My capabilities
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Skills & <span className="text-[#B47AE5]">Tools</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={group.category}
                className="rounded-3xl border border-[#E9DDFB] bg-white p-6 shadow-sm transition hover:shadow-lg sm:p-8"
              >
                <div className="mb-7 flex items-center gap-3">
                  <div className="rounded-xl bg-[#F2EAFB] p-3 text-[#9A5CC7]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{group.category}</h3>
                </div>

                <div className="space-y-6">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between gap-3">
                        <span className="text-sm font-semibold">
                          {skill.name}
                        </span>
                        <span className="text-sm text-[#75657F]">
                          {skill.level}%
                        </span>
                      </div>

                      <div
                        role="progressbar"
                        aria-label={`${skill.name} proficiency`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={skill.level}
                        className="h-2.5 overflow-hidden rounded-full bg-[#F2EAFB]"
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#B47AE5] to-[#9A5CC7]"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
