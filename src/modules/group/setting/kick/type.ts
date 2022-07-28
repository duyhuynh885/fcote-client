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

 export enum KickGroupActionType {
  KICK_GROUP_REQUESTING = 'KICK_GROUP_REQUESTING',
  KICK_GROUP_SUCCESS = 'KICK_GROUP_SUCCESS',
  KICK_GROUP_ERROR = 'KICK_GROUP_ERROR',
  KICK_GROUP_CLEAR_STATE = 'KICK_GROUP_CLEAR_STATE',
}

export interface KickGroupRequestPayload {
  groupId: number
  memberId: number
}

export interface KickGroupErrorResponse {
  error: ErrorMessage
}

export interface KickGroupResponse {
  messageVi: string
  messageEn: string
}

export type KickGroupRequestAction = ActionWithPayload<
  KickGroupActionType.KICK_GROUP_REQUESTING,
  KickGroupRequestPayload
>

export type KickGroupSuccessAction = ActionWithPayload<
  KickGroupActionType.KICK_GROUP_SUCCESS,
  KickGroupResponse
>

export type KickGroupErrorAction = ActionWithPayload<
  KickGroupActionType.KICK_GROUP_ERROR,
  KickGroupErrorResponse
>

export type KickGroupClearStateAction = Action<KickGroupActionType.KICK_GROUP_CLEAR_STATE>

export type KickGroupAction =
  | KickGroupRequestAction
  | KickGroupSuccessAction
  | KickGroupErrorAction
  | KickGroupClearStateAction

export interface KickGroupState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  kickGroupRequest: KickGroupRequestPayload
}
