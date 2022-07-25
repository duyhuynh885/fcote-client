import { EditMyProfileAction, EditMyProfileState, EditMyProfileActionType } from './type'

const initialState: EditMyProfileState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
}

const reducer = (state = initialState, action: EditMyProfileAction) => {
  switch (action.type) {
    case EditMyProfileActionType.EDIT_MY_PROFILE_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case EditMyProfileActionType.EDIT_MY_PROFILE_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case EditMyProfileActionType.EDIT_MY_PROFILE_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
      }

    case EditMyProfileActionType.EDIT_MY_PROFILE_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
