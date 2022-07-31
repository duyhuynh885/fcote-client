import { GetMyProfileState, GetMyProfileActionType, GetMyProfileAction } from './type'

/**
 * type my profile
 *
 * Version 1.0
 *
 * Date: 10-07-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 10-07-2022      HuyNT2711           Create
 */

export const initialStateMyProfile: GetMyProfileState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  user: {
    id: 0,
    username: '',
    email: '',
    // eslint-disable-next-line camelcase
    first_name: '',
    // eslint-disable-next-line camelcase
    last_name: '',
    // eslint-disable-next-line camelcase
    created_at: '',
  },
}

const reducer = (state = initialStateMyProfile, action: GetMyProfileAction) => {
  switch (action.type) {
    case GetMyProfileActionType.GET_USER_PROFILE_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case GetMyProfileActionType.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.user,
        requesting: false,
        successful: true,
      }

    case GetMyProfileActionType.GET_USER_PROFILE_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    default:
      return state
  }
}
export default reducer
