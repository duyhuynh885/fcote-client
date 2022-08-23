/**
 * Type for submit assignments
 *
 * Version 1.0
 *
 * Date: 26-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 26-07-2022         DuyHV           Create
 */

import { Result } from '../detail/type'

export enum SubmitAssignmentDetailActionType {
  SUBMIT_ASSIGNMENT_DETAIL_REQUESTING = 'SUBMIT_ASSIGNMENT_DETAIL_REQUESTING',
  SUBMIT_ASSIGNMENT_DETAIL_SUCCESS = 'SUBMIT_ASSIGNMENT_DETAIL_SUCCESS',
  SUBMIT_ASSIGNMENT_DETAIL_ERROR = 'SUBMIT_ASSIGNMENT_DETAIL_ERROR',
  SUBMIT_ASSIGNMENT_DETAIL_CLEAR_STATE = 'SUBMIT_ASSIGNMENT_DETAIL_CLEAR_STATE',
}

export interface Summarize {
  score: number
  passAll: boolean
}

export interface SubmitAssignmentDetailRequestPayload {
  assignmentId: number
  challengeId: number
  sourceCode: string
  language: number
}

export interface SubmitAssignmentDetailErrorResponse {
  error: ErrorMessage
}

export interface SubmitAssignmentDetailResponse {
  summarize: Summarize
  result: Result[]
  availableSubmission: number
}

export type ViewListAssignmentRequestAction = ActionWithPayload<
  SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_REQUESTING,
  SubmitAssignmentDetailRequestPayload
>

export type SubmitAssignmentDetailRequestAction = ActionWithPayload<
  SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_REQUESTING,
  SubmitAssignmentDetailRequestPayload
>
export type SubmitAssignmentDetailSuccessAction = ActionWithPayload<
  SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_SUCCESS,
  SubmitAssignmentDetailResponse
>
export type SubmitAssignmentDetailErrorAction = ActionWithPayload<
  SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_ERROR,
  SubmitAssignmentDetailErrorResponse
>
export type SubmitAssignmentDetailClearStateAction =
  Action<SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_CLEAR_STATE>

export type SubmitAssignmentDetailAction =
  | SubmitAssignmentDetailRequestAction
  | SubmitAssignmentDetailSuccessAction
  | SubmitAssignmentDetailErrorAction
  | SubmitAssignmentDetailClearStateAction

export interface SubmitAssignmentDetailState {
  requesting: boolean
  successful: boolean
  errors: ErrorMessage
}
