"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const technologies = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Figma", icon: FaFigma },
  { name: "Git", icon: FaGitAlt },
  { name: "Vercel", icon: SiVercel },
  { name: "Supabase", icon: SiSupabase },
  { name: "React Native", icon: TbBrandReactNative },
];

export default function SkillsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-dark-custom text-foreground">
      <Header onThemeToggle={toggleTheme} />

      <main className="pt-32">
        <div className="text-left mb-12">
          <h1 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300 mb-4">
            Skills
          </h1>
          <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 max-w-3xl">
            Tecnologias que domino e utilizo no desenvolvimento de soluções
            modernas e escaláveis.
          </p>
        </div>

        {/* Accordion de Tecnologias */}
        <div className="flex flex-wrap gap-4 py-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 aspect-square w-24 h-24 border border-white/10 backdrop-blur-md rounded-lg hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <IconComponent className="text-2xl text-neutral-400 mb-2" />
                <span className="text-neutral-300 text-xs font-medium text-center">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
