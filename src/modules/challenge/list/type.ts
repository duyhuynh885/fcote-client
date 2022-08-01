/**
 * type list challenge
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

export enum ViewListChallengeActionType {
  VIEW_LIST_CHALLENGE_REQUESTING = 'VIEW_LIST_CHALLENGE_REQUESTING',
  VIEW_LIST_CHALLENGE_SUCCESS = 'VIEW_LIST_CHALLENGE_SUCCESS',
  VIEW_LIST_CHALLENGE_ERROR = 'VIEW_LIST_CHALLENGE_ERROR',
  VIEW_LIST_CHALLENGE_CLEAR_STATE = 'VIEW_LIST_CHALLENGE_CLEAR_STATE',
  UPDATE_FILTER_LIST_CHALLENGE_REQUEST = ' UPDATE_FILTER_LIST_CHALLENGE_REQUEST',
}

export enum StatusChallengeEnum {
  ALL,
  NOT_OPEN_YET,
  OPEN,
  CLOSE,
}

export interface IChallenge {
  challengeId: string
  image: string
  title: string
  description: string
  totalMember: string
  startAt: string
  endAt: string
  status: number
}

export interface ViewListChallengeRequestPayload {
  typeData: number
  searchBy?: string
  groupID?: number
  pageSize?: number
  pageNumber?: number
  username?: string
  status?: StatusChallengeEnum
}

export interface ViewListChallengeSuccessResponse {
  challenges: IChallenge[]
  currentSize: number
  totalChallenge:number

}

export interface ViewListChallengeErrorResponse {
  error: ErrorMessage
}

export type ViewListChallengeRequestAction = ActionWithPayload<
  ViewListChallengeActionType.VIEW_LIST_CHALLENGE_REQUESTING,
  ViewListChallengeRequestPayload
>
export type ViewListChallengeSuccessAction = ActionWithPayload<
  ViewListChallengeActionType.VIEW_LIST_CHALLENGE_SUCCESS,
  ViewListChallengeSuccessResponse
>
export type ViewListChallengeErrorAction = ActionWithPayload<
  ViewListChallengeActionType.VIEW_LIST_CHALLENGE_ERROR,
  ViewListChallengeErrorResponse
>
export type ViewListChallengeClearStateAction =
  Action<ViewListChallengeActionType.VIEW_LIST_CHALLENGE_CLEAR_STATE>

export type UpdateFilterListChallengeAction = ActionWithPayload<
  ViewListChallengeActionType.UPDATE_FILTER_LIST_CHALLENGE_REQUEST,
  ViewListChallengeRequestPayload
>

export type ViewListChallengeAction =
  | ViewListChallengeRequestAction
  | ViewListChallengeSuccessAction
  | ViewListChallengeErrorAction
  | ViewListChallengeClearStateAction
  | UpdateFilterListChallengeAction

export interface ViewListChallengeState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  filterRequest: ViewListChallengeRequestPayload
  challenges: IChallenge[]
  currentSize: number
  totalChallenge: number
}
