import { motion } from "framer-motion";

interface ProjectProps {
  name: string;
  description?: string;
  url: string;
  tech: string;
  index: number;
}

export default function Project({
  name,

  url,
  tech,
  index,
}: ProjectProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black dark:text-white group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="group my-1 flex w-full flex-row items-center text-zinc-800 dark:text-zinc-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 rounded-lg p-2 transition-colors duration-200">
        <span className="whitespace-nowrap text-[15px] tracking-tight text-black dark:text-neutral-300">
          <span className="inline-block whitespace-pre-wrap">
            <span className="sr-only">{name}</span>
            <span aria-hidden="true">
              {name.split("").map((char, i) => (
                <span key={i} className="">
                  {char}
                </span>
              ))}
            </span>
          </span>
        </span>
        <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
        <span className="whitespace-nowrap text-sm text-neutral-400 dark:text-neutral-500">
          {tech}
        </span>
      </div>
    </motion.a>
  );
}
