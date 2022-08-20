import { DifficultEnum } from '../list/type'

/**
 * Type for previewEdit assignment
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
 * 22-06-2022         DuyHV           PreviewEdit
 */

export enum PreviewEditAssignmentActionType {
  PREVIEW_EDIT_ASSIGNMENT_REQUESTING = 'PREVIEW_EDIT_ASSIGNMENT_REQUESTING',
  PREVIEW_EDIT_ASSIGNMENT_SUCCESS = 'PREVIEW_EDIT_ASSIGNMENT_SUCCESS',
  PREVIEW_EDIT_ASSIGNMENT_ERROR = 'PREVIEW_EDIT_ASSIGNMENT_ERROR',
  PREVIEW_EDIT_ASSIGNMENT_CLEAR_STATE = 'PREVIEW_EDIT_ASSIGNMENT_CLEAR_STATE',
}

export interface SettingPreviewEditAssignment {
  name: string
  description?: string
  difficulty: DifficultEnum
}

export interface LanguagePreviewEditAssignment {
  language: string
  timeLimit: number
}

export interface InputPreviewEditAssignment {
  order: number
  name: string
  type: number
  description?: string
}

export interface OutputPreviewEditAssignment {
  order: number
  name: string
  type: number
  description?: string
}

export interface InputOutputPreviewEditAssignment {
  input: InputPreviewEditAssignment[]
  output: OutputPreviewEditAssignment
}

export interface TestCaseInputPreviewEditAssignment {
  order: number
  name: string
  type: number
  value: string
}

export interface TestCaseOutputPreviewEditAssignment {
  order: number
  name: string
  type: number
  value: string
}

export interface TestCasePreviewEditAssignment {
  isPrivate: boolean
  order: number
  input: TestCaseInputPreviewEditAssignment[]
  output: TestCaseOutputPreviewEditAssignment
}

export interface PreviewEditAssignmentRequestPayload {
  id: number
}

export interface PreviewEditAssignmentErrorResponse {
  error: ErrorMessage
}

export interface PreviewEditAssignmentResponse {
  messageVi: string
  messageEn: string
  setting: SettingPreviewEditAssignment
  language: LanguagePreviewEditAssignment[]
  inputOutput: InputOutputPreviewEditAssignment
  testCase: TestCasePreviewEditAssignment[]
}

export type PreviewEditAssignmentRequestAction = ActionWithPayload<
  PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_REQUESTING,
  PreviewEditAssignmentRequestPayload
>
export type PreviewEditAssignmentSuccessAction = ActionWithPayload<
  PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_SUCCESS,
  PreviewEditAssignmentResponse
>
export type PreviewEditAssignmentErrorAction = ActionWithPayload<
  PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_ERROR,
  PreviewEditAssignmentErrorResponse
>
export type PreviewEditAssignmentClearStateAction =
  Action<PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_CLEAR_STATE>

export type PreviewEditAssignmentAction =
  | PreviewEditAssignmentRequestAction
  | PreviewEditAssignmentSuccessAction
  | PreviewEditAssignmentErrorAction
  | PreviewEditAssignmentClearStateAction

export interface PreviewEditAssignmentState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  setting: SettingPreviewEditAssignment
  language: LanguagePreviewEditAssignment[]
  inputOutput: InputOutputPreviewEditAssignment
  testCase: TestCasePreviewEditAssignment[]
}
