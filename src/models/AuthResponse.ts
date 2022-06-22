/**
 * Authentication Model
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */
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
