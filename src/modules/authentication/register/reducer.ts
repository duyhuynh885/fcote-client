import { RegisterAction, RegisterActionType, RegisterState } from './type'

/**
 * Reducer for register
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

const initialState: RegisterState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
}

/**
 * Reducer Authentication
 * @param state RegisterState
 * @param action AuthAction
 * @returns
 */
const reducer = (state = initialState, action: RegisterAction) => {
  switch (action.type) {
    case RegisterActionType.REGISTER_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case RegisterActionType.REGISTER_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case RegisterActionType.REGISTER_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
      }

    case RegisterActionType.REGISTER_CLEAR_STATE:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default reducer
