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
  VIEW_MY_PROFILE_REQUESTING = 'VIEW_MY_PROFILE_REQUESTING',
  VIEW_MY_PROFILE_SUCCESS = 'VIEW_MY_PROFILE_SUCCESS',
  VIEW_MY_PROFILE_ERROR = 'VIEW_MY_PROFILE_ERROR',
  VIEW_MY_PROFILE_CLEAR_STATE = 'VIEW_MY_PROFILE_CLEAR_STATE',
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

export interface ViewMyProfileRequestingPayload {
  typeData: number
  username: string
}

export interface ViewMyProfileSuccessResponse {
  user: IUser
  assignmentCompleted: IAssignmentCompleted
}

export interface ViewMyProfileErrorResponse {
  error: ErrorMessage
}

export type ViewMyProfileRequestAction = ActionWithPayload<
  ViewMyProfileActionType.VIEW_MY_PROFILE_REQUESTING,
  ViewMyProfileRequestingPayload
>

export type ViewMyProfileSuccessAction = ActionWithPayload<
  ViewMyProfileActionType.VIEW_MY_PROFILE_SUCCESS,
  ViewMyProfileSuccessResponse
>
export type ViewMyProfileErrorAction = ActionWithPayload<
  ViewMyProfileActionType.VIEW_MY_PROFILE_ERROR,
  ViewMyProfileErrorResponse
>
export type ViewDetailProfileClearStateAction =
  Action<ViewMyProfileActionType.VIEW_MY_PROFILE_CLEAR_STATE>

export type ViewMyProfileAction =
  | ViewMyProfileRequestAction
  | ViewMyProfileSuccessAction
  | ViewMyProfileErrorAction
  | ViewDetailProfileClearStateAction

export interface ViewMyProfileState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  user: IUser
  assignmentCompleted: IAssignmentCompleted
}
