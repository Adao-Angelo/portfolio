"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-left mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300 mb-4"
          >
            Skills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 max-w-3xl"
          >
            Tecnologias que domino e utilizo no desenvolvimento de soluções
            modernas e escaláveis.
          </motion.p>
        </motion.div>
        {/* Accordion de Tecnologias */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="flex flex-wrap gap-4 py-8"
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col items-center justify-center p-4 aspect-square w-24 h-24 border border-white/10 backdrop-blur-md rounded-lg hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <IconComponent className="text-2xl text-neutral-400 mb-2" />
                <span className="text-neutral-300 text-xs font-medium text-center">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
