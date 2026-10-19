
import Link from "next/link";
import { ArrowUp, Code2 } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        {/* Copyright */}
        <p className="text-center text-sm text-gray-600">
          © 2026 {personalInfo.name}. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-600 transition hover:text-blue-600"
          >
            <Code2 size={20} />
          </a>

          {/* Back to Top */}
          <Link
            href="#home"
            aria-label="Back to top"
            className="rounded-full border border-gray-300 p-2 text-gray-600 transition hover:bg-gray-100"
          >
            <ArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
