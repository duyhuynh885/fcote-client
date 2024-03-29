import {
  DifficultEnum,
  StatusEnum,
  ViewListAssignmentAction,
  ViewListAssignmentActionType,
  ViewListAssignmentState,
} from './type'

/**
 * Reducer for fetch list assignments
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

const initialState: ViewListAssignmentState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  filterRequest: {
    filterByStatus: StatusEnum.ALL,
    filterByDifficult: DifficultEnum.ALL,
    searchBy: undefined,
    filterByCurrentAccount: false,
    pageSize: 10,
    pageNumber: 1,
    filterByTop: false,
  },
  assignments: [],
  totalAssignment: 0,
}

/**
 * Reducer Authentication
 * @param state ViewListAssignmentState
 * @param action ViewListAssignmentAction
 * @returns
 */
const reducer = (state = initialState, action: ViewListAssignmentAction) => {
  switch (action.type) {
    case ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_SUCCESS:
      return {
        ...state,
        totalAssignment: action.totalAssignment,
        assignments: action.assignments,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case ViewListAssignmentActionType.VIEW_LIST_ASSIGNMENT_CLEAR_STATE:
      return {
        ...initialState,
      }

    case ViewListAssignmentActionType.UPDATE_FILTER_LIST_ASSIGNMENT_REQUEST:
      return {
        ...state,
        filterRequest: {
          filterByStatus: action.filterByStatus,
          filterByDifficult: action.filterByDifficult,
          searchBy: action.searchBy,
          filterByCurrentAccount: action.filterByCurrentAccount,
          pageSize: action.pageSize,
          pageNumber: action.pageNumber,
          filterByTop: action.filterByTop,
        },
      }

    default:
      return state
  }
}

export default reducer
