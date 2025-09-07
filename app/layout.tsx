import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Shivam Anand - Software Engineer",
  description: "Software engineer specializing in backend systems, AI/ML platforms, and distributed architectures. Currently building intelligent content systems at Edra Labs.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">{children}</body>
    </html>
  )
}
