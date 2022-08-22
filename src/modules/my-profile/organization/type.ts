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

export enum GetOrganizationActionType {
  GET_ORGANIZATION_REQUESTING = 'GET_ORGANIZATION_REQUESTING',
  GET_ORGANIZATION_SUCCESS = 'GET_ORGANIZATION_SUCCESS',
  GET_ORGANIZATION_ERROR = 'GET_ORGANIZATION_ERROR',
  GET_ORGANIZATION_CLEAR_STATE = 'GET_ORGANIZATION_CLEAR_STATE',
}

export interface Organization {
  id: number
  title: string
}

export interface GetOrganizationSuccessResponse {
  organizations: Organization[]
}

export interface GetOrganizationErrorResponse {
  error: ErrorMessage
}

export type GetOrganizationRequestAction =
  Action<GetOrganizationActionType.GET_ORGANIZATION_REQUESTING>

export type GetOrganizationSuccessAction = ActionWithPayload<
  GetOrganizationActionType.GET_ORGANIZATION_SUCCESS,
  GetOrganizationSuccessResponse
>
export type GetOrganizationErrorAction = ActionWithPayload<
  GetOrganizationActionType.GET_ORGANIZATION_ERROR,
  GetOrganizationErrorResponse
>
export type GetOrganizationClearStateAction =
  Action<GetOrganizationActionType.GET_ORGANIZATION_CLEAR_STATE>

export type GetOrganizationAction =
  | GetOrganizationRequestAction
  | GetOrganizationSuccessAction
  | GetOrganizationErrorAction
  | GetOrganizationClearStateAction

export interface GetOrganizationState {
  requesting: boolean
  successful: boolean
  messages: Message
  errors: ErrorMessage
  data: Organization[]
}
