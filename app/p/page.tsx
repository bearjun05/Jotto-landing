"use client"

import { Download, Sparkles, CheckCircle2, Mic, Calendar, Brain, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { track } from "@vercel/analytics"
import { useEffect } from "react"

// GA4 전역 타입 선언
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function PJottoLanding() {
  useEffect(() => {
    const checkGA4Status = () => {
      if (window.gtag) {
        window.gtag("event", "p_page_loaded_test", {
          event_category: "test",
          event_label: "p_page_load",
        })
      }
    }
    setTimeout(checkGA4Status, 3000)
  }, [])

  const sendGA4Event = (eventName: string, parameters: any = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      try {
        window.gtag("event", eventName, {
          ...parameters,
          send_to: "G-QLXF3L16ME",
        })
      } catch (error) {
        console.error(`GA4 ERROR: ${eventName}`, error)
      }
    }
  }

  const handleMacDownload = (where: string) => {
    track(`download_mac_${where}`)
    sendGA4Event("download_click", {
      event_category: "download",
      event_label: `mac_${where}`,
      value: 1,
    })
  }

  const handleWindowsWaitlist = (where: string) => {
    track(`join_windows_waitlist_${where}`)
    sendGA4Event("waitlist_join", {
      event_category: "waitlist",
      event_label: `windows_${where}`,
      value: 1,
    })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden ring-2 ring-white/10">
                <img src="/jotto-icon.png" alt="Jotto" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl">Jotto</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="/api/download" onClick={() => handleMacDownload("p_header")}>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-purple-500/25">
                  <Download className="w-4 h-4 mr-2" />
                  다운로드
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 px-6">
        {/* Aurora Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] animate-aurora"></div>
          <div
            className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-aurora"
            style={{ animationDelay: "-5s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px] animate-aurora"
            style={{ animationDelay: "-10s" }}
          ></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">P들을 위한</span>
                <br />
                <span className="text-gradient">AI 일정관리앱</span>
              </h1>

              <p className="text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                어디에서나 통째로 드래그하면
                <br />
                AI가 알아서 일정으로 등록해줘요
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/api/download" onClick={() => handleMacDownload("p_hero")}>
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative flex items-center gap-3">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <span>Mac에서 무료로 시작하기</span>
                    </div>
                  </button>
                </a>

                <a
                  href="https://tally.so/r/mY6BJJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWindowsWaitlist("p_hero")}
                >
                  <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 rounded-2xl font-semibold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        <path d="M0 0h11v11H0zm13 0h11v11H13zM0 13h11v11H0zm13 0h11v11H13z" />
                      </svg>
                      <span>Windows 웨이트리스트</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </a>
              </div>

              <p className="text-sm text-slate-500 mt-6">macOS 12+ | Apple Silicon (M1/M2/M3/M4) | 무료</p>
            </div>

            {/* Right: Hero Video */}
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-glow-pulse"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                  <video className="w-full rounded-xl shadow-2xl" autoPlay loop muted playsInline preload="auto">
                    <source src="/calendarAI.mp4" type="video/mp4" />
                    브라우저가 비디오를 지원하지 않습니다.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Slack -> Todo */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                <video className="w-full rounded-xl shadow-2xl" autoPlay loop muted playsInline>
                  <source src="/captureAI.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                슬랙에서 받은 요청도
                <br />
                <span className="text-gradient">드래그하면 할 일이 돼요</span>
              </h2>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                “이거 오늘 중으로 부탁해요” 같은 요청,
                <br />
                통째로 드래그하고 단축키만 누르세요.
                <br />
                AI가 맥락을 정리해 <span className="text-white font-medium">할 일</span>로 만들어줘요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Meeting */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                미팅은 집중만, <span className="text-gradient">정리는 AI가</span>
              </h2>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                녹음만 켜두면 AI가 알아서 요약하고
                <br />
                일정도 자동 추출해서 바로 추가할 수 있어요
              </p>
            </div>

            <div className="lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                <video className="w-full rounded-xl shadow-2xl" autoPlay loop muted playsInline>
                  <source src="/meeting_jotto.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              갑자기 일정 생기면…
              <br />
              <span className="text-gradient">보통 여기서 멈춥니다</span>
            </h2>
            <p className="text-xl text-slate-400">일정 관리가 어려운 게 아니라, “일정 입력”이 귀찮은 거죠.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="text-sm text-slate-400 mb-2">1)</div>
              <div className="font-semibold text-white mb-2">읽고</div>
              <div className="text-slate-400">문장 속 날짜/시간을 머릿속에서 해석</div>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="text-sm text-slate-400 mb-2">2)</div>
              <div className="font-semibold text-white mb-2">캘린더 앱 켜고</div>
              <div className="text-slate-400">입력하려고 앱을 켰는데 이미 집중이 깨짐</div>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="text-sm text-slate-400 mb-2">3)</div>
              <div className="font-semibold text-white mb-2">제목/날짜 설정하고</div>
              <div className="text-slate-400">결국 “나중에…” 하다가 누락</div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">JOTTO는 입력을 없애고, 변환만 남깁니다</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 rounded-full border border-purple-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">사용법은 한 가지</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                텍스트 통째로 드래그해서
                <br />
                <span className="text-gradient">단축키만 누르세요</span>
              </h2>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                날짜/시간이 문장 속에 섞여 있어도 괜찮아요.
                <br />
                AI가 알아서 뽑아서 <span className="text-white font-medium">일정</span>으로 만들어요.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Step 1. 통째로 드래그</div>
                    <div className="text-sm text-slate-400">메시지/웹/메일에서 일정 문장 그대로</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Step 2. 단축키 한 번</div>
                    <div className="text-sm text-slate-400">입력 없이 “변환”만 실행</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Step 3. 일정 생성</div>
                    <div className="text-sm text-slate-400">AI가 제목/시간을 정리해서 등록</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-sm text-slate-400 mb-3">요약</div>
                <div className="text-2xl font-bold mb-5">“입력”을 삭제했어요</div>
                <div className="space-y-3 text-slate-300 leading-relaxed">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-sm text-slate-400 mb-1">이전</div>
                    <div>캘린더 열고 → 제목 입력 → 날짜 선택 → 시간 선택 → 생성</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-xl border border-blue-500/25">
                    <div className="text-sm text-blue-200/80 mb-1">이제</div>
                    <div className="text-white font-semibold">통째로 드래그 + 단축키 → AI가 일정 생성</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target fit */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              이런 분들에게 <span className="text-gradient">딱 맞아요</span>
            </h2>
            <p className="text-xl text-slate-400">“등록”을 없애고 “기록”만 남기면, 일정관리가 달라집니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover-lift">
              <div className="font-bold text-white text-xl mb-3">등록 단계에서 멈추는 분</div>
              <p className="text-slate-400 leading-relaxed">캘린더 열기부터 귀찮아서 결국 누락되는 일정이 많다면</p>
            </div>
            <div className="group p-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover-lift">
              <div className="font-bold text-white text-xl mb-3">텍스트로 일정이 쏟아지는 분</div>
              <p className="text-slate-400 leading-relaxed">웹/슬랙/메일에 흩어진 일정 문장을 한 번에 정리하고 싶다면</p>
            </div>
            <div className="group p-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover-lift">
              <div className="font-bold text-white text-xl mb-3">일단 모아두는 분</div>
              <p className="text-slate-400 leading-relaxed">지금은 기록만, 정리는 AI에게 맡기고 싶다면</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            읽고 입력하는 일정관리,
            <br />
            <span className="text-gradient">이제 그만</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            통째로 드래그 + 단축키 한 번.
            <br />
            AI가 알아서 일정/할 일을 만들어드립니다.
          </p>

          <a href="/api/download" onClick={() => handleMacDownload("p_cta")}>
            <button className="group relative inline-flex items-center justify-center px-10 py-5 bg-white rounded-2xl font-bold text-xl text-slate-900 shadow-2xl shadow-white/20 hover:shadow-white/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <Download className="w-6 h-6" />
                <span>Jotto 무료 다운로드</span>
              </div>
            </button>
          </a>

          <div className="mt-6 flex justify-center">
            <a
              href="https://tally.so/r/mY6BJJ"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWindowsWaitlist("p_cta")}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Windows 웨이트리스트 등록하기 →
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-6">macOS 12+ | Apple Silicon (M1/M2/M3/M4) 전용</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src="/jotto-icon.png" alt="Jotto" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold text-white">Jotto</div>
                <div className="text-sm text-slate-500">P들을 위한 AI 일정 변환 도구</div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-slate-500">
              © 2025 Jotto. All rights reserved. • 문의: contact@jotto.in •{" "}
              <a href="/privacy" className="hover:text-white transition-colors">
                개인정보처리방침
              </a>
              {" • "}
              <a href="/terms" className="hover:text-white transition-colors">
                이용약관
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

