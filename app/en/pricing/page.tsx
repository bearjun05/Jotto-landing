"use client"

import { useState, useEffect } from "react"
import { Check, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePaddle } from "@/components/providers/paddle-provider"
import { useSearchParams } from "next/navigation"
import { track } from "@vercel/analytics"

// Price info (Price IDs from environment variables)
const PRICES = {
  monthly: {
    id: process.env.NEXT_PUBLIC_PADDLE_PRICE_MONTHLY || "",
    amount: 2.99,
    period: "mo",
    label: "Monthly",
  },
  yearly: {
    id: process.env.NEXT_PUBLIC_PADDLE_PRICE_YEARLY || "",
    amount: 24.0,
    period: "yr",
    label: "Yearly",
    savings: "Save 33%",
  },
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly")
  const [showSuccess, setShowSuccess] = useState(false)
  const { isLoaded, openCheckout } = usePaddle()
  const searchParams = useSearchParams()

  // Handle payment success
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
    "Unlimited AI text classification",
    "Unlimited AI summarization",
    "Google Calendar integration",
    "Priority support",
    "Early access to new features",
  ]

  const freeFeatures = ["Basic text capture", "To-do management", "Note storage", "30 AI calls/month"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/en" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src="/jotto-icon.png" alt="Jotto" className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold text-xl text-slate-900">Jotto</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/pricing" className="text-sm text-slate-600 hover:text-slate-900">
                한국어
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
              🎉 Payment successful! Enjoy your Pro features.
            </p>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Work Smarter,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Be More Productive
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Unlock unlimited AI features and calendar integration to maximize your productivity.
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
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Yearly
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Save 33%</span>
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
                <p className="text-slate-600">Get started with basic features</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">$0</span>
                  <span className="text-slate-600">/mo</span>
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
                  Start for Free
                </Button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                  <Sparkles className="w-4 h-4" />
                  Recommended
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  Pro
                  <Zap className="w-5 h-5 text-yellow-400" />
                </h3>
                <p className="text-slate-400">Unlimited access to all features</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${currentPrice.amount}</span>
                  <span className="text-slate-400">/{currentPrice.period}</span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="text-sm text-slate-400 mt-1">${monthlyEquivalent}/mo when billed annually</p>
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
                {isLoaded ? `Start ${currentPrice.label} Plan` : "Loading..."}
              </Button>

              <p className="text-center text-xs text-slate-500 mt-4">Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How is payment processed?</h3>
              <p className="text-slate-600">
                Payments are securely processed through Paddle. We support credit cards, PayPal, and more.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I get a refund?</h3>
              <p className="text-slate-600">
                Yes, we offer a full refund within 7 days of purchase.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How do I cancel my subscription?</h3>
              <p className="text-slate-600">
                You can cancel anytime, and you&apos;ll continue to have Pro access until the end of your billing period.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">What happens when I upgrade from Free to Pro?</h3>
              <p className="text-slate-600">
                Your existing data is preserved, and you&apos;ll get immediate access to all Pro features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-6">
            <Link href="/en" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src="/jotto-icon.png" alt="Jotto" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Jotto</div>
                <div className="text-sm text-slate-600">macOS Productivity Tool</div>
              </div>
            </Link>
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
