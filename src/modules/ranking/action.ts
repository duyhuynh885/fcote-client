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
 */

import { RankingActionType, RankingRequestAction, RankingRequestPayload } from './type'

/**
 * @param  {} {typeRanking
 * @param  {RankingRequestPayload} }
 * @returns RankingActionType
 */
export const fetchRankingRequest = ({
  typeRanking,
}: RankingRequestPayload): RankingRequestAction => {
  return {
    type: RankingActionType.RANKING_REQUESTING,
    typeRanking,
  }
}
