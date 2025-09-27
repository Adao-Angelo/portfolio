import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-custom text-foreground">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-4 p-8 rounded-2xl shadow-lg bg-white/80 dark:bg-black/60 border border-neutral-200 dark:border-neutral-700"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        >
          <Image
            src="/me.jpeg"
            alt="Adão Ângelo João Foto de Perfil"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-purple-400 dark:ring-purple-600 mb-2"
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold text-neutral-800 dark:text-neutral-200"
        >
          <TypeAnimation
            sequence={[
              "Página não encontrada",
              2000,
              "Página não encontrada 😢",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base text-neutral-600 dark:text-neutral-400 text-center max-w-xs"
        >
          Ops! Parece que você tentou acessar uma página que não existe.
          <br />
          Volte para a página inicial ou explore outros projetos!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href="/"
            className="mt-4 px-6 py-2 rounded-full bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition-all duration-300"
          >
            Voltar para o início
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
