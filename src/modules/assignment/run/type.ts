/**
 * Type for run assignments
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

export enum RunAssignmentDetailActionType {
  RUN_ASSIGNMENT_DETAIL_REQUESTING = 'RUN_ASSIGNMENT_DETAIL_REQUESTING',
  RUN_ASSIGNMENT_DETAIL_SUCCESS = 'RUN_ASSIGNMENT_DETAIL_SUCCESS',
  RUN_ASSIGNMENT_DETAIL_ERROR = 'RUN_ASSIGNMENT_DETAIL_ERROR',
  RUN_ASSIGNMENT_DETAIL_CLEAR_STATE = 'RUN_ASSIGNMENT_DETAIL_CLEAR_STATE',
}

export interface RunAssignmentDetailRequestPayload {
  assignmentId: number
  challengeId: number
  sourceCode: string
  language: number
}

export interface RunAssignmentDetailErrorResponse {
  error: ErrorMessage
}

export interface RunAssignmentDetailResponse {
  result: Result[]
  sourceCode: string
}

export type ViewListAssignmentRequestAction = ActionWithPayload<
  RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_REQUESTING,
  RunAssignmentDetailRequestPayload
>

export type RunAssignmentDetailRequestAction = ActionWithPayload<
  RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_REQUESTING,
  RunAssignmentDetailRequestPayload
>
export type RunAssignmentDetailSuccessAction = ActionWithPayload<
  RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_SUCCESS,
  RunAssignmentDetailResponse
>
export type RunAssignmentDetailErrorAction = ActionWithPayload<
  RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_ERROR,
  RunAssignmentDetailErrorResponse
>
export type RunAssignmentDetailClearStateAction =
  Action<RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_CLEAR_STATE>

export type RunAssignmentDetailAction =
  | RunAssignmentDetailRequestAction
  | RunAssignmentDetailSuccessAction
  | RunAssignmentDetailErrorAction
  | RunAssignmentDetailClearStateAction

export interface RunAssignmentDetailState {
  requesting: boolean
  successful: boolean
  errors: ErrorMessage
}
