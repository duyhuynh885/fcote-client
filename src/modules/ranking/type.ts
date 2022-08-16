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
 * 19-07-2022         TuanLA           Update Action Type
 */

export enum RankingActionType {
  RANKING_REQUESTING = 'RANKING_REQUESTING',
  RANKING_SUCCESS = 'RANKING_SUCCESS',
  RANKING_ERROR = 'RANKING_ERROR',
  RANKING_CLEAR_STATE = 'RANKING_CLEAR_STATE',
  UPDATE_FILTER_RANKING = 'UPDATE_FILTER_RANKING',
}

export enum RankingTypeState {
  RANKING_UNIVERSITY = 1,
  RANKING_ORGANIZATION,
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
  top3: UserInfo[]
  ranking_list: UserInfo[]
  messageVi: string
  messageEn: string
}

export interface UserInfo {
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
export type RankingClearStateAction = Action<RankingActionType.RANKING_CLEAR_STATE>
export type UpdateFilterRankingAction = ActionWithPayload<
  RankingActionType.UPDATE_FILTER_RANKING,
  RankingRequestPayload
>

export type RankingAction =
  | RankingRequestAction
  | RankingSuccessAction
  | RankingErrorAction
  | RankingClearStateAction
  | UpdateFilterRankingAction

export interface RankingState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  top3: UserInfo[]
  rankingList: UserInfo[]
  rankingTypeRequest: RankingRequestPayload
}
