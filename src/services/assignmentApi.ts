import {
  CreateAssignmentRequestPayload,
  CreateAssignmentResponse,
  CreateAssignmentErrorResponse,
} from '../modules/assignment/create/type'
import {
  ViewListDataTypeResponse,
  ViewListDataTypeErrorResponse,
} from '../modules/assignment/data-type/type'
import {
  ViewListLanguageResponse,
  ViewListLanguageErrorResponse,
} from '../modules/assignment/language/type'
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
    const url = '/assignment/get-list-assignment'
    return axiosClient.post<ViewListAssignmentResponse, ViewListAssignmentErrorResponse>(
      url,
      payload,
    )
  },

  /**
   * Api for create a assignment
   * @param payload
   * @returns CreateAssignmentResponse
   * @returns CreateAssignmentErrorResponse
   */
  createAssignment(payload: CreateAssignmentRequestPayload) {
    const url = '/assignment/add-update-assignment'
    return axiosClient.post<CreateAssignmentResponse, CreateAssignmentErrorResponse>(url, payload)
  },

  /**
   * Api for fetch list of data type
   * @returns ViewListAssignmentResponse
   * @returns ViewListAssignmentErrorResponse
   */
  fetchListDataType() {
    const url = '/assignment/get-data-type'
    return axiosClient.get<ViewListLanguageResponse, ViewListLanguageErrorResponse>(url)
  },

  /**
   * Api for fetch list of language
   * @returns ViewListDataTypeResponse
   * @returns ViewListDataTypeErrorResponse
   */
  fetchListLanguage() {
    const url = '/assignment/get-language'
    return axiosClient.get<ViewListDataTypeResponse, ViewListDataTypeErrorResponse>(url)
  },
}

export default assignmentApi
