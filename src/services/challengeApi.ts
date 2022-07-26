import {
  ViewListChallengeErrorReponse,
  ViewListChallengeRequestPayload,
  ViewListChallengeSuccessReponse,
} from './../modules/challenge/list/type'
import { axiosClient } from './clientApi'

/**
 * Challenge Service Api
 *
 * Version 1.0
 *
 * Date: 26-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 26-07-2022         DuyHV           Create
 */

const challengeApi = {
  /**
   * Api for get list challenge
   * @param payload
   * @returns
   */
  fetchChallengeApi(payload: ViewListChallengeRequestPayload) {
    const url = '/challenge/get-list-challenge'
    return axiosClient.post<ViewListChallengeSuccessReponse, ViewListChallengeErrorReponse>(
      url,
      payload,
    )
  },

  /**
   * Api for create challenge
   * @returns
   */
  createChallenge() {
    const url = '/challenge/create-challenge'
    return axiosClient.post<ViewListChallengeSuccessReponse, ViewListChallengeErrorReponse>(url)
  },
}
export default challengeApi
