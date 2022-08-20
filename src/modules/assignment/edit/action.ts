import {
  EditAssignmentActionType,
  EditAssignmentClearStateAction,
  EditAssignmentRequestAction,
  EditAssignmentRequestPayload,
} from './type'

/**
 * Action for edit assignments
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

/**
 * EditAssignment request action
 * @param param EditAssignmentRequestPayload
 * @returns EditAssignmentRequestAction
 */
export const editAssignmentRequest = ({
  id,
  setting,
  language,
  inputOutput,
  testCase,
}: EditAssignmentRequestPayload): EditAssignmentRequestAction => {
  return {
    type: EditAssignmentActionType.EDIT_ASSIGNMENT_REQUESTING,
    id,
    setting,
    language,
    inputOutput,
    testCase,
  }
}

/**
 * Clear state action
 * @returns EditAssignmentClearStateAction
 */
export const editAssignmentClearStateRequest = (): EditAssignmentClearStateAction => {
  return {
    type: EditAssignmentActionType.EDIT_ASSIGNMENT_CLEAR_STATE,
  }
}
