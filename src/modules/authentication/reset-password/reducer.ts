import { ResetPasswordAction, ResetPasswordActionType, ResetPasswordState } from './type'

/**
 * Reducer for login
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

const initialState: ResetPasswordState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
}

/**
 * Reducer Authentication
 * @param state ResetPasswordState
 * @param action ResetPasswordAction
 * @returns
 */
const reducer = (state = initialState, action: ResetPasswordAction) => {
  switch (action.type) {
    case ResetPasswordActionType.RESET_PASSWORD_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ResetPasswordActionType.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case ResetPasswordActionType.RESET_PASSWORD_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case ResetPasswordActionType.RESET_PASSWORD_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
