import {
  RunAssignmentDetailActionType,
  RunAssignmentDetailClearStateAction,
  RunAssignmentDetailRequestAction,
  RunAssignmentDetailRequestPayload,
} from './type'

/**
 * Action for run assignments
 *
 * Version 1.0
 *
 * Date: 21-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 21-07-2022         DuyHV           Create
 */

/**
 * RunAssignmentDetail request action
 * @param param RunAssignmentDetailRequestPayload
 * @returns RunAssignmentDetailRequestAction
 */
export const runAssignmentDetailRequest = ({
  assignmentId,
  challengeId,
  sourceCode,
  language,
}: RunAssignmentDetailRequestPayload): RunAssignmentDetailRequestAction => {
  return {
    type: RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_REQUESTING,
    assignmentId,
    challengeId,
    sourceCode,
    language,
  }
}

/**
 * Clear state action
 * @returns RunAssignmentDetailClearStateAction
 */
export const runAssignmentDetailClearStateRequest = (): RunAssignmentDetailClearStateAction => {
  return {
    type: RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_CLEAR_STATE,
  }
}
