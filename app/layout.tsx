import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://xtanion.github.io/portfolio'),
  title: {
    default: "xtanion - Shivam Anand | Software Engineer",
    template: "%s | xtanion"
  },
  description: "Software engineer specializing in backend systems, AI, and distributed architectures.",
  keywords: ["xtanion", "Shivam Anand", "software engineer", "backend engineer", "AI", "distributed systems", "full stack developer", "Edra Labs", "IIT Roorkee", "IITR"],
  authors: [{ name: "xtanion" }, { name: "Shivam Anand" }],
  creator: "xtanion",
  publisher: "xtanion",
  generator: "Next.js",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xtanion.github.io/portfolio',
    title: 'xtanion - Shivam Anand | Software Engineer',
    description: 'Software engineer specializing in backend systems, AI/ML platforms, and distributed architectures.',
    siteName: 'xtanion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'xtanion - Shivam Anand | Software Engineer',
    description: 'Software engineer specializing in backend systems, AI/ML platforms, and distributed architectures.',
    creator: '@xtanion',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐧</text></svg>",
  },
  alternates: {
    canonical: 'https://xtanion.github.io/portfolio',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
