import { motion } from "framer-motion";
import { technologies } from "../const/technologies";
import Technology from "./Technology";

export default function TechnologiesList() {
  return (
    <>
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
        className="flex flex-wrap gap-4 py-8"
      >
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <Technology
              key={index}
              IconComponent={IconComponent}
              index={index}
              name={tech.name}
            ></Technology>
          );
        })}
      </motion.div>
    </>
  );
}
