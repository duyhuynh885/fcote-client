import { EditAssignmentAction, EditAssignmentActionType, EditAssignmentState } from './type'

/**
 * Reducer for edit assignment
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
 * 22-06-2022         DuyHV           Edit
 */

const initialState: EditAssignmentState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
}

/**
 * Reducer Authentication
 * @param state EditAssignmentState
 * @param action EditAssignmentAction
 * @returns
 */
const reducer = (state = initialState, action: EditAssignmentAction) => {
  switch (action.type) {
    case EditAssignmentActionType.EDIT_ASSIGNMENT_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case EditAssignmentActionType.EDIT_ASSIGNMENT_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case EditAssignmentActionType.EDIT_ASSIGNMENT_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case EditAssignmentActionType.EDIT_ASSIGNMENT_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
