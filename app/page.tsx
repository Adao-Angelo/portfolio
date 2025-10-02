"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ExperienceList from "./_components/ExperienceList";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="pt-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[16.5px] font-semibold leading-7 text-gray-900 dark:text-gray-100"
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
          className="text-sm font-medium text-gray-700 dark:text-gray-400"
        >
          Frontend Developer
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6"
        >
          <p className="text-[14.5px] leading-7 text-gray-600 dark:text-gray-400 [&:not(:first-child)]:mt-6">
            I transform{" "}
            <span className="transition-all border-b text-gray-600 dark:text-gray-400 duration-500 cursor-default select-none">
              needs into applications
            </span>{" "}
            that are real, evolving and functional. I develop systems through my
            passion for technology, contributing to innovative and effective
            solutions.
          </p>
          <p className="text-[14.5px] leading-7 text-gray-600 dark:text-gray-400 [&:not(:first-child)]:mt-6">
            Never stop learning. Let&apos;s build something extraordinary
            together!{" "}
            <a href="mailto:adaobegginer@gmail.com" className="inline">
              <span className="transition-all border-b border-dashed border-gray-900 dark:border-gray-300 text-gray-800 dark:text-gray-300 duration-500 hover:border-gray-500 dark:hover:border-gray-400">
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
            <h2 className="text-[15.8px] font-semibold text-gray-800 dark:text-gray-200">
              Experience
            </h2>

            {/* Experience Items */}
            <ExperienceList />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[14.5px] leading-7 text-gray-600 dark:text-gray-400 pt-4"
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
                className="text-[13.5px] border-b text-gray-600 dark:text-gray-400 transition-all duration-500 hover:text-gray-800 dark:hover:text-gray-200"
                target="_blank"
                href="https://github.com/Adao-Angelo"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="text-[13.5px] border-b text-gray-600 dark:text-gray-400 transition-all duration-500 hover:text-gray-800 dark:hover:text-gray-200"
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
