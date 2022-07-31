/**
 * Action Type for Ranking
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
 * 19-07-2022         TuanLA           Update State Filter
 */

import {
  RankingActionType,
  RankingClearStateAction,
  RankingRequestAction,
  RankingRequestPayload,
} from './type'

/**
 * @param  {} {typeRanking
 * @param  {RankingRequestPayload} }
 * @returns RankingActionType
 */
export const fetchRankingRequest = ({
  typeRanking,
  pageSize,
  pageNumber,
}: RankingRequestPayload): RankingRequestAction => {
  return {
    type: RankingActionType.RANKING_REQUESTING,
    typeRanking,
    pageSize,
    pageNumber,
  }
}

export const updateFilterRankingRequest = ({
  typeRanking,
  pageSize,
  pageNumber,
}: RankingRequestPayload): RankingRequestAction => {
  return {
    type: RankingActionType.RANKING_REQUESTING,
    typeRanking,
    pageSize,
    pageNumber,
  }
}

export const clearState = (): RankingClearStateAction => {
  return {
    type: RankingActionType.CLEAR_STATE,
  }
}
