# Jotto landing page

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/bearjuns-projects/v0-jotto-landing-page)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/1nVSMs3379m)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/bearjuns-projects/v0-jotto-landing-page](https://vercel.com/bearjuns-projects/v0-jotto-landing-page)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/1nVSMs3379m](https://v0.dev/chat/projects/1nVSMs3379m)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Google OAuth 설정

### 1. Google Cloud Console에서 OAuth 2.0 클라이언트 설정

1. [Google Cloud Console](https://console.cloud.google.com/)에 접속
2. 프로젝트 생성 또는 선택
3. "API 및 서비스" > "사용자 인증 정보"로 이동
4. "사용자 인증 정보 만들기" > "OAuth 2.0 클라이언트 ID" 선택
5. 애플리케이션 유형을 "웹 애플리케이션"으로 설정
6. 승인된 리디렉션 URI에 다음을 추가:
   - 개발환경: `http://localhost:3000/api/auth/google/callback`
   - 프로덕션: `https://jotto.in/api/auth/google/callback`

### 2. 환경변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```bash
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
BACKEND_URL=https://api.jotto.in
```

### 3. Vercel 배포 시 환경변수 설정

Vercel 대시보드에서 프로젝트 설정 > Environment Variables에 위의 환경변수들을 추가하세요.

### 4. API 엔드포인트

- **로그인 시작**: `GET /api/auth/google`
- **콜백 처리**: `GET /api/auth/google/callback`

### 5. 백엔드 서버 연동

콜백 라우트는 `access_token`과 `id_token`을 백엔드 서버(`https://api.jotto.in/oauth/google`)로 POST 요청을 보냅니다.

백엔드 서버는 다음 형식의 요청을 받게 됩니다:

```json
{
  "access_token": "google_access_token",
  "id_token": "google_id_token"
}
```
