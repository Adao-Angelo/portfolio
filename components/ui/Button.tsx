import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "icon";
  icon?: React.ReactNode;
}

export default function Button({
  children,
  onClick,
  className,
  variant = "default",
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-2 rounded-full text-sm font-bold transition-all duration-200";

  const variants = {
    default:
      "bg-pink-600 text-white hover:bg-pink-700 focus:ring-violet-500 py-3 px-6",
    outline:
      "border border-zinc-400 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-800 py-3 px-6",
    icon: "p-2 bg-zinc-200 hover:bg-zinc-300 rounded-full",
  };

  return (
    <button
      onClick={onClick}
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {variant !== "icon" && children}
    </button>
  );
}
