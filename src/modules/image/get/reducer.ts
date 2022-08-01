import { GetImageAction, GetImageActionType, GetImageState } from './type'

/**
 * Reducer for getImage
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

const initialState: GetImageState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
}

/**
 * Reducer Authentication
 * @param state GetImageState
 * @param action GetImageAction
 * @returns
 */
const reducer = (state = initialState, action: GetImageAction) => {
  switch (action.type) {
    case GetImageActionType.GET_IMAGE_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case GetImageActionType.GET_IMAGE_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case GetImageActionType.GET_IMAGE_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case GetImageActionType.GET_IMAGE_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
