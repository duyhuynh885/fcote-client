import {
  CreateChallengeActionType,
  CreateChallengeClearStateAction,
  CreateChallengeRequestAction,
} from './type'

/**
 * Action for create challenge
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
 * CreateChallenge request action
 * @param param CreateChallengeRequestPayload
 * @returns CreateChallengeRequestAction
 */
export const CreateChallengeRequest = (): CreateChallengeRequestAction => {
  return {
    type: CreateChallengeActionType.CREATE_CHALLENGE_REQUESTING,
  }
}

/**
 * Clear state action
 * @returns CreateChallengeClearStateAction
 */
export const CreateChallengeClearStateRequest = (): CreateChallengeClearStateAction => {
  return {
    type: CreateChallengeActionType.CREATE_CHALLENGE_CLEAR_STATE,
  }
}
