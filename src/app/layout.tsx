import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "xtanion",
  description: "Portfolio website for Shivam Anand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <body className={`scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-400/30 ${inter.className}`}>{children}</body>
    </html>
  );
}
