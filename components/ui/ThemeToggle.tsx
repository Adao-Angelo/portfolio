"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    // Render a placeholder to prevent hydration mismatch
    return (
      <button className="inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-600 focus-visible:outline-none">
        <div className="w-4 h-4" />
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-600 focus-visible:outline-none"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300"
          >
            <path
              d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0784 17.4784 15.0784C12.7853 15.0784 9.00003 11.2931 9.00003 6.6C9.00003 5.14828 9.35955 3.77808 10 2.57843C5.94668 3.28672 3 6.85922 3 11.0784C3 15.4967 6.50329 19 10.9216 19C15.1408 19 18.7133 16.0533 19.4216 12C19.1214 12.0068 18.8227 12.0068 18.5 12C18.5 12.0069 18.5 12.0138 18.5 12.0206C18.5 13.1252 19.3954 14.0206 20.5 14.0206C20.8357 14.0206 21.1468 13.9496 21.5 13.8284V14.0784Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path
              d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}
