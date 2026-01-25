import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyEN() {
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
            <Link href="/en">
              <Button variant="outline" className="bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                <strong>Effective Date:</strong> August 6, 2025
                <br />
                <strong>Last Updated:</strong> August 6, 2025
              </p>

              <p className="text-slate-700 leading-relaxed mb-8">
                Thank you for using <strong>Jotto</strong>. Your privacy is important to us. This Privacy Policy
                explains how we collect, use, and protect your information.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Jotto does <strong>not</strong> collect or store any personally identifiable information on our own
                  servers.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We use{" "}
                  <a href="https://clerk.dev" className="text-blue-600 hover:text-blue-800 underline">
                    Clerk.dev
                  </a>{" "}
                  as a third-party authentication service provider. When you sign in with Google via Clerk, only the
                  following basic user information is accessed:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>Email address</li>
                  <li>Display name</li>
                  <li>Profile image (optional)</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  Clerk securely handles all authentication and stores your account data. We do not access or store your
                  passwords.
                </p>

                <h3 className="text-xl font-medium text-slate-800 mb-3">Accessibility Permission</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We request Accessibility permission solely to enable the keyboard shortcut for capturing selected text
                  across applications. This permission is only used locally on your device and does not transmit any
                  data externally.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>Important:</strong> The Accessibility permission is used exclusively for:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>Detecting the ⌘ + ⇧ + S keyboard shortcut</li>
                  <li>Capturing selected text when the hotkey is pressed</li>
                  <li>No other system monitoring or data collection</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  We do not use this permission to monitor your activities, access other applications' data, or collect
                  any information beyond the text you explicitly choose to capture.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Information</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The limited information collected via Clerk is used <strong>only</strong> to:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>Identify the logged-in user</li>
                  <li>Provide personalized user experience within the app</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  We <strong>do not</strong> use your information for marketing or advertising purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Data Sharing</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We do <strong>not</strong> share or sell your information to any third party.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Your data is only used within the scope of the Jotto service, and only through trusted providers such
                  as Clerk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Cookies and Tracking</h2>
                <p className="text-slate-700 leading-relaxed">
                  Jotto does not use cookies or tracking scripts outside of what is required for authentication via
                  Clerk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. User Control</h2>
                <p className="text-slate-700 leading-relaxed">
                  You can delete your account directly via Clerk at any time. Account deletion will remove all
                  associated authentication data from Clerk's system.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Security</h2>
                <p className="text-slate-700 leading-relaxed">
                  Authentication is managed by Clerk.dev, which adheres to industry best practices for secure sign-in
                  and data protection.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Contact</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-slate-50 rounded-lg p-6">
                  <p className="text-slate-700">
                    <strong>Email:</strong>{" "}
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
