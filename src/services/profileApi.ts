import {
  EditMyProfileRequestPayload,
  EditMyProfileSuccessReponse,
  EditMyProfileErrorReponse,
} from '../modules/my-profile/edit/type'
import {
  ViewUserAssignmentRequestingPayload,
  ViewUserAssignmentSuccessResponse,
  ViewUserAssignmentErrorResponse,
  ViewChallengeCompletedRequestingPayload,
  ViewChallengeCompletedSuccessResponse,
  ViewChallengeCompletedErrorResponse,
} from './../modules/my-profile/view/type'

import { axiosClient } from './clientApi'

const profileApi = {
  fetchUserAssignemntApi(payload: ViewUserAssignmentRequestingPayload) {
    const url = '/account/get-profile'
    return axiosClient.post<ViewUserAssignmentSuccessResponse, ViewUserAssignmentErrorResponse>(
      url,
      payload,
    )
  },
  fetchEditMyProfileApi(payload: EditMyProfileRequestPayload) {
    const url = '/account/update-profile'
    return axiosClient.put<EditMyProfileSuccessReponse, EditMyProfileErrorReponse>(url, {
      user: {
        payload,
      },
    })
  },

  fetchChallengeCompletedApi(payload: ViewChallengeCompletedRequestingPayload) {
    const url = '/challenge/get-list-challenge'
    return axiosClient.post<
      ViewChallengeCompletedSuccessResponse,
      ViewChallengeCompletedErrorResponse
    >(url, payload)
  },
}
export default profileApi
