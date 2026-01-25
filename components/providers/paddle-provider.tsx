"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// Paddle 타입 정의
declare global {
  interface Window {
    Paddle?: {
      Initialize: (options: { token: string; environment?: "sandbox" | "production" }) => void
      Checkout: {
        open: (options: {
          items: Array<{ priceId: string; quantity?: number }>
          customer?: { email?: string }
          customData?: Record<string, string>
          settings?: {
            displayMode?: "overlay" | "inline"
            theme?: "light" | "dark"
            locale?: string
            successUrl?: string
          }
        }) => void
      }
      Environment: {
        set: (env: "sandbox" | "production") => void
      }
    }
  }
}

interface PaddleContextType {
  isLoaded: boolean
  openCheckout: (priceId: string, customData?: Record<string, string>, email?: string) => void
}

const PaddleContext = createContext<PaddleContextType>({
  isLoaded: false,
  openCheckout: () => {},
})

export function usePaddle() {
  return useContext(PaddleContext)
}

interface PaddleProviderProps {
  children: ReactNode
}

export function PaddleProvider({ children }: PaddleProviderProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 이미 로드되었으면 스킵
    if (window.Paddle) {
      setIsLoaded(true)
      return
    }

    // Paddle.js 스크립트 로드
    const script = document.createElement("script")
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js"
    script.async = true

    script.onload = () => {
      const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN
      const environment = (process.env.NEXT_PUBLIC_PADDLE_ENV as "sandbox" | "production") || "sandbox"

      if (clientToken && window.Paddle) {
        try {
          window.Paddle.Initialize({
            token: clientToken,
            environment,
          })
          console.log("✅ Paddle initialized:", environment)
          setIsLoaded(true)
        } catch (error) {
          console.error("❌ Paddle initialization error:", error)
        }
      } else {
        console.warn("⚠️ Paddle client token not found")
      }
    }

    script.onerror = () => {
      console.error("❌ Failed to load Paddle.js")
    }

    document.head.appendChild(script)

    return () => {
      // 클린업: 스크립트 제거하지 않음 (한 번 로드되면 유지)
    }
  }, [])

  const openCheckout = (priceId: string, customData?: Record<string, string>, email?: string) => {
    if (!window.Paddle) {
      console.error("❌ Paddle not loaded")
      return
    }

    try {
      window.Paddle.Checkout.open({
        items: [{ priceId, quantity: 1 }],
        customer: email ? { email } : undefined,
        customData,
        settings: {
          displayMode: "overlay",
          theme: "light",
          locale: "ko",
          successUrl: `${window.location.origin}/pricing?success=true`,
        },
      })
      console.log("🛒 Paddle checkout opened for:", priceId)
    } catch (error) {
      console.error("❌ Paddle checkout error:", error)
    }
  }

  return (
    <PaddleContext.Provider value={{ isLoaded, openCheckout }}>
      {children}
    </PaddleContext.Provider>
  )
}
