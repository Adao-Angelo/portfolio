"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Projects() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const projects = [
    {
      name: "News Aggregator",
      tech: "React",
      url: "https://news-aggregations.vercel.app/",
      description: "News Aggregator made in 2024",
    },
    {
      name: "Todo List",
      tech: "Next.js",
      url: "https://task-list-todo.vercel.app/",
      description: "Todo-list made in 2025",
    },
    {
      name: "ChatBot - AI-Powered Chatbot",
      tech: "Next.js",
      url: "https://chat-ai-liard-mu.vercel.app/",
      description: "ChatBot made in 2024",
    },
    {
      name: "Clock Work",
      tech: "Tauri",
      url: "https://clock-work.vercel.app/",
      description: "Clock work made in 2024",
    },
    {
      name: "Task Management API",
      tech: "Nest.js",
      url: "https://github.com/Adao-Angelo/task-management-api",
      description: "Task Management API made in 2024",
    },
  ];

  return (
    <div>
      <main className="pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6">
              Projects
            </h1>
            <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
              Projects developed throughout my professional career. Specialized
              in web development, APIs, responsive design and systems
              integration. See my complete work on{" "}
              <a
                href="https://github.com/Adao-Angelo"
                className="transition-all border-b text-neutral-500 duration-500 hover:border-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="p-1">GitHub</span>
              </a>{" "}
              and designs on{" "}
              <a
                href="https://www.figma.com/@adaoangelo"
                className="transition-all border-b text-neutral-500 duration-500 hover:border-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="p-1">Figma</span>
              </a>
              .
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="mt-8 flex flex-col gap-4">
                {projects.map((project, index) => (
                  <motion.a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="group my-1 flex w-full flex-row items-center text-zinc-800 dark:text-zinc-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 rounded-lg p-2 transition-colors duration-200">
                      <span className="whitespace-nowrap text-[15px] tracking-tight text-black dark:text-neutral-300">
                        <span className="inline-block whitespace-pre-wrap">
                          <span className="sr-only">{project.name}</span>
                          <span aria-hidden="true">
                            {project.name.split("").map((char, i) => (
                              <span key={i} className="">
                                {char}
                              </span>
                            ))}
                          </span>
                        </span>
                      </span>
                      <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
                      <span className="whitespace-nowrap text-sm text-neutral-400 dark:text-neutral-500">
                        {project.tech}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6">
              Client Projects
            </h2>
            <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
              Custom solutions developed to meet the specific needs of clients
              and companies.
            </p>
            <div className="mt-8"></div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
