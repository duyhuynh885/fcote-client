import { axiosClient } from './clientApi'
import {
  RankingRequestPayload,
  RankingResponse,
  RankingErrorResponse,
} from '../modules/ranking/type'
/**
 * Ranking Service Api
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

const rankingApi = {
  /**
   * @param  {RankingRequestPayload} payload
   */
  fetchRanking(payload: RankingRequestPayload) {
    const url = '/ranking'
    return axiosClient.post<RankingResponse, RankingErrorResponse>(url, payload)
  },
}

export default rankingApi
