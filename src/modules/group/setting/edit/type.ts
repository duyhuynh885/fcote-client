/**
 * Type for Edit Group
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

 export enum EditGroupActionType {
  EDIT_GROUP_REQUESTING = 'EDIT_GROUP_REQUESTING',
  EDIT_GROUP_SUCCESS = 'EDIT_GROUP_SUCCESS',
  EDIT_GROUP_ERROR = 'EDIT_GROUP_ERROR',
  EDIT_GROUP_CLEAR_STATE = 'EDIT_GROUP_CLEAR_STATE',
}

export interface EditGroupRequestPayload {
  groupId: number
  title: string
  description: string
  image: string
}

export interface EditGroupErrorResponse {
  error: ErrorMessage
}

export interface EditGroupResponse {
  messageVi: string
  messageEn: string
}

export type EditGroupRequestAction = ActionWithPayload<
  EditGroupActionType.EDIT_GROUP_REQUESTING,
  EditGroupRequestPayload
>

export type EditGroupSuccessAction = ActionWithPayload<
  EditGroupActionType.EDIT_GROUP_SUCCESS,
  EditGroupResponse
>

export type EditGroupErrorAction = ActionWithPayload<
  EditGroupActionType.EDIT_GROUP_ERROR,
  EditGroupErrorResponse
>

export type EditGroupClearStateAction = Action<EditGroupActionType.EDIT_GROUP_CLEAR_STATE>

export type EditGroupAction =
  | EditGroupRequestAction
  | EditGroupSuccessAction
  | EditGroupErrorAction
  | EditGroupClearStateAction

export interface EditGroupState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  editGroupRequest: EditGroupRequestPayload
}
