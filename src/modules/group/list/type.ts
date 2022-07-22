/**
 * Type for List Group
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

 export enum ViewListGroupActionType {
  VIEW_LIST_GROUP_REQUESTING = 'VIEW_LIST_GROUP_REQUESTING',
  VIEW_LIST_GROUP_SUCCESS = 'VIEW_LIST_GROUP_SUCCESS',
  VIEW_LIST_GROUP_ERROR = 'VIEW_LIST_GROUP_ERROR',
  CLEAR_STATE = 'CLEAR_STATE',
  UPDATE_FILTER_LIST_GROUP_REQUEST = 'UPDATE_FILTER_LIST_GROUP_REQUEST',
}

export interface ViewListGroupRequestPayload {
  pageSize?: number
  pageNumber?: number
}

export interface ViewListGroupErrorResponse {
  error: ErrorMessage
}

export interface Group {
  id: number
  title: string
  image: string
  totalMember: number
  joinCode: string
  createdBy: string
}

export interface ViewListGroupResponse {
  messageVi: string
  messageEn: string
  currentSize: number
  groups: Group[]
}

export type ViewListGroupRequestAction = ActionWithPayload<
  ViewListGroupActionType.VIEW_LIST_GROUP_REQUESTING,
  ViewListGroupRequestPayload
>

export type ViewListGroupSuccessAction = ActionWithPayload<
  ViewListGroupActionType.VIEW_LIST_GROUP_SUCCESS,
  ViewListGroupResponse
>

export type ViewListGroupErrorAction = ActionWithPayload<
  ViewListGroupActionType.VIEW_LIST_GROUP_ERROR,
  ViewListGroupErrorResponse
>

export type ViewListGroupClearStateAction = Action<ViewListGroupActionType.CLEAR_STATE>

export type ViewListGroupAction =
  | ViewListGroupRequestAction
  | ViewListGroupSuccessAction
  | ViewListGroupErrorAction
  | ViewListGroupClearStateAction

export interface ViewListGroupState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  groupTypeRequest: ViewListGroupRequestPayload
  groups: Group[]
  currentSize: number
}
