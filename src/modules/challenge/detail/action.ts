import {
  ViewDetailChallengeActionType,
  ViewDetailChallengeClearStateAction,
  ViewDetailChallengeRequestAction,
  ViewDetailChallengeRequestPayload,
} from './type'

/**
 * Action for get detail challenge
 *
 * Version 1.0
 *
 * Date: 27-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 27-07-2022         DuyHV           Create
 */

/**
 * ViewDetailChallenge request action
 * @param param ViewDetailChallengeRequestPayload
 * @returns ViewDetailChallengeRequestAction
 */
export const ViewDetailChallengeRequest = ({
  id,
}: ViewDetailChallengeRequestPayload): ViewDetailChallengeRequestAction => {
  return {
    type: ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_REQUESTING,
    id,
  }
}

/**
 * Clear state action
 * @returns ViewDetailChallengeClearStateAction
 */
export const ViewDetailChallengeClearStateRequest = (): ViewDetailChallengeClearStateAction => {
  return {
    type: ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_CLEAR_STATE,
  }
}
