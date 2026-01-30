import { NextRequest, NextResponse } from 'next/server';
import { Webhook } from 'svix';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

interface ClerkWebhookEvent {
  type: string;
  data: {
    id: string;
    email_addresses?: Array<{
      email_address: string;
    }>;
    created_at?: number;
  };
}

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

async function getTotalUserCount(): Promise<number> {
  // Get total user count from Clerk API
  try {
    const response = await fetch('https://api.clerk.com/v1/users/count', {
      headers: {
        'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.total_count || 0;
    }
  } catch (error) {
    console.error('Failed to get user count:', error);
  }
  return 0;
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text();
    const headers = {
      'svix-id': request.headers.get('svix-id') || '',
      'svix-timestamp': request.headers.get('svix-timestamp') || '',
      'svix-signature': request.headers.get('svix-signature') || '',
    };

    // Verify webhook signature if secret is configured
    let event: ClerkWebhookEvent;
    
    if (CLERK_WEBHOOK_SECRET) {
      const wh = new Webhook(CLERK_WEBHOOK_SECRET);
      event = wh.verify(payload, headers) as ClerkWebhookEvent;
    } else {
      event = JSON.parse(payload);
    }

    // Handle user.created event
    if (event.type === 'user.created') {
      const userEmail = event.data.email_addresses?.[0]?.email_address || 'Unknown';
      const totalUsers = await getTotalUserCount();
      
      const message = `
*[Jotto New User]*

User Email: ${userEmail}
Total Users: ${totalUsers}
`.trim();

      await sendTelegramMessage(message);
      
      console.log(`New user registered: ${userEmail}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 400 }
    );
  }
}
