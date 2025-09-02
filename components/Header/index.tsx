"use client";

import { Folder, House, Info, User } from "lucide-react";
import { useSearchParams } from "next/navigation";
import MenuItem from "./MenuItem";

export default function Header() {
  const searchParams = useSearchParams();
  const visibleSection = searchParams.get("visibleSection");

  return (
    <header className="p-6 fixed  justify-center  w-full flex">
      <nav className="flex justify-between p-2 bg-zinc-800/50 backdrop-blur-md rounded-full">
        <MenuItem title="home" icon={House}></MenuItem>
        <MenuItem title="about" icon={Info}></MenuItem>
        <MenuItem title="skills" icon={User}></MenuItem>
        <MenuItem title="projects" icon={Folder}></MenuItem>
      </nav>
    </header>
  );
}
