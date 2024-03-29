/**
 * Type for register
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

export enum RegisterActionType {
  REGISTER_REQUESTING = 'REGISTER_REQUESTING',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_ERROR = 'REGISTER_ERROR',
  REGISTER_CLEAR_STATE = 'REGISTER_CLEAR_STATE',
}

export interface RegisterRequestPayload {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
}

export interface RegisterResponse {
  messageEn: string
  messageVi: string
}

export interface RegisterErrorResponse {
  error: ErrorMessage
}

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
  RegisterErrorResponse
>
export type RegisterClearStateAction = Action<RegisterActionType.REGISTER_CLEAR_STATE>

export type RegisterAction =
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterErrorAction
  | RegisterClearStateAction

export interface RegisterState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
}
