import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
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
            <Link href="/">
              <Button variant="outline" className="bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                홈으로 돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Terms of Service Content */}
      <main className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">이용약관</h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                <strong>시행일:</strong> 2025년 8월 6일
                <br />
                <strong>최종 업데이트:</strong> 2025년 8월 6일
              </p>

              <p className="text-slate-700 leading-relaxed mb-8">
                <strong>Jotto</strong>에 오신 것을 환영합니다. 저희 앱을 사용함으로써 다음 이용약관에 동의하게 됩니다.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. 서비스 설명</h2>
                <p className="text-slate-700 leading-relaxed">
                  Jotto는 사용자가 텍스트 콘텐츠를 캡처, 정리, 관리할 수 있는 생산성 도구입니다. 이 서비스는 무료로
                  사용할 수 있으며 결제나 구독이 필요하지 않습니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. 사용자 계정</h2>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Clerk 인증 서비스를 통해 Google로 로그인해야 합니다.</li>
                  <li>귀하의 계정으로 수행되는 모든 활동에 대한 책임이 있습니다.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. 허용 가능한 사용</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Jotto를 사용함으로써 다음 사항을 하지 않기로 동의합니다:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>불법적이거나 유해한 목적으로 서비스 사용</li>
                  <li>서비스를 역공학하거나 방해하려는 시도</li>
                  <li>앱과 상호작용하기 위한 자동화 스크립트 사용</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. 계정 해지</h2>
                <p className="text-slate-700 leading-relaxed">
                  언제든지 계정을 삭제할 수 있습니다. 오용이나 남용이 감지되면 계정을 정지하거나 해지할 권리를
                  보유합니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. 책임 제한</h2>
                <p className="text-slate-700 leading-relaxed">
                  Jotto는 보증 없이 "있는 그대로" 제공됩니다. 앱 사용으로 인한 데이터 손실이나 손해에 대해 책임지지
                  않습니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. 제3자 서비스</h2>
                <p className="text-slate-700 leading-relaxed">
                  저희는 인증을 위해{" "}
                  <a href="https://clerk.dev" className="text-blue-600 hover:text-blue-800 underline">
                    Clerk.dev
                  </a>
                  를 사용합니다. 저희 앱을 사용함으로써 그들의{" "}
                  <a href="https://clerk.dev/legal/terms" className="text-blue-600 hover:text-blue-800 underline">
                    이용약관
                  </a>{" "}
                  및{" "}
                  <a href="https://clerk.dev/legal/privacy" className="text-blue-600 hover:text-blue-800 underline">
                    개인정보처리방침
                  </a>
                  에도 동의하게 됩니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. 약관 변경</h2>
                <p className="text-slate-700 leading-relaxed">
                  향후 이 약관을 업데이트할 수 있습니다. 앱을 계속 사용하는 것은 업데이트된 약관에 대한 동의를
                  의미합니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. 문의</h2>
                <p className="text-slate-700 leading-relaxed mb-4">질문이 있으시면 다음으로 연락해 주세요:</p>
                <div className="bg-slate-50 rounded-lg p-6">
                  <p className="text-slate-700">
                    <strong>이메일:</strong>{" "}
                    <a href="mailto:contact@jotto.in" className="text-blue-600 hover:text-blue-800">
                      contact@jotto.in
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src="/jotto-icon.png" alt="Jotto" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Jotto</div>
                <div className="text-sm text-slate-600">macOS 생산성 도구</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm text-slate-600">문의: contact@jotto.in</div>
              <div className="text-sm text-slate-500">텍스트를 즉시 캡처하고 정리하세요</div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">© 2025 Jotto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
