// Google OAuth 관련 타입 정의

export interface GoogleTokenResponse {
  access_token: string;
  id_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
}

export interface GoogleUserInfo {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}

export interface BackendOAuthRequest {
  access_token: string;
  id_token: string;
}

export interface BackendOAuthResponse {
  success: boolean;
  user?: any;
  error?: string;
  message?: string;
}

export interface OAuthError {
  error: string;
  error_description?: string;
  error_uri?: string;
} 