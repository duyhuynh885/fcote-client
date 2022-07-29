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

export enum LeaveGroupActionType {
  LEAVE_GROUP_REQUESTING = 'LEAVE_GROUP_REQUESTING',
  LEAVE_GROUP_SUCCESS = 'LEAVE_GROUP_SUCCESS',
  LEAVE_GROUP_ERROR = 'LEAVE_GROUP_ERROR',
  LEAVE_GROUP_CLEAR_STATE = 'LEAVE_GROUP_CLEAR_STATE',
}

export interface LeaveGroupRequestPayload {
  groupId: number
}

export interface LeaveGroupErrorResponse {
  error: ErrorMessage
}

export interface LeaveGroupResponse {
  messageVi: string
  messageEn: string
}

export type LeaveGroupRequestAction = ActionWithPayload<
  LeaveGroupActionType.LEAVE_GROUP_REQUESTING,
  LeaveGroupRequestPayload
>

export type LeaveGroupSuccessAction = ActionWithPayload<
  LeaveGroupActionType.LEAVE_GROUP_SUCCESS,
  LeaveGroupResponse
>

export type LeaveGroupErrorAction = ActionWithPayload<
  LeaveGroupActionType.LEAVE_GROUP_ERROR,
  LeaveGroupErrorResponse
>

export type LeaveGroupClearStateAction = Action<LeaveGroupActionType.LEAVE_GROUP_CLEAR_STATE>

export type LeaveGroupAction =
  | LeaveGroupRequestAction
  | LeaveGroupSuccessAction
  | LeaveGroupErrorAction
  | LeaveGroupClearStateAction

export interface LeaveGroupState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  leaveGroupRequest: LeaveGroupRequestPayload
}
