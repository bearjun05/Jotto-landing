import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import Client from "./client"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jotto - 머릿속을 비우고, 생각을 저장하세요",
  description: "Slack·Chrome·Notion 어디에서든 단축키 하나만 누르세요. 일정부터 메모 정리가 쉽고 편리해집니다.",
  keywords: [
    "Jotto",
    "생산성",
    "메모",
    "텍스트 캡처",
    "macOS",
    "단축키",
    "할 일",
    "캘린더",
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
    canonical: "/",
    languages: {
      "ko-KR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Jotto - 머릿속을 비우고, 생각을 저장하세요",
    description: "Slack·Chrome·Notion 어디에서든 단축키 하나만 누르세요. 일정부터 메모 정리가 쉽고 편리해집니다.",
    url: "https://jotto.in",
    siteName: "Jotto",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/jotto-icon.png",
        width: 1200,
        height: 630,
        alt: "Jotto - 생각을 저장하는 가장 쉬운 방법",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jotto - 머릿속을 비우고, 생각을 저장하세요",
    description: "Slack·Chrome·Notion 어디에서든 단축키 하나만 누르세요. 일정부터 메모 정리가 쉽고 편리해집니다.",
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
      { url: "/favicon.ico", sizes: "any" },
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Google Analytics - 완전히 새로운 접근법 */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-QLXF3L16ME" strategy="beforeInteractive" />
      <Script id="google-analytics-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-QLXF3L16ME', {
            page_title: document.title,
            page_location: window.location.href
          });
          console.log('🎯 GA4 LOADED - gtag available:', typeof gtag);
        `}
      </Script>
      <Client>{children}</Client>
    </>
  )
}
