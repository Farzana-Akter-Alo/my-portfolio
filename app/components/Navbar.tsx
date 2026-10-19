"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function navigate(href: string) {
    setActive(href.slice(1));
    setIsOpen(false);
  }

  function renderLinks() {
    return links.map((link) => {
      const selected = active === link.href.slice(1);

      return (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => navigate(link.href)}
          aria-current={selected ? "location" : undefined}
          className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
            selected
              ? "bg-[#F2EAFB] text-[#9A5CC7]"
              : "text-[#75657F] hover:bg-[#FBE4ED] hover:text-[#392747]"
          }`}
        >
          {link.label}
        </Link>
      );
    });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9DDFB] bg-[#FFFBFE]/95 shadow-sm backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8"
      >
        <Link
          href="#home"
          onClick={() => navigate("#home")}
          className="shrink-0 text-2xl font-extrabold"
        >
          Farzana<span className="text-[#B47AE5]">.</span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">{renderLinks()}</div>

        <Link
          href="#contact"
          onClick={() => navigate("#contact")}
          className="hidden rounded-xl bg-[#392747] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#604474] xl:inline-flex"
        >
          Let's Talk ↗
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-xl border border-[#E9DDFB] p-2.5 hover:bg-[#F2EAFB] xl:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[#E9DDFB] bg-[#FFFBFE] px-5 py-4 shadow-lg xl:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {renderLinks()}

            <Link
              href="#contact"
              onClick={() => navigate("#contact")}
              className="mt-2 rounded-xl bg-[#392747] px-5 py-3 text-center font-semibold text-white hover:bg-[#604474]"
            >
              Let's Talk ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
