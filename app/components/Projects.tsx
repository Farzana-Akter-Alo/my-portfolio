import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-white px-5 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#9A5CC7]">
            Selected work
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Featured <span className="text-[#B47AE5]">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#75657F]">
            Explore projects that demonstrate my learning, skills, and approach
            to solving development problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-3xl border border-[#E9DDFB] bg-[#FFFBFE] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Image */}
              <Link
                href={`/projects/${project.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-[#F2EAFB]"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#604474]">
                  {project.category}
                </span>
              </Link>

              {/* Project Information */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.name}</h3>

                <p className="mt-3 text-sm leading-7 text-[#75657F]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#F2EAFB] px-3 py-1.5 text-xs font-semibold text-[#604474]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#E9DDFB] pt-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-[#604474] hover:text-[#9A5CC7]"
                  >
                    View Details
                    <ArrowUpRight size={18} />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.name}`}
                    className="rounded-xl border border-[#E9DDFB] p-2.5 transition hover:bg-[#F2EAFB]"
                  >
                    <Code2 size={19} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
