/**
 * Type for login
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

export enum LogoutActionType {
  LOGOUT_REQUESTING = 'LOGOUT_REQUESTING',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_ERROR = 'LOGOUT_ERROR',
  LOGOUT_CLEAR_STATE = 'LOGOUT_CLEAR_STATE',
}

export interface LogoutErrorResponse {
  error: ErrorMessage
}

export interface LogoutResponse {
  messageVi: string
  messageEn: string
}

export type LogoutRequestAction = Action<LogoutActionType.LOGOUT_REQUESTING>
export type LogoutSuccessAction = ActionWithPayload<LogoutActionType.LOGOUT_SUCCESS, LogoutResponse>
export type LogoutErrorAction = ActionWithPayload<
  LogoutActionType.LOGOUT_ERROR,
  LogoutErrorResponse
>
export type LogoutClearStateAction = Action<LogoutActionType.LOGOUT_CLEAR_STATE>

export type LogoutAction =
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutErrorAction
  | LogoutClearStateAction

export interface LogoutState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
}
