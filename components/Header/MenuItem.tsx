import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { ElementType } from "react";

interface MenuItemProps {
  icon: ElementType;
  title: string;
}

export default function MenuItem({ icon: Icon, title }: MenuItemProps) {
  const searchParams = useSearchParams();
  const visibleSection = searchParams.get("visibleSection");

  return (
    <Link
      className={` ${
        visibleSection == title ? "bg-pink-600" : ""
      } py-3 px-6 flex justify-center items-center gap-2 rounded-full`}
      href={`/?visibleSection=${title}`}
    >
      <Icon className="w-6 h-6"></Icon>
      <p className="text-sm font-bold uppercase">{title}</p>
    </Link>
  );
}
