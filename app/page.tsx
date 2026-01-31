"use client"

import { Download, Sparkles, CheckCircle2, Mic, Calendar, Brain, ArrowRight, Users, Code, Megaphone, Shield, HardDrive } from "lucide-react"
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

export default function JottoLanding() {
  useEffect(() => {
    const checkGA4Status = () => {
      if (window.gtag) {
        window.gtag("event", "page_loaded_test", {
          event_category: "test",
          event_label: "page_load",
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

  const handleMacDownload = () => {
    track("download_mac_hero")
    sendGA4Event("download_click", {
      event_category: "download",
      event_label: "mac_hero",
      value: 1,
    })
  }

  const handleWindowsWaitlist = () => {
    track("join_windows_waitlist")
    sendGA4Event("waitlist_join", {
      event_category: "waitlist",
      event_label: "windows_hero",
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
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-blue-300 border border-blue-500/30">
                <Sparkles className="w-3 h-3" />
                AI Powered
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/en" className="text-sm text-slate-400 hover:text-white transition-colors">
                English
              </Link>
              <a href="/api/download" onClick={handleMacDownload}>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-purple-500/25">
                  <Download className="w-4 h-4 mr-2" />
                  다운로드
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 px-6">
        {/* Aurora Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] animate-aurora"></div>
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-aurora" style={{ animationDelay: '-5s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px] animate-aurora" style={{ animationDelay: '-10s' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-slate-300">AI가 자동으로 정리해드려요</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">드래그만 하세요</span>
                <br />
                <span className="text-gradient">나머진 AI가</span>
                <br />
                <span className="text-gradient">알아서 할게요</span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Slack, Notion, mail, 웹사이트 어디서든
                <br />
                드래그만 하면 AI가 자동으로 <span className="text-white font-medium">할 일</span>, <span className="text-white font-medium">일정</span>, <span className="text-white font-medium">메모</span>로 저장해줘요
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/api/download" onClick={handleMacDownload}>
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
                  onClick={handleWindowsWaitlist}
                >
                  <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 rounded-2xl font-semibold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        <path d="M0 0h11v11H0zm13 0h11v11H13zM0 13h11v11H0zm13 0h11v11H13z" />
                      </svg>
                      <span>웨이트리스트 등록하기</span>
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
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-glow-pulse"></div>
                
                {/* Video container */}
                <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                  <video 
                    className="w-full rounded-xl shadow-2xl" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="auto"
                  >
                    <source src="/calendarAI.mp4" type="video/mp4" />
                    브라우저가 비디오를 지원하지 않습니다.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Capture AI */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                <video 
                  className="w-full rounded-xl shadow-2xl" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/captureAI.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/30 mb-6">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">스마트 할일 관리</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                업무 요청?
                <br />
                <span className="text-gradient">AI가 할일로 만들어드려요</span>
              </h2>
              
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Slack, Discord, 이메일 어디서든
                <br />
                드래그하면 AI가 맥락을 파악해
                <br />
                자동으로 할일 목록에 추가합니다
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">맥락 인식 AI</div>
                    <div className="text-sm text-slate-400">대화 내용을 파악해 자동 분류</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">원클릭 할일 추가</div>
                    <div className="text-sm text-slate-400">드래그 한 번으로 끝</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Meeting AI */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 rounded-full border border-purple-500/30 mb-6">
                <Mic className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">미팅 AI</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                회의는 집중만,
                <br />
                <span className="text-gradient">정리는 AI가</span>
              </h2>
              
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                미팅을 녹음하면 AI가 자동으로 요약하고
                <br />
                후속 일정과 할일을 제안합니다
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">원클릭 녹음</div>
                    <div className="text-sm text-slate-400">버튼 하나로 미팅 녹음 시작</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">AI 자동 요약</div>
                    <div className="text-sm text-slate-400">핵심 내용만 깔끔하게 정리</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">스마트 일정 제안</div>
                    <div className="text-sm text-slate-400">후속 미팅, 마감일 자동 제안</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video */}
            <div className="lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                <video 
                  className="w-full rounded-xl shadow-2xl" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/meeting_jotto.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              이런 분들이 <span className="text-gradient">Jotto</span>를 사용합니다
            </h2>
            <p className="text-xl text-slate-400">매일 반복되는 정리 업무, AI에게 맡기세요</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* PM/기획자 */}
            <div className="group p-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">PM / 기획자</h3>
              <p className="text-slate-400 leading-relaxed">
                "회의 중 나온 액션 아이템을 놓치지 않아요. AI가 알아서 할일로 정리해줘요"
              </p>
            </div>

            {/* 개발자 */}
            <div className="group p-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">개발자</h3>
              <p className="text-slate-400 leading-relaxed">
                "코드리뷰 피드백을 바로 할일로 변환해요. 슬랙 알림도 놓치지 않아요"
              </p>
            </div>

            {/* 마케터 */}
            <div className="group p-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/25">
                <Megaphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">마케터</h3>
              <p className="text-slate-400 leading-relaxed">
                "슬랙에서 받은 요청을 캘린더로 바로 등록해요. 마감일 관리가 쉬워졌어요"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/30 mb-6">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">완벽한 프라이버시</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              당신의 생각은{" "}
              <span className="text-gradient">당신만의 것</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              모든 데이터는 오직 당신의 기기에서만 처리됩니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Local Storage */}
            <div className="group p-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
                <HardDrive className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">로컬 스토리지</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                모든 메모, 할 일, 개인 데이터가{" "}
                <span className="text-emerald-400 font-medium">오직 당신의 기기에만</span> 저장됩니다.
                서버로 전송되는 데이터가 없습니다.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                클라우드 업로드 없음
              </div>
            </div>

            {/* Local Speech Recognition */}
            <div className="group p-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-teal-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/25">
                <Mic className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">로컬 음성인식</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                음성인식 AI 모델이{" "}
                <span className="text-teal-400 font-medium">기기 내에서 직접 실행</span>됩니다.
                음성 데이터가 외부로 전송되지 않습니다.
              </p>
              <div className="flex items-center gap-2 text-teal-400 text-sm font-medium">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                100% 오프라인 처리
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Google Calendar Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/30 mb-6">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">캘린더 연동</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                구글 캘린더와
                <br />
                <span className="text-gradient">완벽 연동</span>
              </h2>
              
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                저장한 내용을 바로 구글 캘린더에 일정으로 추가하세요
                <br />
                캘린더 확인도 Jotto에서 한눈에 가능합니다
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-slate-300">양방향 실시간 동기화</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-slate-300">드래그한 내용에서 일정 자동 추출</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-slate-300">오늘/이번 주 일정 빠른 확인</span>
                </div>
              </div>
            </div>

            {/* Calendar Preview Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="bg-slate-800/50 rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="font-semibold text-white">오늘의 일정</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full">
                      <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <span className="text-[8px] font-bold text-white">G</span>
                      </div>
                      <span className="text-xs text-slate-400">연동됨</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="w-1 h-12 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium text-white">팀 미팅</div>
                        <div className="text-sm text-slate-400">오전 10:00 - 11:00</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                      <div className="w-1 h-12 bg-emerald-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium text-white">프로젝트 리뷰</div>
                        <div className="text-sm text-slate-400">오후 2:00 - 3:00</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <div className="w-1 h-12 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium text-white">1:1 미팅</div>
                        <div className="text-sm text-slate-400">오후 4:30 - 5:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            일정과 생각,
            <br />
            <span className="text-gradient">더 이상 머리속에 저장하지 마세요</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            지금 바로 Jotto를 시작하고, AI에게 정리를 맡기세요
          </p>
          
          <a
            href="/api/download"
            onClick={() => {
              track("download_mac_cta")
              sendGA4Event("download_click", {
                event_category: "download",
                event_label: "mac_cta",
                value: 1,
              })
            }}
          >
            <button className="group relative inline-flex items-center justify-center px-10 py-5 bg-white rounded-2xl font-bold text-xl text-slate-900 shadow-2xl shadow-white/20 hover:shadow-white/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <Download className="w-6 h-6" />
                <span>Jotto 무료 다운로드</span>
              </div>
            </button>
          </a>
          
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
                <div className="text-sm text-slate-500">AI 기반 macOS 생산성 도구</div>
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
