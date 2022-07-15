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
  typeRanking: number
  pageSize: number
  pageNumber: number
}

export interface RankingErrorResponse {
  error: ErrorMessage
}
export interface RankingResponse {
  top3: UserInfor[]
  ranking_list: UserInfor[]
  messageVi: string
  messageEn: string
}

export interface UserInfor {
  id: number
  avatar: string
  username: string
  fullname: string
  organization: string
  total_score: number
  order: number
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
export type RankingClearStateAction = Action<RankingActionType.CLEAR_STATE>

export type RankingAction = RankingRequestAction | RankingSuccessAction | RankingErrorAction

export interface RankingState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  top3: UserInfor[]
  rankingList: UserInfor[]
  rankingTypeRequest: RankingRequestPayload
}
