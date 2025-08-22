"use client"

import { Download, ArrowDown } from "lucide-react"
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

export default function JottoLandingEN() {
  // 컴포넌트 마운트 시 GA4 상태 확인
  useEffect(() => {
    const checkGA4Status = () => {
      console.log("🔍 GA4 Final Status (EN):")
      console.log("- window.gtag:", typeof window.gtag)
      console.log("- window.dataLayer:", Array.isArray(window.dataLayer))

      if (window.gtag) {
        window.gtag("event", "page_loaded_test_en", {
          event_category: "test",
          event_label: "page_load_en",
        })
        console.log("✅ Test GA4 event sent (EN)")
      }
    }

    setTimeout(checkGA4Status, 3000)
  }, [])

  // 새로운 GA4 이벤트 전송 함수
  const sendGA4Event = (eventName: string, parameters: any = {}) => {
    console.log(`🎯 GA4 Event (EN): ${eventName}`)

    if (typeof window !== "undefined" && window.gtag) {
      try {
        window.gtag("event", eventName, {
          ...parameters,
          send_to: "G-QLXF3L16ME",
        })
        console.log(`✅ GA4 SUCCESS (EN): ${eventName}`, parameters)
      } catch (error) {
        console.error(`❌ GA4 ERROR (EN): ${eventName}`, error)
      }
    } else {
      console.warn(`❌ GA4 NOT READY (EN): ${eventName}`)
    }
  }

  const handleMacDownload = () => {
    console.log("🖱️ Mac download button clicked (EN)")

    // Vercel Analytics
    track("download_mac_hero_en")
    console.log("📊 Vercel Analytics: download_mac_hero_en")

    // GA4
    sendGA4Event("download_click", {
      event_category: "download",
      event_label: "mac_hero_en",
      value: 1,
    })
  }

  const handleWindowsWaitlist = () => {
    console.log("🖱️ Windows waitlist button clicked (EN)")

    // Vercel Analytics
    track("join_windows_waitlist_en")
    console.log("📊 Vercel Analytics: join_windows_waitlist_en")

    // GA4
    sendGA4Event("waitlist_join", {
      event_category: "waitlist",
      event_label: "windows_hero_en",
      value: 1,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src="/jotto-icon.png" alt="Jotto" className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold text-xl text-slate-900">Jotto</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
                한국어
              </Link>
              <a href="/api/download" onClick={handleMacDownload}>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Clear your mind,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              save your thoughts
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Just press one shortcut anywhere in Slack, Chrome, or Notion
            <br />
            From scheduling to memo organization becomes easy and convenient
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="/api/download" onClick={handleMacDownload}>
              <button className="group relative inline-flex items-center justify-center px-6 py-3 bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-slate-900">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.81.87.78 0 2.26-1.07 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-white">Download for Mac</div>
                  </div>
                </div>
              </button>
            </a>

            <a
              href="https://tally.so/r/mY6BJJ"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWindowsWaitlist}
            >
              <button className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-slate-800">
                      <path d="M0 0h11v11H0zm13 0h11v11H13zM0 13h11v11H0zm13 0h11v11H13z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-slate-800">Join Windows waitlist</div>
                  </div>
                </div>
              </button>
            </a>
          </div>

          {/* Hero Video */}
          <div className="mb-6 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                <video className="w-full max-w-2xl rounded-xl shadow-lg" autoPlay loop muted playsInline preload="auto">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jotto-hero1-Yje0Vk1QhaIWuqEnnqdRP5kkkNffeG.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="text-sm text-slate-500">macOS 12+ | Free Download</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple Workflow</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Save and organize in just two steps, no complex setup required
            </p>
          </div>

          <div className="space-y-32">
            {/* Step 1 */}
            <div className="relative">
              {/* Step indicator */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="text-sm font-medium text-blue-600 uppercase tracking-wider">Step 01</div>
                  <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="lg:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    Drag anywhere
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      you want
                    </span>
                  </h3>
                  <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                    <p>
                      From Slack, Discord, Chrome, anywhere you want
                      <br />
                      Just drag and press the shortcut once to save conversations or text as is.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                      <span className="text-blue-700 font-semibold">Clear your mind and leave memories to Jotto</span>
                    </div>
                  </div>
                </div>

                <div className="lg:order-2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/50">
                      <video className="w-full rounded-xl shadow-lg" autoPlay loop muted playsInline>
                        <source
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jotto-guide-everywhere-edit-bqBaYl0uUA3DcRaUuARDImRoJyQ70o.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection line */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-4">
                <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />
                <div className="w-px h-16 bg-gradient-to-b from-slate-300 to-transparent"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              {/* Step indicator */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="text-sm font-medium text-purple-600 uppercase tracking-wider">Step 02</div>
                  <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="lg:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    When you have time
                    <br />
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      organize it
                    </span>
                  </h3>
                  <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                    <p>
                      Look at the saved context and organize into To-dos, Calendar, and Memos
                      <br />
                      all at once
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                      <span className="text-purple-700 font-semibold">Fast, easy, and convenient</span>
                    </div>
                  </div>
                </div>

                <div className="lg:order-1">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/50">
                      <video className="w-full rounded-xl shadow-lg" autoPlay loop muted playsInline>
                        <source
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jotto-guide-draginjotto-edit-eFpJ8nR3KxsUs0XXF97J5YFpTRffOE.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to clear your mind?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already getting smarter with Jotto.
          </p>
          <a
            href="/api/download"
            onClick={() => {
              console.log("🖱️ Mac download CTA button clicked (EN)")

              // Vercel Analytics
              track("download_mac_cta_en")
              console.log("📊 Vercel Analytics: download_mac_cta_en")

              // GA4
              sendGA4Event("download_click", {
                event_category: "download",
                event_label: "mac_cta_en",
                value: 1,
              })
            }}
          >
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download Jotto
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src="/jotto-icon.png" alt="Jotto" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Jotto</div>
                <div className="text-sm text-slate-600">macOS productivity tool</div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              © 2025 Jotto. All rights reserved. • Contact: contact@jotto.in •
              <a href="/en/privacy" className="hover:text-slate-700 ml-1">
                Privacy Policy
              </a>
              {" • "}
              <a href="/en/terms" className="hover:text-slate-700">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
