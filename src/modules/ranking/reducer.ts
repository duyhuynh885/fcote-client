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

import { RankingAction, RankingActionType, RankingState } from './type'

const initialState: RankingState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  data: [],
  rankingTypeRequest: {
    typeRanking: 'university'
  }
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

    default:
      return state
  }
}

export default reducer
