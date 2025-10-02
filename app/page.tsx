"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark-custom text-foreground">
      {/* Main Content */}
      <main className="pt-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300"
        >
          <TypeAnimation
            sequence={[
              "Adão Ângelo João",
              2000,
              "Welcome to my portfolio!",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm font-medium text-neutral-500"
        >
          Frontend Developer | UX Designer
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6"
        >
          <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
            I transform{" "}
            <span className="transition-all border-b text-neutral-600 duration-500 cursor-default select-none">
              needs into applications
            </span>{" "}
            that are real, evolving and functional. I develop systems through my
            passion for technology, contributing to innovative and effective
            solutions.
          </p>
          <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
            Never stop learning. Let&apos;s build something extraordinary
            together!{" "}
            <a href="mailto:adaobegginer@gmail.com" className="inline">
              <span className="transition-all border-b border-dashed border-neutral-900 text-neutral-800 dark:border-neutral-300 dark:text-neutral-400 duration-500 hover:border-gray-300">
                Get in touch!
              </span>
            </a>
          </p>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-y-5 mt-10"
          >
            <h2 className="text-[15.8px] font-semibold text-neutral-800 dark:text-neutral-300">
              Experience
            </h2>

            {/* Experience Items */}
            <div className="flex w-full items-center justify-between group">
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[13.5px] leading-none text-neutral-800 dark:text-neutral-300">
                      Frontend Developer & UI Designer
                    </span>
                    <div className="relative inline-block">
                      <div className="rotate-12 cursor-pointer rounded-lg border border-neutral-100 p-1 transition duration-300 hover:rotate-0 dark:border-neutral-700/30">
                        <div className="w-[18px] h-[18px] bg-purple-100 dark:bg-purple-900 rounded-sm flex items-center justify-center">
                          <span className="text-[10px] font-bold text-purple-600 dark:text-purple-300">
                            LD
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
                  <span className="text-[12.5px] leading-none text-neutral-600 dark:text-neutral-400">
                    2025 - now
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between group">
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[13.5px] leading-none text-neutral-800 dark:text-neutral-300">
                      Full-stack Developer
                    </span>
                    <div className="relative inline-block">
                      <div className="rotate-12 cursor-pointer rounded-lg border border-neutral-100 p-1 transition duration-300 hover:rotate-0 dark:border-neutral-700/30">
                        <div className="w-[18px] h-[18px] bg-blue-100 dark:bg-blue-900 rounded-sm flex items-center justify-center">
                          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-300">
                            NTC
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
                  <span className="text-[12.5px] leading-none text-neutral-600 dark:text-neutral-400">
                    2023 - now
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between group">
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[13.5px] leading-none text-neutral-800 dark:text-neutral-300">
                      Front-end Developer
                    </span>
                    <div className="relative inline-block">
                      <div className="rotate-12 cursor-pointer rounded-lg border border-neutral-100 p-1 transition duration-300 hover:rotate-0 dark:border-neutral-700/30">
                        <div className="w-[18px] h-[18px] bg-green-100 dark:bg-green-900 rounded-sm flex items-center justify-center">
                          <span className="text-[10px] font-bold text-green-600 dark:text-green-300">
                            HD
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
                  <span className="text-[12.5px] leading-none text-neutral-600 dark:text-neutral-400">
                    2025
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 pt-4"
          >
            Feel free to interact with me on my social networks. It&apos;s
            always good to meet new people and share experiences!
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-full items-center justify-end flex gap-3 pt-5"
          >
            <li>
              <a
                className="text-[13.5px] border-b text-neutral-600 dark:text-neutral-400 transition-all duration-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                target="_blank"
                href="https://github.com/Adao-Angelo"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="text-[13.5px] border-b text-neutral-600 dark:text-neutral-400 transition-all duration-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                target="_blank"
                href="https://www.linkedin.com/in/adaoangelojoao"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </motion.ul>
        </motion.div>
      </main>
    </div>
  );
}
