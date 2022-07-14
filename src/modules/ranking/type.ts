/**
 * Type for Ranking
 *
 * Version 1.0
 *
 * Date: 11-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 11-07-2022         TuanLA           Create
 */

export enum RankingActionType {
  RANKING_REQUESTING = 'RANKING_REQUESTING',
  RANKING_SUCCESS = 'RANKING_SUCCESS',
  RANKING_ERROR = 'RANKING_ERROR',
  CLEAR_STATE = 'CLEAR_STATE',
}

export interface RankingRequestPayload {
  typeRanking: string
}

export interface RankingErrorResponse {
  error: ErrorMessage
}
export interface RankingResponse {
  data: UserInfor[]
  messageVi: string
  messageEn: string
}

interface UserInfor {
  userId: number
  image?: string
  fullname: string
  university: string
  score: number
}

export type RankingRequestAction = ActionWithPayload<
  RankingActionType.RANKING_REQUESTING,
  RankingRequestPayload
>
export type RankingSuccessAction = ActionWithPayload<
  RankingActionType.RANKING_SUCCESS,
  RankingResponse
>
export type RankingErrorAction = ActionWithPayload<
  RankingActionType.RANKING_ERROR,
  RankingErrorResponse
>

export type RankingAction = RankingRequestAction | RankingSuccessAction | RankingErrorAction

export interface RankingState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  data: UserInfor[]
  rankingTypeRequest: RankingRequestPayload
}
