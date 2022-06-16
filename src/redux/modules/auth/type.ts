export enum LoginActionType {
  LOGIN_REQUESTING = 'LOGIN_REQUESTING',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGOUT = 'LOGOUT',
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

export type LoginRequestAction = ActionWithPayload<
  LoginActionType.LOGIN_REQUESTING,
  LoginRequestPayload
>
export type LoginSuccessAction = ActionWithPayload<LoginActionType.LOGIN_SUCCESS, LoginResponse>
export type LoginErrorAction = ActionWithPayload<LoginActionType.LOGIN_ERROR, LoginErrorPayload>
export type LoginAction = LoginRequestAction | LoginSuccessAction | LoginErrorAction
export type LogoutAction = LoginRequestAction | LoginSuccessAction | LoginErrorAction

export interface LoginState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: Message
}
