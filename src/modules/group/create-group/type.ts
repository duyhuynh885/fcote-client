/**
 * Type for Create Group
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

export enum CreateGroupActionType {
  CREATE_GROUP_REQUESTING = 'CREATE_GROUP_REQUESTING',
  CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS',
  CREATE_GROUP_ERROR = 'CREATE_GROUP_ERROR',
  CREATE_GROUP_CLEAR_STATE = 'CREATE_GROUP_CLEAR_STATE',
  UPDATE_FILTER_LIST_GROUP_REQUEST = 'UPDATE_FILTER_LIST_GROUP_REQUEST',
}

export interface CreateGroupRequestPayload {
  title: string
  description: string
  image: string
}

export interface CreateGroupErrorResponse {
  error: ErrorMessage
}

export interface CreateGroupResponse {
  messageVi: string
  messageEn: string
}

export type CreateGroupRequestAction = ActionWithPayload<
  CreateGroupActionType.CREATE_GROUP_REQUESTING,
  CreateGroupRequestPayload
>

export type CreateGroupSuccessAction = ActionWithPayload<
  CreateGroupActionType.CREATE_GROUP_SUCCESS,
  CreateGroupResponse
>

export type CreateGroupErrorAction = ActionWithPayload<
  CreateGroupActionType.CREATE_GROUP_ERROR,
  CreateGroupErrorResponse
>

export type CreateGroupClearStateAction = Action<CreateGroupActionType.CREATE_GROUP_CLEAR_STATE>

export type CreateGroupAction =
  | CreateGroupRequestAction
  | CreateGroupSuccessAction
  | CreateGroupErrorAction
  | CreateGroupClearStateAction

export interface CreateGroupState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  createGroupRequest: CreateGroupRequestPayload
}
