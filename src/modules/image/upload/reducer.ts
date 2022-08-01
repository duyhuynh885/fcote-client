import { UploadImageAction, UploadImageActionType, UploadImageState } from './type'

/**
 * Reducer for uploadImage
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

const initialState: UploadImageState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
}

/**
 * Reducer Authentication
 * @param state UploadImageState
 * @param action UploadImageAction
 * @returns
 */
const reducer = (state = initialState, action: UploadImageAction) => {
  switch (action.type) {
    case UploadImageActionType.UPLOAD_IMAGE_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case UploadImageActionType.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case UploadImageActionType.UPLOAD_IMAGE_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case UploadImageActionType.UPLOAD_IMAGE_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
