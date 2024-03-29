import {
  UpdateFilterListAssignmentAction,
  ViewListAssignmentActionType,
  ViewListAssignmentClearStateAction,
  ViewListAssignmentRequestAction,
  ViewListAssignmentRequestPayload,
} from './type'

/**
 * Action for fetch list assignments
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
 * ViewListAssignment request action
 * @param param ViewListAssignmentRequestPayload
 * @returns ViewListAssignmentRequestAction
 */
export const fetchListAssignmentRequest = ({
  filterByStatus,
  filterByDifficult,
  searchBy,
  filterByCurrentAccount,
  pageSize,
  pageNumber,
  filterByTop,
}: ViewListAssignmentRequestPayload): ViewListAssignmentRequestAction => {
  return {
    type: ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_REQUESTING,
    filterByStatus,
    filterByDifficult,
    searchBy,
    filterByCurrentAccount,
    pageSize,
    pageNumber,
    filterByTop,
  }
}

/**
 * updateFilterListAssignmentRequest request action
 * @param param ViewListAssignmentRequestPayload
 * @returns ViewListAssignmentRequestAction
 */
export const updateFilterListAssignmentRequest = ({
  filterByStatus,
  filterByDifficult,
  searchBy,
  filterByCurrentAccount,
  pageSize,
  pageNumber,
  filterByTop,
}: ViewListAssignmentRequestPayload): UpdateFilterListAssignmentAction => {
  return {
    type: ViewListAssignmentActionType.UPDATE_FILTER_LIST_ASSIGNMENT_REQUEST,
    filterByStatus,
    filterByDifficult,
    searchBy,
    filterByCurrentAccount,
    pageSize,
    pageNumber,
    filterByTop,
  }
}

/**
 * Clear state action
 * @returns ViewListAssignmentClearStateAction
 */
export const viewListAssignmentClearStateRequest = (): ViewListAssignmentClearStateAction => {
  return {
    type: ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_CLEAR_STATE,
  }
}
