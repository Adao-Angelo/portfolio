"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CertificateList from "./_components/CertificateList";

export default function Certifications() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

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
              Certifications
            </h1>
            <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
              My completed certifications for continuous improvement in web
              development and modern technologies.
            </p>
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
            >
              <CertificateList />
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
