import {
  ViewAssignmentDetailActionType,
  ViewAssignmentDetailClearStateAction,
  ViewAssignmentDetailRequestAction,
  ViewAssignmentDetailRequestPayload,
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
 * ViewAssignmentDetail request action
 * @param param ViewAssignmentDetailRequestPayload
 * @returns ViewAssignmentDetailRequestAction
 */
export const fetchDataAssignmentDetailRequest = ({
  id,
}: ViewAssignmentDetailRequestPayload): ViewAssignmentDetailRequestAction => {
  return {
    type: ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_REQUESTING,
    id,
  }
}

/**
 * RunAssignmentSuccess request action
 * @param param ViewAssignmentDetailRequestPayload
 * @returns ViewAssignmentDetailRequestAction
 */
export const runAssignmentSuccess = ({
  id,
}: ViewAssignmentDetailRequestPayload): ViewAssignmentDetailRequestAction => {
  return {
    type: ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_REQUESTING,
    id,
  }
}

/**
 * SubmitAssignmentSuccess request action
 * @param param ViewAssignmentDetailRequestPayload
 * @returns ViewAssignmentDetailRequestAction
 */
export const submitAssignmentSuccess = ({
  id,
}: ViewAssignmentDetailRequestPayload): ViewAssignmentDetailRequestAction => {
  return {
    type: ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_REQUESTING,
    id,
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
