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
              <p className="text-lg text-slate-600 mb-8">Last updated: December 2024</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Introduction</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Welcome to Jotto. This Privacy Policy explains how we collect, use, and protect your information when
                  you use our application.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Jotto is designed with privacy in mind. We believe your data should remain yours, and we've built our
                  app to reflect this principle.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>
                <h3 className="text-xl font-medium text-slate-800 mb-3">Text Content</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When you use Jotto to capture text using the ⌘ + ⇧ + S shortcut, this text is stored locally on your
                  device. We do not transmit, store, or access this content on our servers.
                </p>

                <h3 className="text-xl font-medium text-slate-800 mb-3">Usage Analytics</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may collect basic usage analytics to help improve the app, such as:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>How often the app is used</li>
                  <li>Which features are most popular</li>
                  <li>Basic system information (macOS version, app version)</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  This data is anonymized and cannot be used to identify you personally.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Your captured text content is used solely for the purpose of providing Jotto's functionality:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>Storing your captured text locally on your device</li>
                  <li>Allowing you to organize text into To-dos, Calendar events, or Memos</li>
                  <li>Providing search and filtering capabilities within the app</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  We never access, read, or transmit your captured content to external servers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Storage and Security</h2>
                <h3 className="text-xl font-medium text-slate-800 mb-3">Local Storage</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  All your captured text is stored locally on your Mac using secure system APIs. This data remains on
                  your device and is protected by your system's security measures.
                </p>

                <h3 className="text-xl font-medium text-slate-800 mb-3">Data Security</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We implement appropriate security measures to protect your information:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>Data is stored using macOS's secure storage mechanisms</li>
                  <li>The app follows Apple's security guidelines and best practices</li>
                  <li>No network transmission of your captured content</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Third-Party Services</h2>
                <p className="text-slate-700 leading-relaxed mb-4">Jotto may use third-party services for:</p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>App analytics (anonymized usage data only)</li>
                  <li>Crash reporting to help us fix bugs</li>
                  <li>App Store distribution and updates</li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  These services do not have access to your captured text content.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Rights</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Since your data is stored locally on your device, you have complete control over it:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>You can delete any captured text at any time within the app</li>
                  <li>You can uninstall the app to remove all data</li>
                  <li>You can export your data for backup purposes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to This Policy</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Updating the "Last updated" date</li>
                  <li>Providing an in-app notification for significant changes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or Jotto's privacy practices, please contact us:
                </p>
                <div className="bg-slate-50 rounded-lg p-6">
                  <p className="text-slate-700 mb-2">
                    <strong>Developer:</strong> Ungjun Choe
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Email:</strong> bearjun05@naver.com
                  </p>
                  <p className="text-slate-700">
                    <strong>App:</strong> Jotto v1.0
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Compliance</h2>
                <p className="text-slate-700 leading-relaxed">
                  This Privacy Policy is designed to comply with applicable privacy laws and regulations, including GDPR
                  and CCPA, where applicable. Since Jotto processes data locally on your device and doesn't transmit
                  personal content to external servers, many traditional privacy concerns are minimized by design.
                </p>
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
                <div className="text-sm text-slate-600">Version 1.0</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm text-slate-600">Developer: Ungjun Choe</div>
              <div className="text-sm text-slate-500">Contact: bearjun05@naver.com</div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">© 2024 Jotto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
