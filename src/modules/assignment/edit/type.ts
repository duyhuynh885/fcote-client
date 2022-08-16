import { DifficultEnum } from '../list/type'

/**
 * Type for edit assignment
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
 * 22-06-2022         DuyHV           Edit
 */

export enum EditAssignmentActionType {
  EDIT_ASSIGNMENT_REQUESTING = 'EDIT_ASSIGNMENT_REQUESTING',
  EDIT_ASSIGNMENT_SUCCESS = 'EDIT_ASSIGNMENT_SUCCESS',
  EDIT_ASSIGNMENT_ERROR = 'EDIT_ASSIGNMENT_ERROR',
  EDIT_ASSIGNMENT_CLEAR_STATE = 'EDIT_ASSIGNMENT_CLEAR_STATE',
}

export interface SettingEditAssignment {
  name: string
  description?: string
  difficulty: DifficultEnum
}

export interface LanguageEditAssignment {
  language: string
  timeLimit: number
}

export interface InputEditAssignment {
  order: number
  name: string
  type: number
  description?: string
}

export interface OutputEditAssignment {
  order: number
  name: string
  type: number
  description?: string
}

export interface InputOutputEditAssignment {
  input: InputEditAssignment[]
  output: OutputEditAssignment
}

export interface TestCaseInputEditAssignment {
  order: number
  name: string
  type: number
  value: string
}

export interface TestCaseOutputEditAssignment {
  order: number
  name: string
  type: number
  value: string
}

export interface TestCaseEditAssignment {
  isPrivate: boolean
  order: number
  input: TestCaseInputEditAssignment[]
  output: TestCaseOutputEditAssignment
}

export interface EditAssignmentRequestPayload {
  setting: SettingEditAssignment
  language: LanguageEditAssignment[]
  inputOutput: InputOutputEditAssignment
  testCase: TestCaseEditAssignment[]
}

export interface EditAssignmentErrorResponse {
  error: ErrorMessage
}

export interface EditAssignmentResponse {
  messageVi: string
  messageEn: string
}

export type EditAssignmentRequestAction = ActionWithPayload<
  EditAssignmentActionType.EDIT_ASSIGNMENT_REQUESTING,
  EditAssignmentRequestPayload
>
export type EditAssignmentSuccessAction = ActionWithPayload<
  EditAssignmentActionType.EDIT_ASSIGNMENT_SUCCESS,
  EditAssignmentResponse
>
export type EditAssignmentErrorAction = ActionWithPayload<
  EditAssignmentActionType.EDIT_ASSIGNMENT_ERROR,
  EditAssignmentErrorResponse
>
export type EditAssignmentClearStateAction =
  Action<EditAssignmentActionType.EDIT_ASSIGNMENT_CLEAR_STATE>

export type EditAssignmentAction =
  | EditAssignmentRequestAction
  | EditAssignmentSuccessAction
  | EditAssignmentErrorAction
  | EditAssignmentClearStateAction

export interface EditAssignmentState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
}
