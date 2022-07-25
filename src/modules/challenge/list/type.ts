import {
  ViewListGroupSuccessAction,
  ViewListGroupErrorAction,
  ViewListGroupResponse,
  ViewListGroupErrorResponse,
  ViewListGroupRequestPayload,
} from './../../group/list/type'
import { StatusEnum } from '../../assignment/list/type'
import { Group } from '../../group/list/type'

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
  VIEW_LIST_GROUPID_SUCCESS = 'VIEW_LIST_GROUPID_SUCCESS',
  VIEW_LIST_GROUPID_REQUESTING = 'VIEW_LIST_GROUPID_REQUESTING',
  VIEW_LIST_GROUPID_ERROR = 'VIEW_LIST_GROUPID_ERROR',
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
  decription: string
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

export interface ViewListChallengeSuccessReponse {
  challenges: IChallenge[]
  currentSize: number
}

export interface ViewListChallengeErrorReponse {
  error: ErrorMessage
}

export type ViewListGroupIdRequestAction = ActionWithPayload<
  ViewListChallengeActionType.VIEW_LIST_GROUPID_REQUESTING,
  ViewListGroupRequestPayload
>
export type ViewListGroupIdSuccessAction = ActionWithPayload<
  ViewListChallengeActionType.VIEW_LIST_GROUPID_SUCCESS,
  ViewListGroupResponse
>
export type ViewListGroupIdErrorAction = ActionWithPayload<
  ViewListChallengeActionType.VIEW_LIST_GROUPID_ERROR,
  ViewListGroupErrorResponse
>

export type ViewListChallengeRequestAction = ActionWithPayload<
  ViewListChallengeActionType.VIEW_LIST_CHALLENGE_REQUESTING,
  ViewListChallengeRequestPayload
>
export type ViewListChallengeSuccessAction = ActionWithPayload<
  ViewListChallengeActionType.VIEW_LIST_CHALLENGE_SUCCESS,
  ViewListChallengeSuccessReponse
>
export type ViewListChallengeErrorAction = ActionWithPayload<
  ViewListChallengeActionType.VIEW_LIST_CHALLENGE_ERROR,
  ViewListChallengeErrorReponse
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
  | ViewListGroupIdRequestAction
  | ViewListGroupIdSuccessAction
  | ViewListGroupIdErrorAction
  | ViewListChallengeClearStateAction
  | UpdateFilterListChallengeAction

export interface ViewlistChallengeState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  filterRequest: ViewListChallengeRequestPayload
  challenges: IChallenge[]
  currentSize: number
  groups: Group[]
}
