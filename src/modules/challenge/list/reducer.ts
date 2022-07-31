import {
  ViewListChallengeAction,
  ViewListChallengeActionType,
  ViewListChallengeState,
} from './type'

/**
 * reducer list challenge
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

const initialState: ViewListChallengeState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  filterRequest: {
    typeData: 0,
    searchBy: '',
    groupID: 0,
    pageSize: 50,
    pageNumber: 1,
    username: '',
    status: 3,
  },
  challenges: [],
  currentSize: 1,
}

const reducer = (state = initialState, action: ViewListChallengeAction) => {
  switch (action.type) {
    case ViewListChallengeActionType.VIEW_LIST_CHALLENGE_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }
    case ViewListChallengeActionType.VIEW_LIST_CHALLENGE_SUCCESS:
      return {
        ...state,
        challenges: action.challenges,
        requesting: false,
        successful: true,
      }
    case ViewListChallengeActionType.VIEW_LIST_CHALLENGE_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case ViewListChallengeActionType.VIEW_LIST_CHALLENGE_CLEAR_STATE:
      return {
        ...initialState,
      }

    case ViewListChallengeActionType.UPDATE_FILTER_LIST_CHALLENGE_REQUEST:
      return {
        ...state,
        filterRequest: {
          typeData: action.typeData,
          searchBy: action.searchBy,
          groupID: action.groupID,
          pageSize: action.pageSize,
          pageNumber: action.pageNumber,
          username: action.username,
          status: action.status,
        },
      }
    default:
      return state
  }
}

export default reducer
