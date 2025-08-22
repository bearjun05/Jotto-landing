import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import Script from "next/script"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jotto - Clear your mind, save your thoughts",
  description:
    "Just press one shortcut anywhere in Slack, Chrome, or Notion. From scheduling to memo organization becomes easy and convenient.",
  keywords: [
    "Jotto",
    "productivity",
    "memo",
    "text capture",
    "macOS",
    "shortcut",
    "todo",
    "calendar",
    "Slack",
    "Chrome",
    "Notion",
  ],
  authors: [{ name: "Jotto" }],
  creator: "Jotto",
  publisher: "Jotto",
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
    description:
      "Just press one shortcut anywhere in Slack, Chrome, or Notion. From scheduling to memo organization becomes easy and convenient.",
    url: "https://jotto.in/en",
    siteName: "Jotto",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/jotto-icon.png",
        width: 1200,
        height: 630,
        alt: "Jotto - The easiest way to save your thoughts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jotto - Clear your mind, save your thoughts",
    description:
      "Just press one shortcut anywhere in Slack, Chrome, or Notion. From scheduling to memo organization becomes easy and convenient.",
    images: ["/jotto-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.png",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

export default function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-QLXF3L16ME" strategy="afterInteractive" />
      <Script id="google-analytics-en" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QLXF3L16ME');
        `}
      </Script>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={inter.className}>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Analytics />
        </body>
      </html>
    </>
  )
}
