"use client";

import { motion } from "framer-motion";

import TechnologiesList from "./_components/TechnologiesList";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-dark-custom text-foreground">
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
            className="text-[16.5px] font-semibold leading-7 text-gray-800 dark:text-gray-200 mb-4"
          >
            Skills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[14.5px] leading-7 text-gray-600 dark:text-gray-400 max-w-3xl"
          >
            Technologies that I master and use in developing modern and scalable
            solutions.
          </motion.p>
        </motion.div>
        {/* Technologies List */}
        <TechnologiesList></TechnologiesList>
      </main>
    </div>
  );
}
