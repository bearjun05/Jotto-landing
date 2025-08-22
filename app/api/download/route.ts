import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"

export async function GET() {
  try {
    // appcast.xml 파일에서 다운로드 URL 추출
    const filePath = join(process.cwd(), "public", "appcast.xml")
    const appcastXml = await readFile(filePath, "utf-8")

    // XML에서 enclosure url 추출
    const urlMatch = appcastXml.match(/enclosure\s+url="([^"]+)"/i)

    if (urlMatch && urlMatch[1]) {
      const downloadUrl = urlMatch[1]

      // 실제 파일로 리다이렉트
      return NextResponse.redirect(downloadUrl)
    } else {
      // URL을 찾을 수 없는 경우 에러 응답
      return NextResponse.json({ error: "Download URL not found in appcast" }, { status: 404 })
    }
  } catch (error) {
    console.error("Error reading appcast:", error)
    return NextResponse.json({ error: "Failed to get download URL" }, { status: 500 })
  }
}
