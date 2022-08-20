import {
  GetImageErrorResponse,
  GetImageRequestPayload,
  GetImageResponse,
} from './../modules/image/get/type'
import {
  UploadImageErrorResponse,
  UploadImageRequestPayload,
  UploadImageResponse,
} from './../modules/image/upload/type'
import { axiosClient } from './clientApi'

/**
 * Image Service Api
 *
 * Version 1.0
 *
 * Date: 26-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 26-07-2022         DuyHV           Create
 */

const imageApi = {
  /**
   * Api for get list challenge
   * @param payload
   * @returns
   */
  getImage(payload: GetImageRequestPayload) {
    const url = '/account/get-image'
    return axiosClient.post<GetImageResponse, GetImageErrorResponse>(url, payload)
  },

  /**
   * Api for create challenge
   * @returns
   */
  uploadImage(payload: UploadImageRequestPayload) {
    const formData = new FormData()
    formData.append('file', payload.file)
    const url = '/account/put-avatar'
    return axiosClient.put<UploadImageResponse, UploadImageErrorResponse>(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
export default imageApi
