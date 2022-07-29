import { ViewMyProfileState, ViewMyProfileAcionType, ViewMyProfileAction } from './type'

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
  userAssignmentRequest: {
    username: '',
    typeData: 4,
    firstName: '',
    lastName: '',
    organization: '',
    city: '',
    country: '',
    phone: '',
    gender: '',
  },
  challengeCompletedRequest: {
    username: '',
    typeData: 4,
  },
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
  challengeCompleted: {
    listChallengeCompleted: [],
    currentSize: 0,
  },
}

const reducer = (state = initialStateMyProfile, action: ViewMyProfileAction) => {
  switch (action.type) {
    case ViewMyProfileAcionType.VIEW_USER_ASSIGNMENT_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ViewMyProfileAcionType.VIEW_USER_ASSIGNMENT_SUCCESS:
      return {
        ...state,
        user: action.user,
        assignmentCompleted: action.assignmentCompleted,
        requesting: false,
        successful: true,
      }

    case ViewMyProfileAcionType.VIEW_USER_ASSIGNMENT_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case ViewMyProfileAcionType.VIEW_CHALLENGE_COMPLETED_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ViewMyProfileAcionType.VIEW_CHALLENGE_COMPLETED_SUCCESS:
      return {
        ...state,
        challengeCompleted: {
          listChallengeCompleted: action.challenges,
          currentSize: action.currentSize,
        },
        requesting: false,
        successful: true,
      }

    case ViewMyProfileAcionType.VIEW_CHALLENGE_COMPLETED_ERROR:
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
