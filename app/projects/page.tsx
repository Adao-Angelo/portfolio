"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function Projects() {
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

  const projects = [
    {
      name: "News Aggregator",
      tech: "React",
      url: "https://news-aggregations.vercel.app/",
      description: "News Aggregator feito em 2024",
    },
    {
      name: "Todo List",
      tech: "Next.js",
      url: "https://task-list-todo.vercel.app/",
      description: "Todo-list feito em 2025",
    },
    {
      name: "ChatBot - AI-Powered Chatbot",
      tech: "Next.js",
      url: "https://chat-ai-liard-mu.vercel.app/",
      description: "ChatBot feito em 2024",
    },
    {
      name: "Clock Work",
      tech: "Tauri",
      url: "https://clock-work.vercel.app/",
      description: "Clock work feito em 2024",
    },
    {
      name: "Task Management API",
      tech: "Nest.js",
      url: "https://github.com/Adao-Angelo/task-management-api",
      description: "Task Management API feito em 2024",
    },
  ];

  const clientProject = {
    name: "Kudi",
    tech: "React Native",
    url: "#",
    description:
      "App para agendar bilhetes para eventos e fazer reservas em restaurantes",
    sections: {
      objective:
        "Desenvolver uma plataforma unificada que permita aos usuários descobrir, agendar e gerenciar eventos culturais e experiências gastronômicas de forma intuitiva e eficiente.",
      features: [
        "Agendamento de bilhetes para eventos culturais e musicais",
        "Sistema de reservas para restaurantes",
        "Interface intuitiva e responsiva",
        "Notificações push para lembretes",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-dark-custom">
      <Header onThemeToggle={toggleTheme} />

      <main className="pt-32">
        <div className="flex flex-col gap-14">
          <div>
            <h1 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6">
              Projetos
            </h1>
            <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
              Projetos desenvolvidos ao longo da minha carreira profissional.
              Especializado em desenvolvimento web, APIs, design responsivo e
              integração de sistemas. Veja meu trabalho completo no{" "}
              <a
                href="https://github.com/Adao-Angelo"
                className="transition-all border-b text-neutral-500 duration-500 hover:border-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="p-1">GitHub</span>
              </a>{" "}
              e designs no{" "}
              <a
                href="https://www.figma.com/@adaoangelo"
                className="transition-all border-b text-neutral-500 duration-500 hover:border-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="p-1">Figma</span>
              </a>
              .
            </p>
            <div>
              <div className="mt-8 flex flex-col gap-4">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white group"
                  >
                    <div className="group my-1 flex w-full flex-row items-center text-zinc-800 dark:text-zinc-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 rounded-lg p-2 transition-colors duration-200">
                      <span className="whitespace-nowrap text-[15px] tracking-tight text-black dark:text-neutral-300">
                        <span className="inline-block whitespace-pre-wrap">
                          <span className="sr-only">{project.name}</span>
                          <span aria-hidden="true">
                            {project.name.split("").map((char, i) => (
                              <span key={i} className="">
                                {char}
                              </span>
                            ))}
                          </span>
                        </span>
                      </span>
                      <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
                      <span className="whitespace-nowrap text-sm text-neutral-400 dark:text-neutral-500">
                        {project.tech}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6">
              Projetos para Clientes
            </h2>
            <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
              Soluções desenvolvidas sob medida para atender às necessidades
              específicas de clientes e empresas.
            </p>

            <div className="mt-8">
              {/* Cabeçalho do Projeto */}
              <div className="mb-6">
                <div className="flex w-full flex-row items-center text-zinc-800 dark:text-zinc-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 rounded-lg p-2 transition-colors duration-200">
                  <span className="whitespace-nowrap text-[15px] tracking-tight text-black dark:text-neutral-300 font-semibold">
                    {clientProject.name}
                  </span>
                  <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
                  <span className="whitespace-nowrap text-sm text-neutral-400 dark:text-neutral-500">
                    {clientProject.tech}
                  </span>
                </div>
                <p className="text-[13px] text-neutral-500 dark:text-neutral-400 mt-2 ml-2">
                  {clientProject.description}
                </p>
              </div>

              {/* Objetivo */}
              <div className="mb-6">
                <h3 className="text-[14px] font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  Objetivo
                </h3>
                <p className="text-[13px] leading-6 text-neutral-600 dark:text-neutral-400 ml-2">
                  {clientProject.sections.objective}
                </p>
              </div>

              {/* Funcionalidades */}
              <div className="mb-6">
                <h3 className="text-[14px] font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  Funcionalidades
                </h3>
                <ul className="ml-2 space-y-1">
                  {clientProject.sections.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-[13px] text-neutral-600 dark:text-neutral-400 flex items-start"
                    >
                      <span className="text-neutral-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
