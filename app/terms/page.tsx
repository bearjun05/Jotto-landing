import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
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
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Terms of Service Content */}
      <main className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                <strong>Effective Date:</strong> August 6, 2025<br />
                <strong>Last Updated:</strong> August 6, 2025
              </p>

              <p className="text-slate-700 leading-relaxed mb-8">
                Welcome to <strong>Jotto</strong>. By using our app, you agree to the following terms and conditions.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Description of Service</h2>
                <p className="text-slate-700 leading-relaxed">
                  Jotto is a productivity tool that allows users to capture, organize, and manage text content. The service is free to use and does not require any payment or subscription.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. User Account</h2>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>You must sign in using Google via Clerk authentication service.</li>
                  <li>You are responsible for any activity conducted under your account.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Acceptable Use</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  By using Jotto, you agree not to:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Use the service for unlawful or harmful purposes</li>
                  <li>Attempt to reverse-engineer or disrupt the service</li>
                  <li>Use automated scripts to interact with the app</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Account Termination</h2>
                <p className="text-slate-700 leading-relaxed">
                  You may delete your account at any time. We reserve the right to suspend or terminate your account if we detect misuse or abuse.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Limitation of Liability</h2>
                <p className="text-slate-700 leading-relaxed">
                  Jotto is provided "as-is" without warranties. We are not liable for any loss of data or damage arising from the use of the app.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Third-Party Services</h2>
                <p className="text-slate-700 leading-relaxed">
                  We use <a href="https://clerk.dev" className="text-blue-600 hover:text-blue-800 underline">Clerk.dev</a> for authentication. By using our app, you also agree to their{" "}
                  <a href="https://clerk.dev/legal/terms" className="text-blue-600 hover:text-blue-800 underline">Terms of Service</a> and{" "}
                  <a href="https://clerk.dev/legal/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Changes to Terms</h2>
                <p className="text-slate-700 leading-relaxed">
                  We may update these terms in the future. Continued use of the app constitutes your acceptance of the updated terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Contact</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions, please contact:
                </p>
                <div className="bg-slate-50 rounded-lg p-6">
                  <p className="text-slate-700">
                    <strong>Email:</strong> <a href="mailto:contact@jotto.in" className="text-blue-600 hover:text-blue-800">contact@jotto.in</a>
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
                <div className="text-sm text-slate-600">macOS productivity tool</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm text-slate-600">Contact: contact@jotto.in</div>
              <div className="text-sm text-slate-500">Capture and organize text instantly</div>
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
