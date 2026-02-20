"use client"

import { useState, useEffect } from "react"
import { Check, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePaddle } from "@/components/providers/paddle-provider"
import { useSearchParams } from "next/navigation"
import { track } from "@vercel/analytics"

// 가격 정보 (환경변수에서 Price ID 가져옴)
const PRICES = {
  monthly: {
    id: process.env.NEXT_PUBLIC_PADDLE_PRICE_MONTHLY || "",
    amount: 2.99,
    period: "월",
    label: "월간",
  },
  yearly: {
    id: process.env.NEXT_PUBLIC_PADDLE_PRICE_YEARLY || "",
    amount: 24.0,
    period: "년",
    label: "연간",
    savings: "33% 할인",
  },
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly")
  const [showSuccess, setShowSuccess] = useState(false)
  const { isLoaded, openCheckout } = usePaddle()
  const searchParams = useSearchParams()

  // 결제 성공 시 처리
  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setShowSuccess(true)
      track("purchase_complete", { plan: billingCycle })
    }
  }, [searchParams, billingCycle])

  const currentPrice = PRICES[billingCycle]
  const monthlyEquivalent = billingCycle === "yearly" ? (24.0 / 12).toFixed(2) : currentPrice.amount.toFixed(2)

  const handleSubscribe = () => {
    if (!isLoaded) {
      console.warn("⚠️ Paddle not loaded yet")
      return
    }

    track("checkout_started", { plan: billingCycle })
    openCheckout(currentPrice.id, {
      plan: billingCycle,
    })
  }

  const features = [
    "무제한 AI 텍스트 분류",
    "무제한 AI 요약 기능",
    "Google 캘린더 연동",
    "우선 고객 지원",
    "신규 기능 우선 접근",
  ]

  const freeFeatures = ["기본 텍스트 캡처", "To-do 관리", "메모 저장", "AI 기능 30회/월"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src="/jotto-icon.png" alt="Jotto" className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold text-xl text-slate-900">Jotto</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/en/pricing" className="text-sm text-slate-600 hover:text-slate-900">
                English
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border-b border-green-200">
          <div className="container mx-auto px-6 py-4 text-center">
            <p className="text-green-800 font-medium">
              🎉 결제가 완료되었습니다! Pro 기능을 이용해보세요.
            </p>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            더 스마트하게,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              더 생산적으로
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            AI 기능을 무제한으로 사용하고, 캘린더 연동으로 생산성을 극대화하세요.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full p-1 mb-12">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              월간
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              연간
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">33% 할인</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
                <p className="text-slate-600">기본 기능으로 시작하기</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">$0</span>
                  <span className="text-slate-600">/월</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/api/download">
                <Button variant="outline" className="w-full" size="lg">
                  무료로 시작하기
                </Button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                  <Sparkles className="w-4 h-4" />
                  추천
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  Pro
                  <Zap className="w-5 h-5 text-yellow-400" />
                </h3>
                <p className="text-slate-400">모든 기능을 무제한으로</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${currentPrice.amount}</span>
                  <span className="text-slate-400">/{currentPrice.period}</span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="text-sm text-slate-400 mt-1">월 ${monthlyEquivalent}로 계산됨</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-200">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleSubscribe}
                disabled={!isLoaded}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                size="lg"
              >
                {isLoaded ? `${currentPrice.label} 구독 시작` : "로딩 중..."}
              </Button>

              <p className="text-center text-xs text-slate-500 mt-4">언제든지 취소 가능</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">자주 묻는 질문</h2>

          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">결제는 어떻게 처리되나요?</h3>
              <p className="text-slate-600">
                Paddle을 통해 안전하게 결제됩니다. 신용카드, PayPal 등 다양한 결제 수단을 지원합니다.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">환불이 가능한가요?</h3>
              <p className="text-slate-600">
                구독 후 7일 이내에 요청하시면 전액 환불해 드립니다.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">구독 취소는 어떻게 하나요?</h3>
              <p className="text-slate-600">
                언제든지 취소할 수 있으며, 결제 주기가 끝날 때까지 Pro 기능을 계속 사용할 수 있습니다.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Free 플랜에서 Pro로 업그레이드하면?</h3>
              <p className="text-slate-600">
                기존 데이터는 그대로 유지되며, 즉시 Pro 기능을 사용할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src="/jotto-icon.png" alt="Jotto" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Jotto</div>
                <div className="text-sm text-slate-600">macOS 생산성 도구</div>
              </div>
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              © 2026 Jotto. All rights reserved. • 문의: contact@jotto.in •
              <a href="/privacy" className="hover:text-slate-700 ml-1">
                개인정보처리방침
              </a>
              {" • "}
              <a href="/terms" className="hover:text-slate-700">
                이용약관
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
