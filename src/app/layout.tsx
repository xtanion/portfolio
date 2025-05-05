import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "xtanion - portfolio",
    description: "Portfolio website for Shivam Anand",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-400/40  ${inter.className}`}>{children}</body>
        </html>
    );
}
