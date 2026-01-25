import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"

export async function GET() {
  try {
    // public/appcast.xml 파일을 읽어서 반환
    const filePath = join(process.cwd(), "public", "appcast.xml")
    const appcastXml = await readFile(filePath, "utf-8")

    return new NextResponse(appcastXml, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600", // 1시간 캐시
      },
    })
  } catch (error) {
    // 파일이 없거나 오류가 발생한 경우 기본 appcast 반환
    const defaultAppcast = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Jotto Appcast</title>
    <link>https://www.jotto.in/appcast.xml</link>
    <description>Jotto macOS App Updates</description>
    <language>ko</language>
    
    <!-- 최신 버전 정보 (빌드 후 업데이트 필요) -->
    <item>
      <title>Version 1.1</title>
      <description><![CDATA[
        <h2>새로운 기능</h2>
        <ul>
          <li>자동 업데이트 기능 추가</li>
          <li>성능 개선 및 버그 수정</li>
        </ul>
      ]]></description>
      <sparkle:releaseNotesLink>https://github.com/YOUR_USERNAME/jotto/releases/tag/v1.0.0</sparkle:releaseNotesLink>
      <pubDate>Tue, 13 Aug 2025 15:00:00 +0900</pubDate>
      <enclosure
        url="https://github.com/YOUR_USERNAME/jotto/releases/download/v1.0.0/jotto.zip"
        sparkle:edSignature="SIGNATURE_PLACEHOLDER"
        sparkle:minimumSystemVersion="13.0"
        length="FILE_SIZE_PLACEHOLDER"
        type="application/octet-stream"/>
      <sparkle:version>100</sparkle:version>
      <sparkle:shortVersionString>1.0.0</sparkle:shortVersionString>
    </item>
    
  </channel>
</rss>`

    return new NextResponse(defaultAppcast, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    })
  }
}
