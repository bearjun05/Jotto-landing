import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "P들을 위한 AI 일정관리앱 | Jotto",
  description:
    "텍스트 통째로 드래그해서 단축키만 누르세요. AI가 알아서 일정을 등록해줍니다. 읽고-입력하는 일정관리를 끝내는 가장 쉬운 방법.",
  metadataBase: new URL("https://p.jotto.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "P들을 위한 AI 일정관리앱 | Jotto",
    description:
      "텍스트 통째로 드래그해서 단축키만 누르세요. AI가 알아서 일정을 등록해줍니다.",
    url: "https://p.jotto.in",
    siteName: "Jotto",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/jotto-icon.png",
        width: 1200,
        height: 630,
        alt: "P들을 위한 AI 일정관리앱 | Jotto",
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

