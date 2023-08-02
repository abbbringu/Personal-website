import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian Nguyen",
  description: "Personal website for showcasing portfolio",
  openGraph: {
    title: "Brian Nguyen",
    description: "My personal website for showcasing portfolio",
    url: "https://garlicginger.se",
    siteName: "garlicginger.se",
    locale: "en-SV",
    type: "website",
  },
  icons: {
    shortcut: "/favicon.png",
  },
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
