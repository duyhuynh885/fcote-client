import {
  ViewAssignmentDetailAction,
  ViewAssignmentDetailActionType,
  ViewAssignmentDetailResponse,
  ViewAssignmentDetailState,
} from './type'

/**
 * Reducer for create assignment
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

const initialState: ViewAssignmentDetailState = {
  requesting: false,
  successful: false,
  errors: {} as ErrorMessage,
  data: {} as ViewAssignmentDetailResponse,
}

/**
 * Reducer Authentication
 * @param state ViewAssignmentDetailState
 * @param action ViewAssignmentDetailAction
 * @returns
 */
const reducer = (state = initialState, action: ViewAssignmentDetailAction) => {
  switch (action.type) {
    case ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        data: {
          detail: action.detail,
          languages: action.languages,
          parameters: action.parameters,
          testCases: action.testCases,
        },
      }

    case ViewAssignmentDetailActionType.VIEW_ASSIGNMENT_DETAIL_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case ViewAssignmentDetailActionType.CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
