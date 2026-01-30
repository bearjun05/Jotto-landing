import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const host = request.headers.get("host") || ""
  const hostname = host.split(":")[0] ?? ""

  // p.jotto.in 으로 들어오면, 루트(/)를 /p 로 보여주기
  if ((hostname === "p.jotto.in" || hostname.startsWith("p.")) && url.pathname === "/") {
    const rewriteUrl = url.clone()
    rewriteUrl.pathname = "/p"
    return NextResponse.rewrite(rewriteUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
}

