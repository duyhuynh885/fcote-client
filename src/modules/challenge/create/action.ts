import {
  CreateChallengeActionType,
  CreateChallengeClearStateAction,
  CreateChallengeRequestAction,
  CreateChallengeRequestPayload,
} from './type'

/**
 * Action for create challenge
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
 * CreateChallenge request action
 * @param param CreateChallengeRequestPayload
 * @returns CreateChallengeRequestAction
 */
export const createChallengeRequest = ({
  title,
  description,
  image,
  groupId,
  startAt,
  endAt,
  element,
  limitSubmission,
}: CreateChallengeRequestPayload): CreateChallengeRequestAction => {
  return {
    type: CreateChallengeActionType.CREATE_CHALLENGE_REQUESTING,
    title,
    description,
    image,
    groupId,
    startAt,
    endAt,
    element,
    limitSubmission,
  }
}

/**
 * Clear state action
 * @returns CreateChallengeClearStateAction
 */
export const createChallengeClearStateRequest = (): CreateChallengeClearStateAction => {
  return {
    type: CreateChallengeActionType.CREATE_CHALLENGE_CLEAR_STATE,
  }
}
