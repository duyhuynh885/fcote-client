/**
 * Type for Delete Group
 *
 * Version 1.0
 *
 * Date: 21-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 23-07-2022         TuanLA           Create
 */

export enum DeleteGroupActionType {
  DELETE_GROUP_REQUESTING = 'DELETE_GROUP_REQUESTING',
  DELETE_GROUP_SUCCESS = 'DELETE_GROUP_SUCCESS',
  DELETE_GROUP_ERROR = 'DELETE_GROUP_ERROR',
  DELETE_GROUP_CLEAR_STATE = 'DELETE_GROUP_CLEAR_STATE',
}

export interface DeleteGroupRequestPayload {
  id: number
}

export interface DeleteGroupErrorResponse {
  error: ErrorMessage
}

export interface DeleteGroupResponse {
  messageVi: string
  messageEn: string
}

export type DeleteGroupRequestAction = ActionWithPayload<
  DeleteGroupActionType.DELETE_GROUP_REQUESTING,
  DeleteGroupRequestPayload
>

export type DeleteGroupSuccessAction = ActionWithPayload<
  DeleteGroupActionType.DELETE_GROUP_SUCCESS,
  DeleteGroupResponse
>

export type DeleteGroupErrorAction = ActionWithPayload<
  DeleteGroupActionType.DELETE_GROUP_ERROR,
  DeleteGroupErrorResponse
>

export type DeleteGroupClearStateAction = Action<DeleteGroupActionType.DELETE_GROUP_CLEAR_STATE>

export type DeleteGroupAction =
  | DeleteGroupRequestAction
  | DeleteGroupSuccessAction
  | DeleteGroupErrorAction
  | DeleteGroupClearStateAction

export interface DeleteGroupState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  deleteGroupRequest: DeleteGroupRequestPayload
}
