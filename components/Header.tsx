"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ui/ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out">
        <div
          className={`transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "rounded-2xl" : "rounded-full"
          } ${
            isScrolled
              ? "backdrop-blur-2xl bg-white/90 dark:bg-black/10 border border-gray-200/80 dark:border-white/10 shadow-2xl shadow-black/20 dark:shadow-black/40"
              : "backdrop-blur-xl bg-white/70 dark:bg-black/5 border border-gray-200/60 dark:border-white/5 shadow-xl shadow-black/10 dark:shadow-black/20"
          }`}
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between px-6 py-3 w-[600px]">
            {/* Logo/Avatar */}
            <div className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 ring-1 ring-gray-300 dark:ring-white/10 transition-all duration-300 hover:ring-gray-400 dark:hover:ring-white/20 hover:scale-105">
              <Image
                className="aspect-square h-full w-full object-cover select-none transition-all duration-300"
                alt="Adão Ângelo João"
                src="/me.jpeg"
                width={32}
                height={32}
                priority
              />
            </div>

            {/* Navigation */}
            <nav className="flex items-center">
              <ul className="flex items-center gap-1 text-sm text-gray-800 dark:text-white/80">
                <li>
                  <Link
                    className="px-3 py-1.5 rounded-full hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 text-[13px] font-medium"
                    href="/"
                  >
                    index
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-3 py-1.5 rounded-full hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 text-[13px] font-medium"
                    href="/projects"
                  >
                    projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-3 py-1.5 rounded-full hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 text-[13px] font-medium"
                    href="/certifications"
                  >
                    certifications
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-3 py-1.5 rounded-full hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 text-[13px] font-medium"
                    href="/skills"
                  >
                    skills
                  </Link>
                </li>
              </ul>

              <div className="ml-2">
                <ThemeToggle />
              </div>
            </nav>
          </div>

          {/* Mobile Header */}
          {!isMobileMenuOpen && (
            <div className="md:hidden flex items-center justify-between px-4 py-3 min-w-[280px]">
              {/* Logo/Avatar */}
              <div className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 ring-1 ring-gray-300 dark:ring-white/10 transition-all duration-300 hover:ring-gray-400 dark:hover:ring-white/20 hover:scale-105">
                <Image
                  className="aspect-square h-full w-full object-cover select-none transition-all duration-300"
                  alt="Adão Ângelo João"
                  src="/me.jpeg"
                  width={32}
                  height={32}
                  priority
                />
              </div>

              {/* Mobile Menu Controls */}
              <div className="flex items-center gap-2">
                <ThemeToggle />

                {/* Hamburger Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-600 focus-visible:outline-none"
                  aria-label="Toggle mobile menu"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      isMobileMenuOpen ? "rotate-45" : ""
                    }`}
                  >
                    {isMobileMenuOpen ? (
                      <path
                        d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Full Screen Modal */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 backdrop-blur-3xl bg-gray-100/20 dark:bg-gray-900/30 pointer-events-auto"
            : "opacity-0 backdrop-blur-0 pointer-events-none"
        }`}
        style={{
          backdropFilter: isMobileMenuOpen
            ? "blur(24px) saturate(180%) contrast(120%)"
            : "none",
          WebkitBackdropFilter: isMobileMenuOpen
            ? "blur(24px) saturate(180%) contrast(120%)"
            : "none",
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute inset-6 rounded-3xl border border-gray-200/30 dark:border-gray-700/40 shadow-2xl shadow-gray-900/10 dark:shadow-black/60 transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? "backdrop-blur-2xl bg-white/85 dark:bg-gray-950/90 scale-100 opacity-100"
              : "backdrop-blur-0 bg-transparent scale-95 opacity-0"
          }`}
          style={{
            backdropFilter: "blur(20px) saturate(200%) brightness(110%)",
            WebkitBackdropFilter: "blur(20px) saturate(200%) brightness(110%)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center h-full p-8">
            {/* Avatar/Logo */}
            <div className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 ring-2 ring-gray-300/60 dark:ring-gray-600/50 transition-all duration-300 hover:ring-gray-400/80 dark:hover:ring-gray-500/70 hover:scale-105 mb-8">
              <Image
                className="aspect-square h-full w-full object-cover select-none transition-all duration-300"
                alt="Adão Ângelo João"
                src="/me.jpeg"
                width={80}
                height={80}
                priority
              />
            </div>

            {/* Navigation Menu */}
            <nav className="flex flex-col items-center space-y-6">
              <ul className="flex flex-col items-center gap-4 text-gray-900 dark:text-gray-100">
                <li>
                  <Link
                    className="block px-6 py-3 rounded-2xl text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/50 transition-all duration-300 text-lg font-medium text-center min-w-[160px] backdrop-blur-sm"
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    index
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-6 py-3 rounded-2xl text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/50 transition-all duration-300 text-lg font-medium text-center min-w-[160px] backdrop-blur-sm"
                    href="/projects"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-6 py-3 rounded-2xl text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/50 transition-all duration-300 text-lg font-medium text-center min-w-[160px] backdrop-blur-sm"
                    href="/certifications"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    certifications
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-6 py-3 rounded-2xl text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/50 transition-all duration-300 text-lg font-medium text-center min-w-[160px] backdrop-blur-sm"
                    href="/skills"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    skills
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Theme Toggle in Mobile Menu */}
            <div className="mt-6 mb-4">
              <ThemeToggle />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center w-12 h-12 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100/70 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-600 focus-visible:outline-none backdrop-blur-sm"
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
