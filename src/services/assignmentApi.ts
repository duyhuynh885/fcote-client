import {
  EditAssignmentErrorResponse,
  EditAssignmentRequestPayload,
  EditAssignmentResponse,
} from './../modules/assignment/edit/type'
import {
  SubmitAssignmentDetailErrorResponse,
  SubmitAssignmentDetailRequestPayload,
  SubmitAssignmentDetailResponse,
} from './../modules/assignment/submit/type'
import {
  RunAssignmentDetailErrorResponse,
  RunAssignmentDetailRequestPayload,
  RunAssignmentDetailResponse,
} from './../modules/assignment/run/type'
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
  ViewAssignmentDetailErrorResponse,
  ViewAssignmentDetailRequestPayload,
  ViewAssignmentDetailResponse,
} from '../modules/assignment/detail/type'
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
import {
  PreviewEditAssignmentRequestPayload,
  PreviewEditAssignmentResponse,
  PreviewEditAssignmentErrorResponse,
} from '../modules/assignment/preview-edit/type'

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
    const url = '/assignment/add-assignment'
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

  /**
   * Api for fetch assignment detail
   * @returns ViewListDataTypeResponse
   * @returns ViewListDataTypeErrorResponse
   */
  fetchAssignmentDetail(payload: ViewAssignmentDetailRequestPayload) {
    const url = '/assignment/get-assignment-detail'
    return axiosClient.post<ViewAssignmentDetailResponse, ViewAssignmentDetailErrorResponse>(
      url,
      payload,
    )
  },

  /**
   * Api for run assignment detail
   * @returns RunAssignmentDetailResponse
   * @returns RunAssignmentDetailErrorResponse
   */
  runAssignmentDetail(payload: RunAssignmentDetailRequestPayload) {
    const url = '/assignment/run'
    return axiosClient.post<RunAssignmentDetailResponse, RunAssignmentDetailErrorResponse>(
      url,
      payload,
    )
  },

  /**
   * Api for submit assignment detail
   * @returns SubmitAssignmentDetailResponse
   * @returns SubmitAssignmentDetailErrorResponse
   */
  submitAssignmentDetail(payload: SubmitAssignmentDetailRequestPayload) {
    const url = '/assignment/submit'
    return axiosClient.post<SubmitAssignmentDetailResponse, SubmitAssignmentDetailErrorResponse>(
      url,
      payload,
    )
  },

  /**
   * Api for edit a assignment
   * @param payload
   * @returns CreateAssignmentResponse
   * @returns CreateAssignmentErrorResponse
   */
  editAssignment(payload: EditAssignmentRequestPayload) {
    const url = '/assignment/edit-assignment'
    return axiosClient.post<EditAssignmentResponse, EditAssignmentErrorResponse>(url, payload)
  },

  /**
   * Api for data a preview edit
   * @param payload
   * @returns CreateAssignmentResponse
   * @returns CreateAssignmentErrorResponse
   */
  previewEditAssignment(payload: PreviewEditAssignmentRequestPayload) {
    const url = '/assignment/preview-edit-assignment'
    return axiosClient.post<PreviewEditAssignmentResponse, PreviewEditAssignmentErrorResponse>(
      url,
      payload,
    )
  },
}

export default assignmentApi
