"use client";

import { motion } from "framer-motion";
import ProjectList from "./_components/ProjectList";

export default function Projects() {
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
            <h1 className="text-[16.5px] font-semibold leading-7 text-gray-800 dark:text-gray-200 [&:not(:first-child)]:mt-6">
              Projects
            </h1>
            <p className="text-[14.5px] leading-7 text-gray-600 dark:text-gray-400 [&:not(:first-child)]:mt-6">
              Projects developed throughout my professional career. Specialized
              in web development, APIs, responsive design and systems
              integration. See my complete work on{" "}
              <a
                href="https://github.com/Adao-Angelo"
                className="transition-all border-b text-gray-500 dark:text-gray-400 duration-500 hover:border-gray-300 dark:hover:border-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="p-1">GitHub</span>
              </a>{" "}
              and designs on{" "}
              <a
                href="https://www.figma.com/@adaoangelo"
                className="transition-all border-b text-gray-500 dark:text-gray-400 duration-500 hover:border-gray-300 dark:hover:border-gray-500"
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
              <ProjectList />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-[16.5px] font-semibold leading-7 text-gray-800 dark:text-gray-200 [&:not(:first-child)]:mt-6">
              Client Projects
            </h2>
            <p className="text-[14.5px] leading-7 text-gray-600 dark:text-gray-400 [&:not(:first-child)]:mt-6">
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
