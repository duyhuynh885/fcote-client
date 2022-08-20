import {
  PreviewEditAssignmentActionType,
  PreviewEditAssignmentClearStateAction,
  PreviewEditAssignmentRequestAction,
  PreviewEditAssignmentRequestPayload,
} from './type'

/**
 * Action for previewEdit assignments
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

/**
 * PreviewEditAssignment request action
 * @param param PreviewEditAssignmentRequestPayload
 * @returns PreviewEditAssignmentRequestAction
 */
export const previewEditAssignmentRequest = ({
  id,
}: PreviewEditAssignmentRequestPayload): PreviewEditAssignmentRequestAction => {
  return {
    type: PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_REQUESTING,
    id,
  }
}

/**
 * Clear state action
 * @returns PreviewEditAssignmentClearStateAction
 */
export const previewEditAssignmentClearStateRequest = (): PreviewEditAssignmentClearStateAction => {
  return {
    type: PreviewEditAssignmentActionType.PREVIEW_EDIT_ASSIGNMENT_CLEAR_STATE,
  }
}
