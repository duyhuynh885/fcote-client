/**
 * Type for uploadImage
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

export enum UploadImageActionType {
  UPLOAD_IMAGE_REQUESTING = 'UPLOAD_IMAGE_REQUESTING',
  UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS',
  UPLOAD_IMAGE_ERROR = 'UPLOAD_IMAGE_ERROR',
  UPLOAD_IMAGE_CLEAR_STATE = 'UPLOAD_IMAGE_CLEAR_STATE',
}

export interface UploadImageRequestPayload {
  file: any
}

export interface UploadImageErrorResponse {
  error: ErrorMessage
}

export interface UploadImageResponse {
  messageVi: string
  messageEn: string
}

export type UploadImageRequestAction = ActionWithPayload<
  UploadImageActionType.UPLOAD_IMAGE_REQUESTING,
  UploadImageRequestPayload
>
export type UploadImageSuccessAction = ActionWithPayload<
  UploadImageActionType.UPLOAD_IMAGE_SUCCESS,
  UploadImageResponse
>
export type UploadImageErrorAction = ActionWithPayload<
  UploadImageActionType.UPLOAD_IMAGE_ERROR,
  UploadImageErrorResponse
>
export type UploadImageClearStateAction = Action<UploadImageActionType.UPLOAD_IMAGE_CLEAR_STATE>

export type UploadImageAction =
  | UploadImageRequestAction
  | UploadImageSuccessAction
  | UploadImageErrorAction
  | UploadImageClearStateAction

export interface UploadImageState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
}
