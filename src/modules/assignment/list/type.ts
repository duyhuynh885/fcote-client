/**
 * Type for authenticate
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

export enum ViewListAssignmentActionType {
  VIEW_LIST_ASSIGNMENT_REQUESTING = 'VIEW_LIST_ASSIGNMENT_REQUESTING',
  VIEW_LIST_ASSIGNMENT_SUCCESS = 'VIEW_LIST_ASSIGNMENT_SUCCESS',
  VIEW_LIST_ASSIGNMENT_ERROR = 'VIEW_LIST_ASSIGNMENT_ERROR',
  CLEAR_STATE = 'CLEAR_STATE',
  UPDATE_FILTER_LIST_ASSIGNMENT_REQUEST = 'UPDATE_FILTER_LIST_ASSIGNMENT_REQUEST',
}

export enum DifficultEnum {
  ALL = 'ALL',
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

export enum StatusEnum {
  ALL = 'ALL',
  NOT_YET = 'NOT_YET',
  DOING = 'DOING',
  FINISHED = 'FINISHED',
}

export interface ViewListAssignmentRequestPayload {
  filterByStatus: StatusEnum
  filterByDifficult: DifficultEnum
  searchBy?: string
  filterByCreatedByUserId?: string
  pageSize?: number
  pageNumber?: number
}

export interface ViewListAssignmentErrorResponse {
  error: ErrorMessage
}

export interface Assignment {
  assignmentId: string
  name: string
  difficult: DifficultEnum
  status: StatusEnum
  createdBy: string
  avatarCreatedBy: string
}

export interface ViewListAssignmentResponse {
  messageVi: string
  messageEn: string
  currentSize: number
  assignments: Assignment[]
}
export type ViewListAssignmentRequestAction = ActionWithPayload<
  ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_REQUESTING,
  ViewListAssignmentRequestPayload
>
export type ViewListAssignmentSuccessAction = ActionWithPayload<
  ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_SUCCESS,
  ViewListAssignmentResponse
>
export type ViewListAssignmentErrorAction = ActionWithPayload<
  ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_ERROR,
  ViewListAssignmentErrorResponse
>
export type ViewListAssignmentClearStateAction = Action<ViewListAssignmentActionType.CLEAR_STATE>
export type UpdateFilterListAssignmentAction = ActionWithPayload<
  ViewListAssignmentActionType.UPDATE_FILTER_LIST_ASSIGNMENT_REQUEST,
  ViewListAssignmentRequestPayload
>

export type ViewListAssignmentAction =
  | ViewListAssignmentRequestAction
  | ViewListAssignmentSuccessAction
  | ViewListAssignmentErrorAction
  | ViewListAssignmentClearStateAction
  | UpdateFilterListAssignmentAction

export interface ViewListAssignmentState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  filterRequest: ViewListAssignmentRequestPayload
  assignments: Assignment[]
  currentSize: number
}
