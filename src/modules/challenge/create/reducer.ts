import { CreateChallengeAction, CreateChallengeActionType, CreateChallengeState } from './type'

/**
 * Reducer for create challenge
 *
 * Version 1.0
 *
 * Date: 27-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 27-07-2022         DuyHV           Create
 */

const initialState: CreateChallengeState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
}

/**
 * Reducer Authentication
 * @param state CreateChallengeState
 * @param action CreateChallengeAction
 * @returns
 */
const reducer = (state = initialState, action: CreateChallengeAction) => {
  switch (action.type) {
    case CreateChallengeActionType.CREATE_CHALLENGE_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case CreateChallengeActionType.CREATE_CHALLENGE_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case CreateChallengeActionType.CREATE_CHALLENGE_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case CreateChallengeActionType.CREATE_CHALLENGE_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
