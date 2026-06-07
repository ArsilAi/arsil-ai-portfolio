"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const linkClassName = (id: string, mobile = false) => {
    const isActive = activeSection === id;

    if (mobile) {
      return `block w-full rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
        isActive
          ? "bg-blue-500/15 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          : "text-slate-400 hover:bg-white/5 hover:text-white"
      }`;
    }

    return `relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
      isActive ? "text-blue-300" : "text-slate-400 hover:text-white"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="border-b border-white/10 bg-black/40 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a
            href="#home"
            onClick={handleLinkClick}
            className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-90 sm:gap-4"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-[2px] shadow-[0_0_20px_rgba(59,130,246,0.55)] transition-all duration-300 group-hover:shadow-[0_0_28px_rgba(59,130,246,0.75)] sm:size-12">
              <div className="flex size-full items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-blue-400 sm:text-base">
                AI
              </div>
            </div>

            <div className="min-w-0">
              <p className="truncate text-base font-bold text-white sm:text-lg">
                Arshil AI
              </p>
              <p className="truncate text-xs text-slate-400">AI Engineer</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 md:flex lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={linkClassName(link.id)}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                )}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10 hover:text-white md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="relative block size-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-2 -rotate-45" : "top-3.5"
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 bg-black/50 backdrop-blur-2xl transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                className={linkClassName(link.id, true)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
