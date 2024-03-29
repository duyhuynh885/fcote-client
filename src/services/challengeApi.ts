import { ViewDetailChallengeRequestPayload } from './../modules/challenge/detail/type'
import {
  CreateChallengeErrorResponse,
  CreateChallengeRequestPayload,
  CreateChallengeResponse,
} from './../modules/challenge/create/type'
import {
  ViewListChallengeErrorResponse,
  ViewListChallengeRequestPayload,
  ViewListChallengeSuccessResponse,
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
    return axiosClient.post<ViewListChallengeSuccessResponse, ViewListChallengeErrorResponse>(
      url,
      payload,
    )
  },

  /**
   * Api for create challenge
   * @returns
   */
  createChallenge(payload: CreateChallengeRequestPayload) {
    const url = '/challenge/create-challenge'
    return axiosClient.post<CreateChallengeResponse, CreateChallengeErrorResponse>(url, payload)
  },

  /**
   * Api for get detail challenge
   * @returns
   */
  getDetailChallenge(payload: ViewDetailChallengeRequestPayload) {
    const url = '/challenge/get-detail-challenge'
    return axiosClient.post<CreateChallengeResponse, CreateChallengeErrorResponse>(url, payload)
  },
}
export default challengeApi
