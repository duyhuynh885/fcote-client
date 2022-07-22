import {
  SubmitAssignmentDetailAction,
  SubmitAssignmentDetailActionType,
  SubmitAssignmentDetailState,
  Summarize,
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

const initialState: SubmitAssignmentDetailState = {
  requesting: false,
  successful: false,
  errors: {} as ErrorMessage,
  summarize: {} as Summarize,
  result: [],
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
        summarize: action.summarize,
        result: action.result,
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

    case SubmitAssignmentDetailActionType.CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
