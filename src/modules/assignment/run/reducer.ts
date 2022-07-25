import {
  RunAssignmentDetailAction,
  RunAssignmentDetailActionType,
  RunAssignmentDetailState,
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

const initialState: RunAssignmentDetailState = {
  requesting: false,
  successful: false,
  errors: {} as ErrorMessage,
}

/**
 * Reducer Authentication
 * @param state RunAssignmentDetailState
 * @param action RunAssignmentDetailAction
 * @returns
 */
const reducer = (state = initialState, action: RunAssignmentDetailAction) => {
  switch (action.type) {
    case RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
      }

    case RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case RunAssignmentDetailActionType.RUN_ASSIGNMENT_DETAIL_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
