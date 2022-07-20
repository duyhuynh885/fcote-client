/**
 * Reducer for Ranking
 *
 * Version 1.0
 *
 * Date: 13-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 13-07-2022         TuanLA           Create
 */

import { RankingAction, RankingActionType, RankingState, RankingTypeState } from './type'

const initialState: RankingState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  top3: [],
  rankingList: [],
  rankingTypeRequest: {
    typeRanking: RankingTypeState.RANKING_UNIVERSITY,
    pageSize: 50,
    pageNumber: 0,
  },
}
/**
 * @param  {} state=initialState
 * @param  {RankingAction} action
 * @returns returnstate
 */
const reducer = (state = initialState, action: RankingAction) => {
  switch (action.type) {
    case RankingActionType.RANKING_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case RankingActionType.RANKING_SUCCESS:
      return {
        ...state,
        top3: action.top3,
        rankingList: action.ranking_list,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case RankingActionType.RANKING_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case RankingActionType.UPDATE_FILTER_RANKING:
      return {
        ...state,
        rankingTypeRequest: {
          typeRanking: action.typeRanking,
          pageSize: action.pageSize,
          pageNumber: action.pageNumber,
        },
      }

    default:
      return state
  }
}

export default reducer
