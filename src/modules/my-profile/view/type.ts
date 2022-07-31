import { IChallenge } from '../../challenge/list/type'

/**
 * type my profile
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

export enum ViewMyProfileActionType {
  VIEW_USER_ASSIGNMENT_REQUESTING = 'VIEW_USER_ASSIGNMENT_REQUESTING',
  VIEW_USER_ASSIGNMENT_SUCCESS = 'VIEW_USER_ASSIGNMENT_SUCCESS',
  VIEW_USER_ASSIGNMENT_ERROR = 'VIEW_USER_ASSIGNMENT_ERROR',
  VIEW_CHALLENGE_COMPLETED_REQUESTING = 'VIEW_CHALLENGE_COMPLETED_REQUESTING',
  VIEW_CHALLENGE_COMPLETED_SUCCESS = 'VIEW_CHALLENGE_COMPLETED_SUCCESS',
  VIEW_CHALLENGE_COMPLETED_ERROR = 'VIEW_CHALLENGE_COMPLETED_ERROR ',
}
export interface IUser {
  userId: string
  avatar: string
  firstName: string
  lastName: string
  username: string
  organizationTitle: string
  city: string
  country: string
  email: string
  phone: string
  gender: string
  createdAt: string
}
export interface IAssignmentCompleted {
  numberAssignmentCompletedFollowHard: number
  numberAssignmentCompletedFollowMedium: number
  numberAssignmentCompletedFollowEasy: number
  totalScore: number
}
export interface ViewUserAssignmentRequestingPayload {
  typeData: number
  username: string
  firstName: string
  lastName: string
  organization: string
  city: string
  country: string
  phone: string
  gender: string
}

export interface ViewUserAssignmentSuccessResponse {
  user: IUser
  assignmentCompleted: IAssignmentCompleted
}
export interface ViewUserAssignmentErrorResponse {
  error: ErrorMessage
}

export interface ViewChallengeCompletedRequestingPayload {
  typeData: number
  username: string
}

export interface ViewChallengeCompletedSuccessResponse {
  challenges: IChallenge[]
  currentSize: number
}
export interface ViewChallengeCompletedErrorResponse {
  error: ErrorMessage
}

export type ViewUserAssignmentRequestAction = ActionWithPayload<
  ViewMyProfileActionType.VIEW_USER_ASSIGNMENT_REQUESTING,
  ViewUserAssignmentRequestingPayload
>

export type ViewUserAssignmentSuccessAction = ActionWithPayload<
  ViewMyProfileActionType.VIEW_USER_ASSIGNMENT_SUCCESS,
  ViewUserAssignmentSuccessResponse
>
export type ViewUserAssignmentErrorAction = ActionWithPayload<
  ViewMyProfileActionType.VIEW_USER_ASSIGNMENT_ERROR,
  ViewUserAssignmentErrorResponse
>

export type ViewChallengeCompletedRequestAction = ActionWithPayload<
  ViewMyProfileActionType.VIEW_CHALLENGE_COMPLETED_REQUESTING,
  ViewChallengeCompletedRequestingPayload
>

export type ViewChallengeCompletedSuccessAction = ActionWithPayload<
  ViewMyProfileActionType.VIEW_CHALLENGE_COMPLETED_SUCCESS,
  ViewChallengeCompletedSuccessResponse
>
export type ViewChallengeCompletedErrorAction = ActionWithPayload<
  ViewMyProfileActionType.VIEW_CHALLENGE_COMPLETED_ERROR,
  ViewChallengeCompletedErrorResponse
>

export type ViewMyProfileAction =
  | ViewUserAssignmentRequestAction
  | ViewUserAssignmentSuccessAction
  | ViewUserAssignmentErrorAction
  | ViewChallengeCompletedRequestAction
  | ViewChallengeCompletedSuccessAction
  | ViewChallengeCompletedErrorAction

export interface ViewMyProfileState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  userAssignmentRequest: ViewUserAssignmentRequestingPayload
  challengeCompletedRequest: ViewChallengeCompletedRequestingPayload
  user: IUser
  assignmentCompleted: IAssignmentCompleted
  // challengeCompleted: ViewChallengeCompletedSuccessResponse
  challengeCompleted: {
    listChallengeCompleted: IChallenge[]
    currentSize: number
  }
}
