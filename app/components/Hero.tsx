
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Download, Code2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 overflow-hidden px-5 py-16 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E9DDFB] bg-[#F2EAFB] px-4 py-2 text-sm font-semibold text-[#604474]">
            <span className="h-2 w-2 rounded-full bg-[#9A5CC7]" />
            Learning, building, and growing
          </div>

          <p className="mb-3 text-3xl font-bold text-[#9A5CC7]">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {personalInfo.name}
            <span className="text-[#B47AE5]">.</span>
          </h1>

          <h2 className="mt-5 text-2xl font-bold leading-snug text-[#604474] sm:text-3xl">
            {personalInfo.designation}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#75657F] sm:text-lg">
            {personalInfo.intro}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={personalInfo.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-[#392747] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#604474]"
            >
              <Download size={18} />
              Download Resume
            </a>

            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-[#DCC9F4] bg-white px-6 py-3.5 font-semibold transition hover:bg-[#F2EAFB]"
            >
              View Projects
              <ArrowDown size={18} />
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm font-semibold text-[#75657F]">
              Connect with me
            </span>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-xl border border-[#E9DDFB] p-3 transition hover:bg-[#F2EAFB]"
            >
              <Code2 size={20} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-xl border border-[#E9DDFB] p-3 transition hover:bg-[#F2EAFB]"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-[#E9DDFB] via-[#FBE4ED] to-[#DCC9F4] blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-[#F2EAFB] shadow-2xl">
            <Image
              src={personalInfo.photo}
              alt={`Portrait of ${personalInfo.name}`}
              width={600}
              height={700}
              priority
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>

          {/* Location Card */}
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-[#E9DDFB] bg-white p-4 shadow-xl sm:-left-8">
            <p className="text-sm text-[#75657F]">Based in</p>
            <p className="mt-1 font-bold">
              {personalInfo.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
