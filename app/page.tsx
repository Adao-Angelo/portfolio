"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ExperienceList from "./_components/ExperienceList";

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
          Frontend Developer
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
            <ExperienceList />
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
