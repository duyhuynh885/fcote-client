import {
  UploadImageActionType,
  UploadImageClearStateAction,
  UploadImageRequestAction,
  UploadImageRequestPayload,
} from './type'

/**
 * Action for uploadImage
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */

/**
 * UploadImage request action
 * @param param UploadImageRequestPayload
 * @returns UploadImageRequestAction
 */
export const uploadImageRequest = ({
  file,
}: UploadImageRequestPayload): UploadImageRequestAction => {
  return {
    type: UploadImageActionType.UPLOAD_IMAGE_REQUESTING,
    file,
  }
}

/**
 * Clear state action
 */
export const uploadImageClearStateRequest = (): UploadImageClearStateAction => {
  return {
    type: UploadImageActionType.UPLOAD_IMAGE_CLEAR_STATE,
  }
}
