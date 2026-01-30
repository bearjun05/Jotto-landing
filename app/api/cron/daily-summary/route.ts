import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const ADMIN_API_URL = process.env.ADMIN_API_URL || 'https://jotto-admin.vercel.app';
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

async function sendTelegramMessage(message: string) {
  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  await fetch(telegramUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    }),
  });
}

async function getDailySummary(): Promise<{ apiCost: number; activeMembers: number }> {
  try {
    // Get daily summary from jotto-admin
    const response = await fetch(`${ADMIN_API_URL}/api/analytics/daily-summary`, {
      headers: {
        'X-API-Key': ADMIN_API_KEY || '',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      return {
        apiCost: data.total_cost_usd || 0,
        activeMembers: data.active_users || 0,
      };
    }
  } catch (error) {
    console.error('Failed to get daily summary:', error);
  }
  
  return { apiCost: 0, activeMembers: 0 };
}

export async function GET(request: NextRequest) {
  // Verify cron secret for security
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { apiCost, activeMembers } = await getDailySummary();
    
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    
    const message = `
*[Jotto Daily Summary]*
${today}

API Cost: $${apiCost.toFixed(2)}
Active Users: ${activeMembers}
`.trim();

    await sendTelegramMessage(message);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Cron error:', error);
    return NextResponse.json(
      { error: 'Cron job failed' },
      { status: 500 }
    );
  }
}
