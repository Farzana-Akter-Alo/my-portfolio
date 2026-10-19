import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { projects } from "../../data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

// Generate a static route for each project.
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate project-specific page metadata.
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.name} | My Portfolio` : "Project Not Found",
    description: project?.description ?? "Project details",
  };
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen px-5 py-12 sm:py-16 lg:px-8">
        <article className="mx-auto max-w-5xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-semibold text-[#604474] hover:text-[#9A5CC7]"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <div className="mt-8">
            <span className="inline-flex rounded-full bg-[#F2EAFB] px-4 py-2 text-sm font-bold text-[#604474]">
              {project.category}
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              {project.name}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#75657F]">
              {project.description}
            </p>
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-[#E9DDFB] bg-[#F2EAFB]">
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#392747] px-5 py-3 font-semibold text-white hover:bg-[#604474]"
              >
                Live Demo
                <ArrowUpRight size={18} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#DCC9F4] bg-white px-5 py-3 font-semibold hover:bg-[#F2EAFB]"
              >
                <FaGithub size={19} />
                GitHub Repository
              </a>
            )}
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold">About the Project</h2>
                <p className="mt-4 leading-8 text-[#75657F]">
                  {project.details}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">Challenges Faced</h2>
                <ul className="mt-4 space-y-3">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex gap-3 leading-7 text-[#75657F]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#B47AE5]" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold">Future Improvements</h2>
                <ul className="mt-4 space-y-3">
                  {project.improvements.map((improvement) => (
                    <li
                      key={improvement}
                      className="flex gap-3 leading-7 text-[#75657F]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#B47AE5]" />
                      {improvement}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="h-fit rounded-3xl border border-[#E9DDFB] bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold">Technology Stack</h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-[#F2EAFB] px-3 py-2 text-sm font-semibold text-[#604474]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-[#E9DDFB] pt-6">
                <p className="text-sm text-[#75657F]">Project type</p>
                <p className="mt-1 font-bold">{project.category}</p>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
