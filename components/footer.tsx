import Link from "next/link";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <footer className="w-full h-[12vh] grid place-items-center">
      <div className="w-[90vw] 2xl:w-[60vw] flex justify-between">
        <Link href="/">
          <span className={cn(pacifico.className, "text-lg")}>bloc</span>
        </Link>
        <div className="flex items-center gap-10">
          <p>Made by Diego.</p>
          <a
            href="//www.github.com/DigitalDiego"
            target="_blank"
            rel="noreferrer"
          >
            <Github size="15px" />
          </a>
        </div>
      </div>
    </footer>
  );
}
