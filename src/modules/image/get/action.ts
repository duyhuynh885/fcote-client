import {
  GetImageActionType,
  GetImageClearStateAction,
  GetImageRequestAction,
  GetImageRequestPayload,
} from './type'

/**
 * Action for getImage
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
 * GetImage request action
 * @param param GetImageRequestPayload
 * @returns GetImageRequestAction
 */
export const getImageRequest = ({ path }: GetImageRequestPayload): GetImageRequestAction => {
  return {
    type: GetImageActionType.GET_IMAGE_REQUESTING,
    path,
  }
}

/**
 * Clear state action
 */
export const getImageClearStateRequest = (): GetImageClearStateAction => {
  return {
    type: GetImageActionType.GET_IMAGE_CLEAR_STATE,
  }
}
