import { GetOrganizationState, GetOrganizationActionType, GetOrganizationAction } from './type'

/**
 * type my profile
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

export const initialStateMyProfile: GetOrganizationState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  data: [],
}

const reducer = (state = initialStateMyProfile, action: GetOrganizationAction) => {
  switch (action.type) {
    case GetOrganizationActionType.GET_ORGANIZATION_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case GetOrganizationActionType.GET_ORGANIZATION_SUCCESS:
      return {
        ...state,
        data: action.organizations,
        requesting: false,
        successful: true,
      }

    case GetOrganizationActionType.GET_ORGANIZATION_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case GetOrganizationActionType.GET_ORGANIZATION_CLEAR_STATE:
      return {
        ...initialStateMyProfile,
      }
    default:
      return state
  }
}
export default reducer
