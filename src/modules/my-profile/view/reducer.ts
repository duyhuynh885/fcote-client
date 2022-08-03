import { ViewMyProfileState, ViewMyProfileActionType, ViewMyProfileAction } from './type'

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

export const initialStateMyProfile: ViewMyProfileState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  user: {
    userId: '',
    avatar: '',
    firstName: '',
    lastName: '',
    username: '',
    organizationTitle: '',
    city: '',
    country: '',
    email: '',
    phone: '',
    gender: '',
    createdAt: '',
  },
  assignmentCompleted: {
    numberAssignmentCompletedFollowHard: 0,
    numberAssignmentCompletedFollowMedium: 0,
    numberAssignmentCompletedFollowEasy: 0,
    totalScore: 0,
  },
}

const reducer = (state = initialStateMyProfile, action: ViewMyProfileAction) => {
  switch (action.type) {
    case ViewMyProfileActionType.VIEW_MY_PROFILE_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ViewMyProfileActionType.VIEW_MY_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.user,
        assignmentCompleted: action.assignmentCompleted,
        requesting: false,
        successful: true,
      }

    case ViewMyProfileActionType.VIEW_MY_PROFILE_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case ViewMyProfileActionType.VIEW_MY_PROFILE_CLEAR_STATE:
      return {
        ...initialStateMyProfile,
      }
    default:
      return state
  }
}
export default reducer
