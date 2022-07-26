/**
 * Type for Join Group
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
 * 21-07-2022         TuanLA           Create
 */

export enum JoinGroupActionType {
  JOIN_GROUP_REQUESTING = 'JOIN_GROUP_REQUESTING',
  JOIN_GROUP_SUCCESS = 'JOIN_GROUP_SUCCESS',
  JOIN_GROUP_ERROR = 'JOIN_GROUP_ERROR',
  JOIN_GROUP_CLEAR_STATE = 'JOIN_GROUP_CLEAR_STATE',
  UPDATE_FILTER_LIST_GROUP_REQUEST = 'UPDATE_FILTER_LIST_GROUP_REQUEST',
}

export interface JoinGroupRequestPayload {
  joinCode: string
}

export interface JoinGroupErrorResponse {
  error: ErrorMessage
}

export interface JoinGroupResponse {
  messageVi: string
  messageEn: string
}

export type JoinGroupRequestAction = ActionWithPayload<
  JoinGroupActionType.JOIN_GROUP_REQUESTING,
  JoinGroupRequestPayload
>

export type JoinGroupSuccessAction = ActionWithPayload<
  JoinGroupActionType.JOIN_GROUP_SUCCESS,
  JoinGroupResponse
>

export type JoinGroupErrorAction = ActionWithPayload<
  JoinGroupActionType.JOIN_GROUP_ERROR,
  JoinGroupErrorResponse
>

export type JoinGroupClearStateAction = Action<JoinGroupActionType.JOIN_GROUP_CLEAR_STATE>

export type JoinGroupAction =
  | JoinGroupRequestAction
  | JoinGroupSuccessAction
  | JoinGroupErrorAction
  | JoinGroupClearStateAction

export interface JoinGroupState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  joinGroupRequest: JoinGroupRequestPayload
}
