export interface User {
  userId: string
  fullName: string
  avatar: string
}

export interface AuthResponse {
  accessToken: string
  messageVi: string
  messageEn: string
  user: User
}

export interface RegisterResponse {
  messageVi: string
  messageEn: string
}
