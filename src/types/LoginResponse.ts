export interface LoginResponse {
  success: boolean;
  message: string;
  accessToken: string;
  refreshToken: string;
}
