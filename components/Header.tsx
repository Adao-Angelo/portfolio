"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeaderProps {
  onThemeToggle?: () => void;
}

export default function Header({ onThemeToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeToggle = () => {
    if (onThemeToggle) {
      onThemeToggle();
    }
  };

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
              ? "backdrop-blur-2xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/40"
              : "backdrop-blur-xl bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-black/20"
          }`}
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between px-6 py-3 w-[600px]">
            {/* Logo/Avatar */}
            <div className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 ring-1 ring-white/20 dark:ring-white/10 transition-all duration-300 hover:ring-white/40 dark:hover:ring-white/20 hover:scale-105">
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
              <ul className="flex items-center gap-1 text-sm text-white/90 dark:text-white/80">
                <li>
                  <a
                    className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 text-[13px] font-medium"
                    href="/"
                  >
                    index
                  </a>
                </li>
                <li>
                  <a
                    className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 text-[13px] font-medium"
                    href="/projects"
                  >
                    projetos
                  </a>
                </li>
                <li>
                  <a
                    className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 text-[13px] font-medium"
                    href="/certifications"
                  >
                    certificações
                  </a>
                </li>
                <li>
                  <a
                    className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 text-[13px] font-medium"
                    href="/skills"
                  >
                    skills
                  </a>
                </li>
              </ul>

              {/* Theme Toggle Button */}
              <button
                onClick={handleThemeToggle}
                className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
                aria-label="Toggle theme"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 hover:rotate-12"
                >
                  <path
                    d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between px-4 py-3 min-w-[280px]">
            {/* Logo/Avatar */}
            <div className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 ring-1 ring-white/20 dark:ring-white/10 transition-all duration-300 hover:ring-white/40 dark:hover:ring-white/20 hover:scale-105">
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
              {/* Theme Toggle Button */}
              <button
                onClick={handleThemeToggle}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
                aria-label="Toggle theme"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 hover:rotate-12"
                >
                  <path
                    d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
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
        </div>
      </header>

      {/* Mobile Full Screen Modal */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 backdrop-blur-2xl bg-black/20 dark:bg-black/40 pointer-events-auto"
            : "opacity-0 backdrop-blur-0 pointer-events-none"
        }`}
        style={{
          backdropFilter: isMobileMenuOpen
            ? "blur(40px) saturate(150%)"
            : "none",
          WebkitBackdropFilter: isMobileMenuOpen
            ? "blur(40px) saturate(150%)"
            : "none",
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute inset-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 dark:shadow-black/60 transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? "backdrop-blur-3xl bg-white/10 dark:bg-black/10 scale-100 opacity-100"
              : "backdrop-blur-0 bg-transparent scale-95 opacity-0"
          }`}
          style={{
            backdropFilter: "blur(30px) saturate(180%)",
            WebkitBackdropFilter: "blur(30px) saturate(180%)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center h-full p-8">
            {/* Avatar/Logo */}
            <div className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 ring-2 ring-white/30 dark:ring-white/20 transition-all duration-300 hover:ring-white/50 dark:hover:ring-white/30 hover:scale-105 mb-8">
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
              <ul className="flex flex-col items-center gap-4 text-white/90 dark:text-white/80">
                <li>
                  <a
                    className="block px-6 py-3 rounded-2xl hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 text-lg font-medium text-center min-w-[160px]"
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    index
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-3 rounded-2xl hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 text-lg font-medium text-center min-w-[160px]"
                    href="/projects"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    projetos
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-3 rounded-2xl hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 text-lg font-medium text-center min-w-[160px]"
                    href="/certifications"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    certificações
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-3 rounded-2xl hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 text-lg font-medium text-center min-w-[160px]"
                    href="/skills"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    skills
                  </a>
                </li>
              </ul>
            </nav>

            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 inline-flex items-center justify-center w-12 h-12 rounded-full text-white/60 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
              aria-label="Fechar menu"
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
