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
  JoinGroupErrorResponse,
  JoinGroupRequestPayload,
  JoinGroupResponse,
} from '../modules/group/join/type'
import {
  ViewListGroupRequestPayload,
  ViewListGroupErrorResponse,
  ViewListGroupResponse,
} from '../modules/group/list/type'
import {
  CreateGroupErrorResponse,
  CreateGroupRequestPayload,
  CreateGroupResponse,
} from '../modules/group/create/type'
import {
  DeleteGroupRequestPayload,
  DeleteGroupResponse,
  DeleteGroupErrorResponse,
} from '../modules/group/setting/delete/type'
import { axiosClient } from './clientApi'
import {
  EditGroupErrorResponse,
  EditGroupRequestPayload,
  EditGroupResponse,
} from '../modules/group/setting/edit/type'
import {
  LeaveGroupErrorResponse,
  LeaveGroupRequestPayload,
  LeaveGroupResponse,
} from '../modules/group/setting/leave/type'
import {
  KickGroupErrorResponse,
  KickGroupRequestPayload,
  KickGroupResponse,
} from '../modules/group/setting/kick/type'

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

  /**
   * Api for join group
   * @returns ViewListAssignmentResponse
   * @returns ViewListAssignmentErrorResponse
   */
  joinGroup(payload: JoinGroupRequestPayload) {
    const url = '/group/join-group'
    return axiosClient.post<JoinGroupResponse, JoinGroupErrorResponse>(url, payload)
  },

  /**
   * Api for create group
   * @returns ViewListAssignmentResponse
   * @returns ViewListAssignmentErrorResponse
   */
  createGroup(payload: CreateGroupRequestPayload) {
    const url = '/group/create-group'
    return axiosClient.post<CreateGroupResponse, CreateGroupErrorResponse>(url, payload)
  },

  /**
   * Api for delete group
   * @returns ViewListAssignmentResponse
   * @returns ViewListAssignmentErrorResponse
   */
  deleteGroup(payload: DeleteGroupRequestPayload) {
    const url = '/group/delete-group'
    return axiosClient.post<DeleteGroupResponse, DeleteGroupErrorResponse>(url, payload)
  },

  /**
   * Api for Edit group
   * @returns ViewListAssignmentResponse
   * @returns ViewListAssignmentErrorResponse
   */
  editGroup(payload: EditGroupRequestPayload) {
    const url = '/group/update-group'
    return axiosClient.post<EditGroupResponse, EditGroupErrorResponse>(url, payload)
  },

  /**
   * Api for Leave group
   * @returns LeaveGroupResponse
   * @returns LeaveGroupErrorResponse
   */
   leaveGroup(payload: LeaveGroupRequestPayload) {
    const url = '/group/out-member'
    return axiosClient.post<LeaveGroupResponse, LeaveGroupErrorResponse>(url, payload)
  },

   /**
   * Api for Leave group
   * @returns KickGroupResponse
   * @returns KickGroupErrorResponse
   */
    kickMemberGroup(payload: KickGroupRequestPayload) {
      const url = '/group/kick-member'
      return axiosClient.post<KickGroupResponse, KickGroupErrorResponse>(url, payload)
    },
}

export default groupApi
