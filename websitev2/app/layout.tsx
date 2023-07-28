import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian Nguyen",
  description: "Personal website for showcasing portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-800 overflow-x-hidden", inter.className)}>
        <Navbar />
        {children}
        <div className="h -30 w-full overflow-x-hidden"></div>
      </body>
    </html>
  );
}
