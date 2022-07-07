import {
  CreateAssignmentRequestPayload,
  CreateAssignmentResponse,
  CreateAssignmentErrorResponse,
} from '../modules/assignment/create/type'
import {
  ViewListAssignmentRequestPayload,
  ViewListAssignmentErrorResponse,
  ViewListAssignmentResponse,
} from '../modules/assignment/list/type'
import { axiosClient } from './clientApi'

/**
 * Assignment Service Api
 *
 * Version 1.0
 *
 * Date: 05-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 05-07-2022         DuyHV           Create
 */

const assignmentApi = {
  /**
   * Api for fetch list of assignments
   * @param payload ViewListAssignmentRequestAction
   * @returns ViewListAssignmentResponse
   * @returns ViewListAssignmentErrorResponse
   */
  fetchListAssignment(payload: ViewListAssignmentRequestPayload) {
    const url = '/assignments'
    return axiosClient.post<ViewListAssignmentResponse, ViewListAssignmentErrorResponse>(
      url,
      payload,
    )
  },

  /**
   *  Api for create a assignment
   * @param payload
   * @returns
   */
  createAssignment(payload: CreateAssignmentRequestPayload) {
    const url = '/assignments/create'
    return axiosClient.post<CreateAssignmentResponse, CreateAssignmentErrorResponse>(url, payload)
  },
}

export default assignmentApi
