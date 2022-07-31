import {
  EditMyProfileRequestPayload,
  EditMyProfileSuccessResponse,
  EditMyProfileErrorResponse,
} from '../modules/my-profile/edit/type'
import {
  GetUserProfileErrorResponse,
  GetUserProfileSuccessResponse,
} from '../modules/my-profile/get-my-profile/type'
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
  fetchUserProfileApi() {
    const url = '/account/get-profile'
    return axiosClient.post<GetUserProfileSuccessResponse, GetUserProfileErrorResponse>(url)
  },

  fetchUserAssignmentApi(payload: ViewUserAssignmentRequestingPayload) {
    const url = '/account/get-profile'
    return axiosClient.post<ViewUserAssignmentSuccessResponse, ViewUserAssignmentErrorResponse>(
      url,
      payload,
    )
  },
  putEditMyProfileApi(payload: EditMyProfileRequestPayload) {
    const url = '/account/update-profile'
    return axiosClient.put<EditMyProfileSuccessResponse, EditMyProfileErrorResponse>(url, {
      user: payload,
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
