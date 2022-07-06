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
  CLEAR_STATE = 'CLEAR_STATE',
}

export interface LoginRequestPayload {
  email: string
  password: string
}

export interface LoginErrorResponse {
  error: ErrorMessage
}

export interface LoginResponse {
  accessToken: string
  messageVi: string
  messageEn: string
}

export type LoginRequestAction = ActionWithPayload<
  LoginActionType.LOGIN_REQUESTING,
  LoginRequestPayload
>
export type LoginSuccessAction = ActionWithPayload<LoginActionType.LOGIN_SUCCESS, LoginResponse>
export type LoginErrorAction = ActionWithPayload<LoginActionType.LOGIN_ERROR, LoginErrorResponse>
export type LogoutAction = Action<LoginActionType.LOGOUT_REQUEST>
export type LoginClearStateAction = Action<LoginActionType.CLEAR_STATE>

export type LoginAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutAction
  | LoginClearStateAction

export interface LoginState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
}
