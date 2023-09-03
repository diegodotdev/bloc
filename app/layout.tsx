import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "bloc",
  description: "One stop for everything crypto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="w-full min-h-[76vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
