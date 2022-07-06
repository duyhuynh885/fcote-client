import {
  ViewListAssignmentRequestPayload,
  ViewListAssignmentErrorResponse,
  ViewListAssignmentResponse,
} from '../redux/modules/assignment/list/type'
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
}

export default assignmentApi
