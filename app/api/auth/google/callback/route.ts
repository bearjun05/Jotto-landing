import { NextRequest, NextResponse } from 'next/server';

interface GoogleTokenResponse {
  access_token: string;
  id_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
}

interface BackendOAuthResponse {
  success: boolean;
  user?: any;
  error?: string;
  message?: string;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      console.error('Google OAuth 오류:', error);
      return NextResponse.json(
        { error: `OAuth 인증 오류: ${error}` },
        { status: 400 }
      );
    }

    if (!code) {
      return NextResponse.json(
        { error: '인증 코드가 없습니다.' },
        { status: 400 }
      );
    }

    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = process.env.NODE_ENV === 'production' 
      ? 'https://jotto.in/api/auth/google/callback'
      : 'http://localhost:3000/api/auth/google/callback';

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        { error: 'Google OAuth 환경변수가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    // Google에서 액세스 토큰 요청
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error('Google 토큰 요청 실패:', errorData);
      return NextResponse.json(
        { error: '액세스 토큰을 가져오는데 실패했습니다.' },
        { status: 400 }
      );
    }

    const tokenData: GoogleTokenResponse = await tokenResponse.json();

    // 백엔드 서버로 토큰 전송
    const backendUrl = process.env.BACKEND_URL || 'https://api.jotto.in';
    const backendResponse = await fetch(`${backendUrl}/oauth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: tokenData.access_token,
        id_token: tokenData.id_token,
      }),
    });

    if (!backendResponse.ok) {
      const backendError = await backendResponse.text();
      console.error('백엔드 서버 응답 오류:', backendError);
      return NextResponse.json(
        { error: '백엔드 서버 처리 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    const backendData: BackendOAuthResponse = await backendResponse.json();

    // 성공 시 프론트엔드로 리다이렉트 (또는 적절한 응답)
    const frontendUrl = process.env.NODE_ENV === 'production' 
      ? 'https://jotto.in'
      : 'http://localhost:3000';

    // 백엔드에서 받은 데이터를 쿼리 파라미터로 전달
    const redirectUrl = new URL(frontendUrl);
    if (backendData.success) {
      redirectUrl.searchParams.append('auth', 'success');
      if (backendData.user) {
        redirectUrl.searchParams.append('user', JSON.stringify(backendData.user));
      }
    } else {
      redirectUrl.searchParams.append('auth', 'error');
      redirectUrl.searchParams.append('message', backendData.error || '인증 실패');
    }

    return NextResponse.redirect(redirectUrl.toString());
  } catch (error) {
    console.error('OAuth 콜백 처리 중 오류:', error);
    return NextResponse.json(
      { error: 'OAuth 콜백 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 