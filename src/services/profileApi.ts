import {
  EditMyProfileErrorResponse,
  EditMyProfileRequestPayload,
  EditMyProfileSuccessResponse,
} from '../modules/my-profile/edit/type'
import {
  GetOrganizationErrorResponse,
  GetOrganizationSuccessResponse,
} from './../modules/my-profile/organization/type'
import {
  ViewMyProfileErrorResponse,
  ViewMyProfileRequestingPayload,
  ViewMyProfileSuccessResponse,
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

  /**
   * get organization
   * @returns GetOrganizationSuccessResponse
   */
  getOrganization() {
    const url = '/account/get-organization'
    return axiosClient.get<GetOrganizationSuccessResponse, GetOrganizationErrorResponse>(url)
  },
}
export default profileApi
