import { StatusChallengeEnum } from './../list/type'
/**
 * Type for get detail challenge
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

export enum ViewDetailChallengeActionType {
  VIEW_DETAIL_CHALLENGE_REQUESTING = 'VIEW_DETAIL_CHALLENGE_REQUESTING',
  VIEW_DETAIL_CHALLENGE_SUCCESS = 'VIEW_DETAIL_CHALLENGE_SUCCESS',
  VIEW_DETAIL_CHALLENGE_ERROR = 'VIEW_DETAIL_CHALLENGE_ERROR',
  VIEW_DETAIL_CHALLENGE_CLEAR_STATE = 'VIEW_DETAIL_CHALLENGE_CLEAR_STATE',
}

export interface ViewDetailChallengeRequestPayload {
  id: number
}

export interface ViewDetailChallengeErrorResponse {
  error: ErrorMessage
}

export interface Detail {
  title: string
  description: string
  createdBy: string
  image: string
  group: string
  groupId: number
  totalAssignment: number
  startAt: string
  endAt: string
  status: StatusChallengeEnum
  totalParticipial: number
}

export interface AssignmentList {
  score: number
  order: number
  assignmentId: number
}

export interface Submit {
  ranking: number
  totalResult: TotalResult
  userInfo: UserInfo
  assignmentResults: AssignmentResult[]
}

export interface TotalResult {
  score: number
  time: string
}

export interface UserInfo {
  username: string
  city: string
  avatar: string
  organization: string
}

export interface AssignmentResult {
  assignmentId: number
  highestScore: number | string
  shortestRuntime: number | string
  counter: number | string
  time: string
}

export interface ViewDetailChallengeResponse {
  detail: Detail
  assignmentList: AssignmentList[]
  submits: Submit[]
}

export type ViewDetailChallengeRequestAction = ActionWithPayload<
  ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_REQUESTING,
  ViewDetailChallengeRequestPayload
>
export type ViewDetailChallengeSuccessAction = ActionWithPayload<
  ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_SUCCESS,
  ViewDetailChallengeResponse
>
export type ViewDetailChallengeErrorAction = ActionWithPayload<
  ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_ERROR,
  ViewDetailChallengeErrorResponse
>
export type ViewDetailChallengeClearStateAction =
  Action<ViewDetailChallengeActionType.VIEW_DETAIL_CHALLENGE_CLEAR_STATE>

export type ViewDetailChallengeAction =
  | ViewDetailChallengeRequestAction
  | ViewDetailChallengeSuccessAction
  | ViewDetailChallengeErrorAction
  | ViewDetailChallengeClearStateAction

export interface ViewDetailChallengeState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  detail: Detail
  assignmentList: AssignmentList[]
  submits: Submit[]
}
