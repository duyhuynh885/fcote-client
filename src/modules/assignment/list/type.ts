/**
 * Type for fetch list assignments
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
  VIEW_LIST_ASSIGNMENT_CLEAR_STATE = 'VIEW_LIST_ASSIGNMENT_CLEAR_STATE',
  UPDATE_FILTER_LIST_ASSIGNMENT_REQUEST = 'UPDATE_FILTER_LIST_ASSIGNMENT_REQUEST',
}

export enum DifficultEnum {
  ALL,
  EASY,
  MEDIUM,
  HARD,
}

export enum StatusEnum {
  ALL,
  SOLVED,
  NOT_SOLVED,
  IN_PROGRESS,
}

export interface ViewListAssignmentRequestPayload {
  filterByStatus: StatusEnum
  filterByDifficult: DifficultEnum
  searchBy?: string
  filterByCurrentAccount: boolean
  pageSize?: number
  pageNumber?: number
  filterByTop: boolean
}

export interface ViewListAssignmentErrorResponse {
  error: ErrorMessage
}

export interface Assignment {
  id: number
  title: string
  image: string
  score: number
  totalParticipant: number
  difficulty: DifficultEnum
  status: StatusEnum
  createdBy: string
  createdAt: string
}

export interface ViewListAssignmentResponse {
  messageVi: string
  messageEn: string
  totalAssignment: number
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
export type ViewListAssignmentClearStateAction =
  Action<ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_CLEAR_STATE>
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
  totalAssignment: number
}
