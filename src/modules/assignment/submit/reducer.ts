import {
  SubmitAssignmentDetailAction,
  SubmitAssignmentDetailActionType,
  SubmitAssignmentDetailState,
} from './type'

/**
 * Reducer for submit assignments
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

const initialState: SubmitAssignmentDetailState = {
  requesting: false,
  successful: false,
  errors: {} as ErrorMessage,
}

/**
 * Reducer Authentication
 * @param state SubmitAssignmentDetailState
 * @param action SubmitAssignmentDetailAction
 * @returns
 */
const reducer = (state = initialState, action: SubmitAssignmentDetailAction) => {
  switch (action.type) {
    case SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
      }

    case SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case SubmitAssignmentDetailActionType.SUBMIT_ASSIGNMENT_DETAIL_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
