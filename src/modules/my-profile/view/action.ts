import {
  ViewMyProfileActionType,
  ViewUserAssignmentRequestingPayload,
  ViewUserAssignmentRequestAction,
  ViewChallengeCompletedRequestingPayload,
  ViewChallengeCompletedRequestAction,
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

export const fetchUserAssignmentRequest = ({
  username,
  typeData,
  firstName,
  lastName,
  organization,
  city,
  country,
  phone,
  gender,
}: ViewUserAssignmentRequestingPayload): ViewUserAssignmentRequestAction => {
  return {
    type: ViewMyProfileActionType.VIEW_USER_ASSIGNMENT_REQUESTING,
    username,
    typeData,
    firstName,
    lastName,
    organization,
    city,
    country,
    phone,
    gender,
  }
}

export const fetchChallengeCompletedRequest = ({
  username,
  typeData,
}: ViewChallengeCompletedRequestingPayload): ViewChallengeCompletedRequestAction => {
  return {
    type: ViewMyProfileActionType.VIEW_CHALLENGE_COMPLETED_REQUESTING,
    username,
    typeData,
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
