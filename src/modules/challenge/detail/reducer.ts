import {
  ViewDetailChallengeAction,
  ViewDetailChallengeActionType,
  ViewDetailChallengeState,
} from './type'

/**
 * Reducer get detail challenge
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

const initialState: ViewDetailChallengeState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  detail: {
    title: '',
    description: '',
    createdBy: '',
    image: '',
    group: '',
    groupId: 0,
    totalAssignment: 0,
    startAt: '',
    endAt: '',
    status: 0,
    totalParticipial: 0,
  },
  assignmentList: [],
  submits: [],
}

/**
 * Reducer Authentication
 * @param state ViewDetailChallengeState
 * @param action ViewDetailChallengeAction
 * @returns
 */
const reducer = (state = initialState, action: ViewDetailChallengeAction) => {
  switch (action.type) {
    case ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        detail: action.detail,
        assignmentList: action.assignmentList,
        submits: action.submits,
      }

    case ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
