"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [onlineTime, setOnlineTime] = useState(0);

  useEffect(() => {
    // Simular tempo online (em minutos)
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / (1000 * 60));
      setOnlineTime(elapsed + 15); // Começar com 15 minutos base
    }, 60000); // Atualizar a cada minuto

    // Inicializar com tempo base
    setOnlineTime(15);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="my-16 flex flex-col items-center justify-between text-neutral-600 dark:text-neutral-400 md:my-14 md:flex-row opacity-50">
      <div className="flex items-center gap-1.5">
        <span className="text-xs">Built by</span>
        <a
          target="_blank"
          href="https://github.com/Adao-Angelo"
          className="hover:text-tertiary flex h-5 items-center gap-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 pr-1.5 pl-0.5 hover:bg-[#f0f0f0] text-xs transition-colors"
          rel="noopener noreferrer"
        >
          <Image
            src="/me.jpeg"
            alt="Adão Ângelo João"
            width={16}
            height={16}
            className="w-4 h-4 rounded-full outline-1 outline-black/5 object-cover"
          />
          Adão Angelo
        </a>
      </div>
      <div className="mt-8 md:mt-0 flex items-center text-center">
        <span className="relative flex items-center justify-center w-4 h-4">
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-2 w-2 bg-green-500/50 rounded-full animate-ping"></span>
          </span>
          <span className="relative h-1.5 w-1.5 bg-green-500 rounded-full"></span>
        </span>
        <div className="ml-2">
          <p className="text-xs">
            online{" "}
            <span className="inline-flex items-center">
              <span className="relative w-[0.65em] h-[1em] inline-block overflow-hidden">
                <span
                  className="absolute left-0 top-0 w-full text-xs transition-all duration-500"
                  style={{
                    willChange: "transform, opacity, filter",
                    opacity: 1,
                    filter: "blur(0px)",
                    transform: "none",
                  }}
                >
                  {Math.floor(onlineTime / 10)}
                </span>
              </span>
              <span className="relative w-[0.65em] h-[1em] inline-block overflow-hidden">
                <span
                  className="absolute left-0 top-0 w-full text-xs transition-all duration-500"
                  style={{
                    willChange: "transform, opacity, filter",
                    opacity: 1,
                    filter: "blur(0px)",
                    transform: "none",
                  }}
                >
                  {onlineTime % 10}
                </span>
              </span>
              <span className="ml-0.5"></span>
            </span>
            <span style={{ opacity: 1, filter: "blur(0px)" }}> min</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
