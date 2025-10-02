import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <AlertCircle
        size={48}
        className="text-purple-600 dark:text-purple-400 mb-4"
      />
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-base text-gray-600 dark:text-gray-400 mb-6 text-center">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-[13.5px] border-b text-gray-600 dark:text-gray-400 transition-all duration-500 hover:text-gray-800 dark:hover:text-gray-200 font-medium"
      >
        ← Go back home
      </Link>
    </div>
  );
}
