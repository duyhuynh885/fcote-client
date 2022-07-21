/**
 * Type for create assignment
 *
 * Version 1.0
 *
 * Date: 13-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 13-07-2022         DuyHV           Create
 */

export enum ViewAssignmentDetailActionType {
  VIEW_ASSIGNMENT_DETAIL_REQUESTING = 'VIEW_ASSIGNMENT_DETAIL_REQUESTING',
  VIEW_ASSIGNMENT_DETAIL_SUCCESS = 'VIEW_ASSIGNMENT_DETAIL_SUCCESS',
  VIEW_ASSIGNMENT_DETAIL_ERROR = 'VIEW_ASSIGNMENT_DETAIL_ERROR',
  CLEAR_STATE = 'CLEAR_STATE',
}

export interface Detail {
  id: number
  title: string
  description: string
  sample: string
  difficulty: number
  total_testCase: number
  score: number
  characterLimit: number
  totalParticipant: number
  createdBy: string
}

export interface Language {
  id: number
  language: string
  timeLimit: number
}

export interface Parameter {
  id: number
  assignment: number
  order: number
  type: number
  name: string
  dataType: number
  description: string
}

export interface TestCase {
  id: number
  assignment: number
  order: number
  element: Element[]
  isPrivate: boolean
}

export interface Element {
  id: number
  testCase: number
  order: number
  type: number
  dataType: number
  value: string
}

export interface ViewAssignmentDetailRequestPayload {
  id: number
}

export interface ViewAssignmentDetailErrorResponse {
  error: ErrorMessage
}

export interface ViewAssignmentDetailResponse {
  detail: Detail
  languages: Language[]
  parameters: Parameter[]
  testCases: TestCase[]
}

export type ViewListAssignmentRequestAction = ActionWithPayload<
ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_REQUESTING,
ViewAssignmentDetailRequestPayload
>

export type ViewAssignmentDetailRequestAction = ActionWithPayload<
  ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_REQUESTING,
  ViewAssignmentDetailRequestPayload
>
export type ViewAssignmentDetailSuccessAction = ActionWithPayload<
  ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_SUCCESS,
  ViewAssignmentDetailResponse
>
export type ViewAssignmentDetailErrorAction = ActionWithPayload<
  ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_ERROR,
  ViewAssignmentDetailErrorResponse
>
export type ViewAssignmentDetailClearStateAction =
  Action<ViewAssignmentDetailActionType.CLEAR_STATE>

export type ViewAssignmentDetailAction =
  | ViewAssignmentDetailRequestAction
  | ViewAssignmentDetailSuccessAction
  | ViewAssignmentDetailErrorAction
  | ViewAssignmentDetailClearStateAction

export interface ViewAssignmentDetailState {
  requesting: boolean
  successful: boolean
  errors: ErrorMessage
  data: ViewAssignmentDetailResponse
}
