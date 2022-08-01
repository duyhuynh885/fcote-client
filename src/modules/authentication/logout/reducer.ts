import { LogoutAction, LogoutActionType, LogoutState } from './type'

/**
 * Reducer for logout
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

const initialState: LogoutState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
}

/**
 * Reducer Authentication
 * @param state LogoutState
 * @param action LogoutAction
 * @returns
 */
const reducer = (state = initialState, action: LogoutAction) => {
  switch (action.type) {
    case LogoutActionType.LOGOUT_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case LogoutActionType.LOGOUT_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case LogoutActionType.LOGOUT_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case LogoutActionType.LOGOUT_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
