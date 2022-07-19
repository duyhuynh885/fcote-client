import { DifficultEnum } from '../list/type'

/**
 * Type for create assignment
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

export enum CreateAssignmentActionType {
  CREATE_ASSIGNMENT_REQUESTING = 'CREATE_ASSIGNMENT_REQUESTING',
  CREATE_ASSIGNMENT_SUCCESS = 'CREATE_ASSIGNMENT_SUCCESS',
  CREATE_ASSIGNMENT_ERROR = 'CREATE_ASSIGNMENT_ERROR',
  CLEAR_STATE = 'CLEAR_STATE',
}

export interface SettingCreateAssignment {
  name: string
  description: string
  difficulty: DifficultEnum
}

export interface LanguageCreateAssignment {
  language: string
  time_limit: number
}

export interface InputCreateAssignment {
  order: number
  name: string
  type: number
  description: string
}

export interface OutputCreateAssignment {
  order: number
  type: number
  description: string
}

export interface InputOutputCreateAssignment {
  input: InputCreateAssignment[]
  output: OutputCreateAssignment
}

export interface TestCaseInputCreateAssignment {
  order: number
  name: boolean
  type: string
  value: string
}

export interface TestCaseOutputCreateAssignment {
  order: number
  type: string
  value: string
}

export interface TestCaseCreateAssignment {
  isPrivate: boolean
  order: number
  input: TestCaseInputCreateAssignment[]
  output: TestCaseOutputCreateAssignment
}

export interface CreateAssignmentRequestPayload {
  setting: SettingCreateAssignment
  language: LanguageCreateAssignment[]
  inputOutput: InputOutputCreateAssignment
  authorSolution: string
  testCase: TestCaseCreateAssignment[]
}

export interface CreateAssignmentErrorResponse {
  error: ErrorMessage
}

export interface CreateAssignmentResponse {
  messageVi: string
  messageEn: string
}

export type CreateAssignmentRequestAction = ActionWithPayload<
  CreateAssignmentActionType.CREATE_ASSIGNMENT_REQUESTING,
  CreateAssignmentRequestPayload
>
export type CreateAssignmentSuccessAction = ActionWithPayload<
  CreateAssignmentActionType.CREATE_ASSIGNMENT_SUCCESS,
  CreateAssignmentResponse
>
export type CreateAssignmentErrorAction = ActionWithPayload<
  CreateAssignmentActionType.CREATE_ASSIGNMENT_ERROR,
  CreateAssignmentErrorResponse
>
export type CreateAssignmentClearStateAction = Action<CreateAssignmentActionType.CLEAR_STATE>

export type CreateAssignmentAction =
  | CreateAssignmentRequestAction
  | CreateAssignmentSuccessAction
  | CreateAssignmentErrorAction
  | CreateAssignmentClearStateAction

export interface CreateAssignmentState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
}
