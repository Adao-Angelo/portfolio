"use client";

import { useEffect, useState } from "react";

// Function to detect current theme from DOM (set by ThemeScript)
function getThemeFromDOM(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";

  // First check the data attribute set by ThemeScript
  const dataTheme = document.documentElement.getAttribute("data-theme");
  if (dataTheme === "light" || dataTheme === "dark") {
    return dataTheme;
  }

  // Fallback to checking the class
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// Function to detect initial theme for SSR/hydration
function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark"; // SSR fallback

  try {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) return savedTheme;
  } catch (error) {
    console.warn("Could not access localStorage:", error);
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Use DOM theme if available (after ThemeScript runs), otherwise fall back
    return typeof window !== "undefined" ? getThemeFromDOM() : "dark";
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Sync with the actual DOM state set by ThemeScript
    const domTheme = getThemeFromDOM();
    if (domTheme !== theme) {
      setTheme(domTheme);
    }

    // Listen for system theme changes (only if no saved preference)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      try {
        const savedTheme = localStorage.getItem("theme");
        if (!savedTheme) {
          const newTheme = e.matches ? "dark" : "light";
          setTheme(newTheme);
          applyTheme(newTheme);
        }
      } catch (error) {
        console.warn("Could not handle theme change:", error);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;

    if (newTheme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }

    root.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    try {
      localStorage.setItem("theme", newTheme);
    } catch (error) {
      console.warn("Could not save theme to localStorage:", error);
    }

    applyTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
    mounted,
  };
}
