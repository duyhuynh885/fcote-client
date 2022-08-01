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
  ViewMyProfileRequestingPayload,
  ViewMyProfileSuccessResponse,
  ViewMyProfileErrorResponse,
} from './../modules/my-profile/view/type'

import { axiosClient } from './clientApi'

const profileApi = {
  fetchUserProfileApi() {
    const url = '/account/get-profile'
    return axiosClient.post<GetUserProfileSuccessResponse, GetUserProfileErrorResponse>(url)
  },

  fetchUserAssignmentApi(payload: ViewMyProfileRequestingPayload) {
    const url = '/account/get-profile'
    return axiosClient.post<ViewMyProfileSuccessResponse, ViewMyProfileErrorResponse>(url, payload)
  },
  putEditMyProfileApi(payload: EditMyProfileRequestPayload) {
    const url = '/account/update-profile'
    return axiosClient.put<EditMyProfileSuccessResponse, EditMyProfileErrorResponse>(url, {
      user: payload,
    })
  },
}
export default profileApi
