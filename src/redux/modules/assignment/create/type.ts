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
}

export interface LanguageCreateAssignment {
  name: string
  timeout: number
}

export interface InputCreateAssignment {
  name: string
  type: string
  description: string
}

export interface OutputCreateAssignment {
  name: string
  type: string
}

export interface InputOutputCreateAssignment {
  input: InputCreateAssignment[]
  output: OutputCreateAssignment
}

export interface TestCaseInputCreateAssignment {
  name: boolean
  type: string
  value: string
}

export interface TestCaseOutputCreateAssignment {
  type: string
  value: string
}

export interface TestCaseCreateAssignment {
  isPrivate: boolean
  input: TestCaseInputCreateAssignment[]
  output: TestCaseOutputCreateAssignment
}

export interface CreateAssignmentRequestPayload {
  settings: SettingCreateAssignment
  languages: LanguageCreateAssignment[]
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
