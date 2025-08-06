import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const redirectUri = process.env.NODE_ENV === 'production' 
      ? 'https://www.jotto.in/api/auth/google/callback'
      : 'http://localhost:3000/api/auth/google/callback';

    if (!clientId) {
      return NextResponse.json(
        { error: 'GOOGLE_CLIENT_ID 환경변수가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    // Google OAuth URL 생성
    const googleAuthUrl = new URL('https://accounts.google.com/oauth/authorize');
    googleAuthUrl.searchParams.append('client_id', clientId);
    googleAuthUrl.searchParams.append('redirect_uri', redirectUri);
    googleAuthUrl.searchParams.append('response_type', 'code');
    googleAuthUrl.searchParams.append('scope', 'openid email profile');
    googleAuthUrl.searchParams.append('access_type', 'offline');
    googleAuthUrl.searchParams.append('prompt', 'consent');

    // Google OAuth 페이지로 리다이렉트
    return NextResponse.redirect(googleAuthUrl.toString());
  } catch (error) {
    console.error('Google OAuth 시작 중 오류:', error);
    return NextResponse.json(
      { error: 'OAuth 인증 시작 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 