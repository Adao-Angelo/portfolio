import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-custom text-foreground">
      <div className="flex flex-col items-center gap-4 p-8 rounded-2xl shadow-lg bg-white/80 dark:bg-black/60 border border-neutral-200 dark:border-neutral-700">
        <Image
          src="/me.jpeg"
          alt="Adão Ângelo João Foto de Perfil"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full ring-2 ring-purple-400 dark:ring-purple-600 mb-2"
          priority
        />
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
          Página não encontrada
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 text-center max-w-xs">
          Ops! Parece que você tentou acessar uma página que não existe.
          <br />
          Volte para a página inicial ou explore outros projetos!
        </p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 rounded-full bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition-all duration-300"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
