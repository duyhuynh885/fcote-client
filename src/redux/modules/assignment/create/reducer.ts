import {
  CreateAssignmentAction,
  CreateAssignmentActionType,
  CreateAssignmentState,
} from './type'

/**
 * Reducer for create assignment
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

const initialState: CreateAssignmentState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
}

/**
 * Reducer Authentication
 * @param state CreateAssignmentState
 * @param action CreateAssignmentAction
 * @returns
 */
const reducer = (state = initialState, action: CreateAssignmentAction) => {
  switch (action.type) {
    case CreateAssignmentActionType.CREATE_ASSIGNMENT_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case CreateAssignmentActionType.CREATE_ASSIGNMENT_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case CreateAssignmentActionType.CREATE_ASSIGNMENT_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case CreateAssignmentActionType.CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
