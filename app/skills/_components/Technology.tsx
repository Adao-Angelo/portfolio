import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface TechnologyProps {
  IconComponent: IconType;
  index: number;
  name: string;
}

export default function Technology({
  IconComponent,
  index,
  name,
}: TechnologyProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className="flex flex-col items-center justify-center p-4 aspect-square w-24 h-24 border border-white/10 backdrop-blur-md rounded-lg hover:border-white/20 transition-all duration-300 hover:scale-105"
      >
        <IconComponent className="text-2xl text-gray-400 dark:text-gray-500 mb-2" />
        <span className="text-gray-700 dark:text-gray-300 text-xs font-medium text-center">
          {name}
        </span>
      </motion.div>
    </>
  );
}
