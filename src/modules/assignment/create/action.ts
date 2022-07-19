import {
  CreateAssignmentActionType,
  CreateAssignmentClearStateAction,
  CreateAssignmentRequestAction,
  CreateAssignmentRequestPayload,
} from './type'

/**
 * Action for create assignments
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

/**
 * CreateAssignment request action
 * @param param CreateAssignmentRequestPayload
 * @returns CreateAssignmentRequestAction
 */
export const createAssignmentRequest = ({
  setting,
  language,
  inputOutput,
  authorSolution,
  testCase,
}: CreateAssignmentRequestPayload): CreateAssignmentRequestAction => {
  return {
    type: CreateAssignmentActionType.CREATE_ASSIGNMENT_REQUESTING,
    setting,
    language,
    inputOutput,
    authorSolution,
    testCase,
  }
}

/**
 * Clear state action
 * @returns CreateAssignmentClearStateAction
 */
export const clearState = (): CreateAssignmentClearStateAction => {
  return {
    type: CreateAssignmentActionType.CLEAR_STATE,
  }
}
