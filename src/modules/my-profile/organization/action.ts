import {
  GetOrganizationActionType, GetOrganizationClearStateAction, GetOrganizationRequestAction
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

export const getOrganizationRequest = (): GetOrganizationRequestAction => {
  return {
    type: GetOrganizationActionType.GET_ORGANIZATION_REQUESTING,
  }
}

/**
 * Clear state action
 * @returns GetOrganizationClearStateRequest
 */
export const getOrganizationClearStateRequest = (): GetOrganizationClearStateAction => {
  return {
    type: GetOrganizationActionType.GET_ORGANIZATION_CLEAR_STATE,
  }
}
