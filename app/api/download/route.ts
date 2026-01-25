import { NextResponse } from "next/server"
import path from "path"
import fs from "fs"

export async function GET() {
  try {
    // Read the appcast.xml file
    const appcastPath = path.join(process.cwd(), "public", "appcast.xml")
    const appcastContent = fs.readFileSync(appcastPath, "utf-8")

    // Parse XML to find enclosure URLs
    const enclosureRegex = /<enclosure[^>]+url="([^"]+)"/g
    const matches = []
    let match

    while ((match = enclosureRegex.exec(appcastContent)) !== null) {
      matches.push(match[1])
    }

    // Use the second enclosure if available, otherwise use the first
    const downloadUrl = matches[1] || matches[0]

    if (!downloadUrl) {
      return NextResponse.json({ error: "No download URL found in appcast.xml" }, { status: 404 })
    }

    // Redirect to the download URL
    return NextResponse.redirect(downloadUrl)
  } catch (error) {
    console.error("Error reading appcast.xml:", error)
    return NextResponse.json({ error: "Failed to read appcast.xml" }, { status: 500 })
  }
}
