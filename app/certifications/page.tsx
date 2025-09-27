"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function Certifications() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
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

  const certifications = [
    {
      name: "NLW Expert trilha de React",
      url: "https://app.rocketseat.com.br/certificates/786a03e2-1aff-43fb-869d-ffb8d9b62866",
    },
    {
      name: "NLW Connect - React",
      url: "https://app.rocketseat.com.br/certificates/4fb65139-ec9d-4077-aa70-ea180ac801f6",
    },
    {
      name: "Introduction to HTML",
      url: "https://www.sololearn.com/en/certificates/CC-IQPICMRK",
    },
    {
      name: "Prompt Engineering",
      url: "https://www.sololearn.com/en/certificates/CC-OMXQJZCP",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-custom text-foreground">
      <Header onThemeToggle={toggleTheme} />

      <main className="pt-32">
        <div className="flex flex-col gap-14">
          <div>
            <h1 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6">
              Certificações
            </h1>
            <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
              Minhas certificações concluídas para aprimoramento contínuo em
              desenvolvimento web e tecnologias modernas.
            </p>
            <div>
              <div className="mt-8 flex flex-col gap-4">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white group"
                  >
                    <div className="group my-1 flex w-full flex-row items-center text-zinc-800 dark:text-zinc-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 rounded-lg p-2 transition-colors duration-200">
                      <div className="flex flex-col">
                        <span className="whitespace-nowrap text-[15px] tracking-tight text-black dark:text-neutral-300">
                          <span className="inline-block whitespace-pre-wrap">
                            <span className="sr-only">{cert.name}</span>
                            <span aria-hidden="true">
                              {cert.name.split("").map((char, i) => (
                                <span key={i} className="">
                                  {char}
                                </span>
                              ))}
                            </span>
                          </span>
                        </span>
                      </div>
                      <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
                      <span className="whitespace-nowrap text-sm text-neutral-400 dark:text-neutral-500">
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
