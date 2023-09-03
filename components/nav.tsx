"use client";

import Link from "next/link";
import { Pacifico } from "next/font/google";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Home, Coins, Newspaper, Search, Menu } from "lucide-react";
import { SlideMenu } from ".";
import { useSideMenuStore } from "@/stores/sideMenuStore";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default function Nav() {
  const { handleInitial } = useSideMenuStore();
  const icons: any = {
    1: <Home size="15px" />,
    2: <Coins size="15px" />,
    3: <Newspaper size="15px" />,
    4: <Search size="15px" />,
  };

  return (
    <header className="w-full h-[12vh] grid place-items-center bg-[#f1efe9] sticky top-0 right-0 z-10">
      <div className="w-[90vw] 2xl:w-[60vw] flex justify-between items-center">
        <Link href="/">
          <span className={cn(pacifico.className, "text-4xl")}>bloc</span>
        </Link>
        <nav className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.id}>
              <div className="flex items-center gap-1 px-5 py-2 border-b border-b-transparent hover:border-b-gray-800">
                {icons[link.icon]}
                <span>{link.title}</span>
              </div>
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={handleInitial}>
          <Menu size="15px" />
        </button>
      </div>
      <SlideMenu />
    </header>
  );
}
