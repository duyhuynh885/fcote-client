/**
 * Type for Detail Group
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

export enum ViewDetailGroupActionType {
  VIEW_DETAIL_GROUP_REQUESTING = 'VIEW_DETAIL_GROUP_REQUESTING',
  VIEW_DETAIL_GROUP_SUCCESS = 'VIEW_DETAIL_GROUP_SUCCESS',
  VIEW_DETAIL_GROUP_ERROR = 'VIEW_DETAIL_GROUP_ERROR',
  VIEW_DETAIL_CLEAR_STATE = 'VIEW_DETAIL_CLEAR_STATE',
  UPDATE_FILTER_DETAIL_GROUP_REQUEST = 'UPDATE_FILTER_DETAIL_GROUP_REQUEST',
}

export interface ViewDetailGroupRequestPayload {
  id: number
  pageSize?: number
  pageNumber?: number
}

export interface ViewDetailGroupErrorResponse {
  error: ErrorMessage
}

export interface GroupDetail {
  id: number
  title: string
  totalMember: number
  joinCode: string
  isOwner: boolean
}

export interface MemberInGroup {
  id: number
  username: string
  avatar: string
  totalCompleted: number
  totalMissing: number
  totalScore: number
  isOwner: boolean
}

export interface ViewDetailGroupResponse {
  messageVi: string
  messageEn: string
  currentSize: number
  groupDetail: GroupDetail
  member: MemberInGroup[]
}

export type ViewDetailGroupRequestAction = ActionWithPayload<
  ViewDetailGroupActionType.VIEW_DETAIL_GROUP_REQUESTING,
  ViewDetailGroupRequestPayload
>

export type ViewDetailGroupSuccessAction = ActionWithPayload<
  ViewDetailGroupActionType.VIEW_DETAIL_GROUP_SUCCESS,
  ViewDetailGroupResponse
>

export type ViewDetailGroupErrorAction = ActionWithPayload<
  ViewDetailGroupActionType.VIEW_DETAIL_GROUP_ERROR,
  ViewDetailGroupErrorResponse
>

export type ViewDetailGroupClearStateAction =
  Action<ViewDetailGroupActionType.VIEW_DETAIL_CLEAR_STATE>

export type ViewDetailGroupAction =
  | ViewDetailGroupRequestAction
  | ViewDetailGroupSuccessAction
  | ViewDetailGroupErrorAction
  | ViewDetailGroupClearStateAction

export interface ViewDetailGroupState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  groupDetailRequest: ViewDetailGroupRequestPayload
  groupDetail: GroupDetail
  member: MemberInGroup[]
  currentSize: number
}
