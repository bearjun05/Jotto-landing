import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, contactType, subject, message, appVersion, buildNumber, systemVersion } = body;

    // Validate required fields
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: 'Email, subject and message are required' },
        { status: 400 }
      );
    }

    // Format message for Telegram
    const telegramMessage = `
🔔 *Jotto 앱 문의*

✉️ *보낸 사람:* ${email}
📌 *유형:* ${contactType}
📝 *제목:* ${subject}

💬 *내용:*
${message}

───────────────
📱 App: ${appVersion} (${buildNumber})
💻 macOS: ${systemVersion}
`.trim();

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    const telegramResult = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error('Telegram error:', telegramResult);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
