/**
 * Type for create challenge
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

export enum CreateChallengeActionType {
  CREATE_CHALLENGE_REQUESTING = 'CREATE_CHALLENGE_REQUESTING',
  CREATE_CHALLENGE_SUCCESS = 'CREATE_CHALLENGE_SUCCESS',
  CREATE_CHALLENGE_ERROR = 'CREATE_CHALLENGE_ERROR',
  CREATE_CHALLENGE_CLEAR_STATE = 'CREATE_CHALLENGE_CLEAR_STATE',
}

export interface CreateChallengeRequestPayload {
  title: string
  description: string
  image: string
  groupId: number
  startAt: string
  endAt: string
  element: Element[]
  limitSubmissions: number
}

export interface Element {
  assignmentId: number
}

export interface CreateChallengeErrorResponse {
  error: ErrorMessage
}

export interface CreateChallengeResponse {
  messageVi: string
  messageEn: string
}

export type CreateChallengeRequestAction = ActionWithPayload<
  CreateChallengeActionType.CREATE_CHALLENGE_REQUESTING,
  CreateChallengeRequestPayload
>
export type CreateChallengeSuccessAction = ActionWithPayload<
  CreateChallengeActionType.CREATE_CHALLENGE_SUCCESS,
  CreateChallengeResponse
>
export type CreateChallengeErrorAction = ActionWithPayload<
  CreateChallengeActionType.CREATE_CHALLENGE_ERROR,
  CreateChallengeErrorResponse
>
export type CreateChallengeClearStateAction =
  Action<CreateChallengeActionType.CREATE_CHALLENGE_CLEAR_STATE>

export type CreateChallengeAction =
  | CreateChallengeRequestAction
  | CreateChallengeSuccessAction
  | CreateChallengeErrorAction
  | CreateChallengeClearStateAction

export interface CreateChallengeState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
}
