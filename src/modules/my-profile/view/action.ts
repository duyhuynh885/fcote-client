import {
  ViewMyProfileAcionType,
  ViewUserAssignmentRequestingPayload,
  ViewUserAssignmentRequestAction,
  ViewChallengeCompletedRequestingPayload,
  ViewChallengeCompletedRequestAction,
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
    type: ViewMyProfileAcionType.VIEW_USER_ASSIGNMENT_REQUESTING,
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
    type: ViewMyProfileAcionType.VIEW_CHALLENGE_COMPLETED_REQUESTING,
    username,
    typeData,
  }
}
