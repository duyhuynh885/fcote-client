import {
  ViewListChallengeErrorReponse,
  ViewListChallengeRequestPayload,
  ViewListChallengeSuccessReponse,
} from './../modules/challenge/list/type'
import { axiosClient } from './clientApi'

const challengeApi = {
  fetchChallengeApi(payload: ViewListChallengeRequestPayload) {
    const url = '/challenge/get-list-challenge'
    return axiosClient.post<ViewListChallengeSuccessReponse, ViewListChallengeErrorReponse>(
      url,
      payload,
    )
  },
  createChallenge() {
    const url = '/challenge/get-list-challenge'
    return axiosClient.post<ViewListChallengeSuccessReponse, ViewListChallengeErrorReponse>(url)
  },
}
export default challengeApi
