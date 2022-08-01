import {
  ViewMyProfileActionType,
  ViewMyProfileRequestingPayload,
  ViewMyProfileRequestAction,
  ViewDetailProfileClearStateAction,
} from './type'

/**
 * actions my profile
 *
 * Version 1.0
 *
 * Date: 10-07-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 10-07-2022      HuyNT2711           Create
 */

export const viewDetailProfileRequest = ({
  typeData,
  username,
}: ViewMyProfileRequestingPayload): ViewMyProfileRequestAction => {
  return {
    type: ViewMyProfileActionType.VIEW_MY_PROFILE_REQUESTING,
    typeData,
    username,
  }
}

/**
 * Clear state action
 * @returns viewDetailProfileClearStateRequest
 */
export const viewDetailProfileClearStateRequest = (): ViewDetailProfileClearStateAction => {
  return {
    type: ViewMyProfileActionType.VIEW_MY_PROFILE_CLEAR_STATE,
  }
}
