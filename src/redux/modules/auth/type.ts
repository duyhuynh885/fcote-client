/**
 * Type for authenticate
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

export enum LoginActionType {
  LOGIN_REQUESTING = 'LOGIN_REQUESTING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
}

export enum RegisterActionType {
  REGISTER_REQUESTING = 'REGISTER_REQUESTING',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_ERROR = 'REGISTER_ERROR',
}

export interface LoginResponse {
  accessToken: string
  messageVi: string
  messageEn: string
}

export interface LoginRequestPayload {
  email: string
  password: string
}

export interface LoginErrorPayload {
  error: Error
}

export interface LogoutResponse {
  messageVi: string
  messageEn: string
}

export interface RegisterRequestPayload {
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
}

export interface RegisterResponse {
  messageVi: string
  messageEn: string
}

export interface RegisterErrorPayload {
  error: Error
}

export type LoginRequestAction = ActionWithPayload<
  LoginActionType.LOGIN_REQUESTING,
  LoginRequestPayload
>

export type LoginSuccessAction = ActionWithPayload<LoginActionType.LOGIN_SUCCESS, LoginResponse>
export type LoginErrorAction = ActionWithPayload<LoginActionType.LOGIN_ERROR, LoginErrorPayload>
export type LogoutAction = Action<LoginActionType.LOGOUT_REQUEST>
export type RegisterRequestAction = ActionWithPayload<
  RegisterActionType.REGISTER_REQUESTING,
  RegisterRequestPayload
>
export type RegisterSuccessAction = ActionWithPayload<
  RegisterActionType.REGISTER_SUCCESS,
  RegisterResponse
>
export type RegisterErrorAction = ActionWithPayload<
  RegisterActionType.REGISTER_ERROR,
  RegisterErrorPayload
>
export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutAction
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterErrorAction

export interface AuthState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: Message
}
