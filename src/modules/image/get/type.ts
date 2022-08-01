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

export enum GetImageActionType {
  GET_IMAGE_REQUESTING = 'GET_IMAGE_REQUESTING',
  GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS',
  GET_IMAGE_ERROR = 'GET_IMAGE_ERROR',
  GET_IMAGE_CLEAR_STATE = 'GET_IMAGE_CLEAR_STATE',
}

export interface GetImageRequestPayload {
  path: string
}

export interface GetImageErrorResponse {
  error: ErrorMessage
}

export interface GetImageResponse {
  messageVi: string
  messageEn: string
}

export type GetImageRequestAction = ActionWithPayload<
  GetImageActionType.GET_IMAGE_REQUESTING,
  GetImageRequestPayload
>
export type GetImageSuccessAction = ActionWithPayload<
  GetImageActionType.GET_IMAGE_SUCCESS,
  GetImageResponse
>
export type GetImageErrorAction = ActionWithPayload<
  GetImageActionType.GET_IMAGE_ERROR,
  GetImageErrorResponse
>
export type GetImageClearStateAction = Action<GetImageActionType.GET_IMAGE_CLEAR_STATE>

export type GetImageAction =
  | GetImageRequestAction
  | GetImageSuccessAction
  | GetImageErrorAction
  | GetImageClearStateAction

export interface GetImageState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
}
