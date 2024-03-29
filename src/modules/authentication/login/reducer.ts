import { LoginAction, LoginActionType, LoginState, User } from './type'

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

const initialState: LoginState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  userInfo: {} as User,
}

/**
 * Reducer Authentication
 * @param state LoginState
 * @param action LoginAction
 * @returns
 */
const reducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
    case LoginActionType.LOGIN_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case LoginActionType.LOGIN_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
        userInfo: action.user,
      }

    case LoginActionType.LOGIN_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case LoginActionType.LOGIN_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
