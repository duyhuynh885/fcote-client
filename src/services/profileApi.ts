import {
  EditMyProfileRequestPayload,
  EditMyProfileSuccessResponse,
  EditMyProfileErrorResponse,
} from '../modules/my-profile/edit/type'
import {
  ViewMyProfileRequestingPayload,
  ViewMyProfileSuccessResponse,
  ViewMyProfileErrorResponse,
} from './../modules/my-profile/view/type'

import { axiosClient } from './clientApi'

const profileApi = {
  /**
   * get my profile
   * @param payload ViewMyProfileRequestingPayload
   * @returns ViewMyProfileSuccessResponse
   */
  fetchUserAssignmentApi(payload: ViewMyProfileRequestingPayload) {
    const url = '/account/get-profile'
    return axiosClient.post<ViewMyProfileSuccessResponse, ViewMyProfileErrorResponse>(url, payload)
  },

  /**
   * update profile
   * @param payload EditMyProfileRequestPayload
   * @returns EditMyProfileSuccessResponse
   */
  putEditMyProfileApi(payload: EditMyProfileRequestPayload) {
    const url = '/account/update-profile'
    return axiosClient.put<EditMyProfileSuccessResponse, EditMyProfileErrorResponse>(url, {
      user: payload,
    })
  },
}
export default profileApi
