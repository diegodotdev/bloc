"use client";

import { useSideMenuStore } from "@/stores/sideMenuStore";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";
import Link from "next/link";
import { Home, Coins, Newspaper, X } from "lucide-react";

export default function SlideMenu() {
  const { initial, handleInitial } = useSideMenuStore();

  const icons: any = {
    1: <Home size="15px" />,
    2: <Coins size="15px" />,
    3: <Newspaper size="15px" />,
  };

  return (
    <div
      className={cn(
        "md:hidden fixed top-0 right-0 w-full h-screen bg-[#f1efe9] duration-[.8s]",
        initial ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"
      )}
    >
      <div className="w-[90vw] flex flex-col gap-4 mx-auto">
        <div className="w-full h-[12vh] flex justify-end items-center">
          <button onClick={handleInitial}>
            <X size="15px" />
          </button>
        </div>
        {navLinks.map((link) => (
          <Link
            className="w-full h-[8vh] flex justify-start items-center gap-2 border-b border-b-gray-200"
            href={link.href}
            key={link.id}
            onClick={handleInitial}
          >
            {icons[link.icon]}
            <span>{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
