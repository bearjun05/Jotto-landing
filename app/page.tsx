import { ArrowRight, Download, Zap, FolderOpen, Bell, CheckCircle, MessageSquare, Calendar, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function JottoLanding() {
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
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
            <img src="/jotto-icon.png" alt="Jotto" className="w-4 h-4 mr-1 inline" />
            Jotto for Mac
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Clear your mind,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              save your thoughts
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Just drag and press <kbd className="px-2 py-1 bg-slate-100 rounded text-sm font-mono">⌘ + ⇧ + S</kbd>.
            <br />
            Jotto saves your text instantly so you can stay focused and organize later.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download on Mac App Store
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              Watch Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">Three simple steps to capture anything, anywhere</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Select (drag) any text</h3>
              <p className="text-slate-600">
                Works in Slack, Discord, Chrome, Notion—any app that lets you select text
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Press ⌘ + ⇧ + S</h3>
              <p className="text-slate-600">Just hit the hotkey to save instantly—no popups or distractions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Organize later</h3>
              <p className="text-slate-600">Open Jotto to sort everything into To-dos, Calendar events, or Memos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">See Jotto in Action</h2>
            <p className="text-lg text-slate-600">Watch how seamlessly you can capture and organize your thoughts</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Capture Demo */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <img
                  src="/merged-document.gif"
                  alt="Capturing text from Slack with Jotto"
                  className="w-full rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">1. Capture from Anywhere</h3>
              <p className="text-slate-600 leading-relaxed">
                Select any text in Slack, Discord, Chrome, or any app. Press{" "}
                <kbd className="px-2 py-1 bg-slate-100 rounded text-sm font-mono">⌘ + ⇧ + S</kbd> and it's instantly
                saved to your Jotto inbox.
              </p>
            </div>

            {/* Organize Demo */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <img
                  src="/inbox-to-todo.gif"
                  alt="Organizing captured text in Jotto inbox"
                  className="w-full rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">2. Organize Later</h3>
              <p className="text-slate-600 leading-relaxed">
                Open Jotto to see all your captured content. Easily sort items into To-dos, Calendar events, or Memos
                with just a click.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Try Jotto Now
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Features</h2>
            <p className="text-lg text-slate-600">Everything you need to capture and organize your thoughts</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Save text from anywhere</h3>
                    <p className="text-slate-600 mb-4">
                      Works in Slack, Discord, Chrome, Notion—any app that lets you select text. Just drag and hit the
                      hotkey to save.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary" className="bg-slate-100">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        Slack
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100">
                        Discord
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100">
                        Chrome
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100">
                        Notion
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FolderOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Organize later, stress-free</h3>
                    <p className="text-slate-600 mb-4">
                      All captured text is stored and accessible in the app. Easily sort into To-dos, Calendar events,
                      or Memos.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary" className="bg-slate-100">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        To-dos
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100">
                        <Calendar className="w-3 h-3 mr-1" />
                        Calendar
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100">
                        <FileText className="w-3 h-3 mr-1" />
                        Memos
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white md:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Capture without interruption</h3>
                    <p className="text-slate-600">
                      No popups or distractions—just a silent save. Your focus stays uninterrupted while everything gets
                      captured seamlessly in the background.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Does it work in every app?</h3>
              <p className="text-slate-600">
                Yes! As long as you can select text, Jotto will work. We've tested it across hundreds of applications
                including web browsers, messaging apps, document editors, and more.
              </p>
            </div>
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Where do saved texts go?</h3>
              <p className="text-slate-600">
                Open the Jotto app to see a list of everything you've captured. All your saved text is stored locally
                and organized chronologically, making it easy to find what you need.
              </p>
            </div>
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">How do I organize saved items?</h3>
              <p className="text-slate-600">
                Simply click on any saved text and assign it as a To-do, Calendar event, or Memo. You can also add tags,
                set due dates, and create custom categories to keep everything organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to clear your mind?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already streamlined their workflow with Jotto.
          </p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3">
            <Download className="w-5 h-5 mr-2" />
            Download on Mac App Store
          </Button>
        </div>
      </section>

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
              <div className="text-sm text-slate-600">Contact: contact@jotto.in</div>
              <div className="text-sm text-slate-500">macOS productivity tool</div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              © 2025 Jotto. All rights reserved. •
              <a href="/privacy" className="hover:text-slate-700 ml-1">
                Privacy Policy
              </a>
              {" • "}
              <a href="/terms" className="hover:text-slate-700">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
