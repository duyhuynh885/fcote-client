import {
  SubmitAssignmentDetailActionType,
  SubmitAssignmentDetailClearStateAction,
  SubmitAssignmentDetailRequestAction,
  SubmitAssignmentDetailRequestPayload,
} from './type'

/**
 * Action for create assignments
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

/**
 * SubmitAssignmentDetail request action
 * @param param SubmitAssignmentDetailRequestPayload
 * @returns SubmitAssignmentDetailRequestAction
 */
export const submitAssignmentDetailRequest = ({
  assignmentId,
  challengeId,
  sourceCode,
  language,
}: SubmitAssignmentDetailRequestPayload): SubmitAssignmentDetailRequestAction => {
  return {
    type: SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_REQUESTING,
    assignmentId,
    challengeId,
    sourceCode,
    language,
  }
}

/**
 * Clear state action
 * @returns SubmitAssignmentDetailClearStateAction
 */
export const submitAssignmentDetailClearStateRequest = (): SubmitAssignmentDetailClearStateAction => {
  return {
    type: SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_CLEAR_STATE,
  }
}
