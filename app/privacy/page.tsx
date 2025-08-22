import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
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

      {/* Privacy Policy Content */}
      <main className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">개인정보처리방침</h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                <strong>시행일:</strong> 2025년 8월 6일
                <br />
                <strong>최종 업데이트:</strong> 2025년 8월 6일
              </p>

              <p className="text-slate-700 leading-relaxed mb-8">
                <strong>Jotto</strong>를 이용해 주셔서 감사합니다. 귀하의 개인정보는 저희에게 중요합니다. 본
                개인정보처리방침은 저희가 정보를 수집, 사용, 보호하는 방법을 설명합니다.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. 수집하는 정보</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Jotto는 자체 서버에 개인식별정보를 수집하거나 저장하지 <strong>않습니다</strong>.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  저희는 제3자 인증 서비스 제공업체로{" "}
                  <a href="https://clerk.dev" className="text-blue-600 hover:text-blue-800 underline">
                    Clerk.dev
                  </a>
                  를 사용합니다. Clerk를 통해 Google로 로그인할 때 다음과 같은 기본 사용자 정보에만 접근합니다:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>이메일 주소</li>
                  <li>표시 이름</li>
                  <li>프로필 이미지 (선택사항)</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  Clerk가 모든 인증을 안전하게 처리하고 계정 데이터를 저장합니다. 저희는 비밀번호에 접근하거나 저장하지
                  않습니다.
                </p>

                <h3 className="text-xl font-medium text-slate-800 mb-3">접근성 권한</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  저희는 애플리케이션 전반에서 선택된 텍스트를 캡처하는 키보드 단축키를 활성화하기 위해서만 접근성
                  권한을 요청합니다. 이 권한은 귀하의 기기에서만 로컬로 사용되며 외부로 데이터를 전송하지 않습니다.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>중요:</strong> 접근성 권한은 다음 용도로만 사용됩니다:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>⌘ + ⇧ + S 키보드 단축키 감지</li>
                  <li>단축키를 눌렀을 때 선택된 텍스트 캡처</li>
                  <li>기타 시스템 모니터링이나 데이터 수집 없음</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  저희는 이 권한을 사용하여 귀하의 활동을 모니터링하거나, 다른 애플리케이션의 데이터에 접근하거나,
                  귀하가 명시적으로 캡처하기로 선택한 텍스트 이외의 정보를 수집하지 않습니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. 정보 사용 방법</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Clerk를 통해 수집된 제한적인 정보는 <strong>오직</strong> 다음 용도로만 사용됩니다:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>로그인한 사용자 식별</li>
                  <li>앱 내에서 개인화된 사용자 경험 제공</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  저희는 마케팅이나 광고 목적으로 귀하의 정보를 사용하지 <strong>않습니다</strong>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. 데이터 공유</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  저희는 귀하의 정보를 제3자와 공유하거나 판매하지 <strong>않습니다</strong>.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  귀하의 데이터는 Jotto 서비스 범위 내에서만 사용되며, Clerk와 같은 신뢰할 수 있는 제공업체를 통해서만
                  처리됩니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. 쿠키 및 추적</h2>
                <p className="text-slate-700 leading-relaxed">
                  Jotto는 Clerk를 통한 인증에 필요한 것 외에는 쿠키나 추적 스크립트를 사용하지 않습니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. 사용자 제어</h2>
                <p className="text-slate-700 leading-relaxed">
                  언제든지 Clerk를 통해 직접 계정을 삭제할 수 있습니다. 계정 삭제 시 Clerk 시스템에서 관련된 모든 인증
                  데이터가 제거됩니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. 보안</h2>
                <p className="text-slate-700 leading-relaxed">
                  인증은 안전한 로그인 및 데이터 보호를 위한 업계 모범 사례를 준수하는 Clerk.dev에서 관리됩니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. 문의</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  본 개인정보처리방침에 대해 질문이 있으시면 다음으로 연락해 주세요:
                </p>
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
