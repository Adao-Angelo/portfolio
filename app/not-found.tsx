import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-custom text-foreground">
      <AlertCircle
        size={48}
        className="text-purple-600 dark:text-purple-400 mb-4"
      />
      <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
        Page not found
      </h1>
      <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 text-center">
        Oops! It seems like you tried to access a page that does not exist.
      </p>
      <Link
        href="/"
        className="text-[13.5px] border-b text-neutral-600 dark:text-neutral-400 transition-all duration-500 hover:text-neutral-800 dark:hover:text-neutral-200 font-medium"
      >
        Back to home
      </Link>
    </div>
  );
}
