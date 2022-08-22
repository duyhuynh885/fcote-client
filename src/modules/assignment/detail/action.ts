import {
  ViewAssignmentDetailActionType,
  ViewAssignmentDetailClearStateAction,
  ViewAssignmentDetailRequestAction,
  ViewAssignmentDetailRequestPayload,
} from './type'

/**
 * Action for get assignments detail
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

/**
 * ViewAssignmentDetail request action
 * @param param ViewAssignmentDetailRequestPayload
 * @returns ViewAssignmentDetailRequestAction
 */
export const fetchDataAssignmentDetailRequest = ({
  id,
  challengeId,
}: ViewAssignmentDetailRequestPayload): ViewAssignmentDetailRequestAction => {
  return {
    type: ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_REQUESTING,
    id,
    challengeId,
  }
}

/**
 * Clear state action
 * @returns ViewAssignmentDetailClearStateAction
 */
export const viewAssignmentDetailClearStateRequest = (): ViewAssignmentDetailClearStateAction => {
  return {
    type: ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_CLEAR_STATE,
  }
}
