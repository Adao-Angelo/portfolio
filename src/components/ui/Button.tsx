interface ButtonProps {
  variant?: "default" | "outline" | "black";
  children: React.ReactNode;
}

export default function Button({ variant = "default", children }: ButtonProps) {
  const baseStyles =
    "rounded-[0.5rem] py-[1.5rem] px-[1.6rem] text-center font-bold text-[1.4rem]";

  const defaultStyles =
    "bg-purple-500 text-white border-none hover:bg-purple-600";
  const outlineStyles =
    "bg-none border-[0.1rem] border-purple-500 text-neutral-900 hover:bg-purple-100";
  const blackStyles = "bg-black text-white border-none hover:bg-gray-800";

  const darkDefaultStyles =
    "bg-purple-200 text-neutral-900 border-none hover:bg-purple-300";
  const darkOutlineStyles =
    "bg-none border-[0.1rem] border-neutral-500 text-neutral-50 hover:bg-neutral-600";
  const darkBlackStyles =
    "bg-black text-neutral-100 border-none hover:bg-neutral-800";

  const buttonStyles = `${baseStyles} ${
    variant === "default"
      ? defaultStyles
      : variant === "outline"
      ? outlineStyles
      : blackStyles
  }`;

  const darkButtonStyles = `${baseStyles} ${
    variant === "default"
      ? darkDefaultStyles
      : variant === "outline"
      ? darkOutlineStyles
      : darkBlackStyles
  }`;

  return (
    <button
      className={`${buttonStyles} dark:${darkButtonStyles} transition-all ease-in-out duration-200 box-border`}
    >
      {children}
    </button>
  );
}
