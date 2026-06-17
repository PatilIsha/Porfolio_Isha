"use client";
// @flow strict
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "ABOUT", href: "/#about", id: "about" },
  { label: "EXPERIENCE", href: "/#experience", id: "experience" },
  { label: "SKILLS", href: "/#skills", id: "skills" },
  { label: "EDUCATION", href: "/#education", id: "education" },
  { label: "CERTIFICATIONS", href: "/#certifications", id: "certifications" },
  { label: "PROJECTS", href: "/#projects", id: "projects" },
  { label: "CONTACT", href: "/#contact", id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-[100] bg-[#0d1224]/80 backdrop-blur-md border-b border-[#1f2347]">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className=" text-[#16f2b3] text-2xl md:text-3xl font-bold">
              ISHA PATIL
            </Link>
          </div>

          {/* Desktop links */}
          <ul className="hidden lg:flex lg:flex-row lg:space-x-1" id="navbar-default">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  className={`block px-4 py-2 no-underline outline-none hover:no-underline ${active === link.id ? "active-link" : ""}`}
                  href={link.href}
                >
                  <div className={`text-sm transition-colors duration-300 hover:text-pink-600 ${active === link.id ? "text-pink-500" : "text-white"}`}>
                    {link.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile / tablet hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden text-white text-3xl p-1 transition-colors duration-300 hover:text-[#16f2b3]"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile / tablet menu panel */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col gap-1 pb-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  className="block no-underline outline-none hover:no-underline"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className={`rounded-md px-4 py-3 text-sm transition-colors duration-300 hover:bg-[#1a1443] hover:text-pink-500 ${active === link.id ? "bg-[#1a1443] text-pink-500" : "text-white"}`}>
                    {link.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
