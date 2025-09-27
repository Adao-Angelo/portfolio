"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check system preference on mount
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

  return (
    <div className="min-h-screen bg-dark-custom text-foreground">
      {/* Fixed Glass Header */}
      <Header onThemeToggle={toggleTheme} />

      {/* Main Content */}
      <main className="pt-32">
        <h1 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300">
          Adão Ângelo João
        </h1>
        <span className="text-sm font-medium text-neutral-500">
          Frontend Developer | UX Designer
        </span>

        <div className="mt-6">
          <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
            Transformo{" "}
            <span className="transition-all border-b text-neutral-600 duration-500 cursor-default select-none">
              necessidades em aplicações
            </span>{" "}
            reais, evolutivas e funcionais. Desenvolvo sistemas através da minha
            paixão por tecnologia, contribuindo para soluções inovadoras e
            eficazes.
          </p>
          <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
            Never stop learning. Vamos construir algo extraordinário juntos!{" "}
            <a href="mailto:adaobegginer@gmail.com" className="inline">
              <span className="transition-all border-b border-dashed border-neutral-900 text-neutral-800 dark:border-neutral-300 dark:text-neutral-400 duration-500 hover:border-gray-300">
                Entre em contato!
              </span>
            </a>
          </p>

          {/* Experience Section */}
          <div className="flex flex-col gap-y-5 mt-10">
            <h2 className="text-[15.8px] font-semibold text-neutral-800 dark:text-neutral-300">
              Experiência
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
                    2025 - agora
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
                    2023 - agora
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
          </div>

          <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 pt-4">
            Sinta-se à vontade para interagir comigo nas minhas redes sociais. É
            sempre bom conhecer pessoas novas e compartilhar experiências!
          </p>

          <ul className="w-full items-center justify-end flex gap-3 pt-5">
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
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
