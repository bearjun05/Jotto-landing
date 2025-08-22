import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "../globals.css"

export const metadata: Metadata = {
  title: "Jotto - Clear your mind, save your thoughts",
  description:
    "Save your fleeting thoughts instantly with Jotto, a fast and simple note-taking app. Free download for macOS.",
  keywords: ["note app", "macOS", "productivity", "notes", "quick notes", "Jotto"],
  authors: [{ name: "Jotto Team" }],
  creator: "Jotto Team",
  publisher: "Jotto Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jotto.in"),
  alternates: {
    canonical: "/en",
    languages: {
      "ko-KR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Jotto - Clear your mind, save your thoughts",
    description: "Save your fleeting thoughts instantly with Jotto, a fast and simple note-taking app.",
    url: "https://jotto.in/en",
    siteName: "Jotto",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/jotto-icon.png",
        width: 1200,
        height: 630,
        alt: "Jotto - Quick Note Taking App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jotto - Clear your mind, save your thoughts",
    description: "Save your fleeting thoughts instantly with Jotto, a fast and simple note-taking app.",
    images: ["/jotto-icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.png", color: "#000000" }],
  },
  manifest: "/site.webmanifest",
}

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
