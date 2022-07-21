/**
 * Group Service Api
 *
 * Version 1.0
 *
 * Date: 21-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 21-07-2022         TuanLA           Create
 */

import {
  ViewDetailGroupErrorResponse,
  ViewDetailGroupRequestPayload,
  ViewDetailGroupResponse,
} from '../modules/group/detail/type'
import {
  ViewListGroupRequestPayload,
  ViewListGroupErrorResponse,
  ViewListGroupResponse,
} from '../modules/group/list/type'
import { axiosClient } from './clientApi'

const groupApi = {
  /**
   * Api for fetch list of group
   * @param payload ViewListGroupRequestPayload
   * @returns ViewListGroupResponse
   * @returns ViewListGroupErrorResponse
   */
  fetchListGroup(payload: ViewListGroupRequestPayload) {
    const url = '/group/get-list-group'
    return axiosClient.post<ViewListGroupResponse, ViewListGroupErrorResponse>(url, payload)
  },

  /**
   * Api for fetch detail of group
   * @returns ViewListAssignmentResponse
   * @returns ViewListAssignmentErrorResponse
   */
  fetchDetailGroup(payload: ViewDetailGroupRequestPayload) {
    const url = '/group/get-group-detail'
    return axiosClient.post<ViewDetailGroupResponse, ViewDetailGroupErrorResponse>(url, payload)
  },
}

export default groupApi
