/**
 * Type for ResetPassword
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

export enum ResetPasswordActionType {
  RESET_PASSWORD_REQUESTING = 'RESET_PASSWORD_REQUESTING',
  RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR',
  RESET_PASSWORD_CLEAR_STATE = 'RESET_PASSWORD_CLEAR_STATE',
}

export interface ResetPasswordRequestPayload {
  email: string
}

export interface ResetPasswordErrorResponse {
  error: ErrorMessage
}

export interface ResetPasswordResponse {
  messageVi: string
  messageEn: string
}

export type ResetPasswordRequestAction = ActionWithPayload<
  ResetPasswordActionType.RESET_PASSWORD_REQUESTING,
  ResetPasswordRequestPayload
>
export type ResetPasswordSuccessAction = ActionWithPayload<
  ResetPasswordActionType.RESET_PASSWORD_SUCCESS,
  ResetPasswordResponse
>
export type ResetPasswordErrorAction = ActionWithPayload<
  ResetPasswordActionType.RESET_PASSWORD_ERROR,
  ResetPasswordErrorResponse
>
export type ResetPasswordClearStateAction =
  Action<ResetPasswordActionType.RESET_PASSWORD_CLEAR_STATE>

export type ResetPasswordAction =
  | ResetPasswordRequestAction
  | ResetPasswordSuccessAction
  | ResetPasswordErrorAction
  | ResetPasswordClearStateAction

export interface ResetPasswordState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
}
