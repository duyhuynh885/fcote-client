/**
 * Type for create assignment
 *
 * Version 1.0
 *
 * Date: 13-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 13-07-2022         DuyHV           Create
 */

export enum ViewListDataTypeActionType {
  VIEW_LIST_DATA_TYPE_REQUESTING = 'VIEW_LIST_DATA_TYPE_REQUESTING',
  VIEW_LIST_DATA_TYPE_SUCCESS = 'VIEW_LIST_DATA_TYPE_SUCCESS',
  VIEW_LIST_DATA_TYPE_ERROR = 'VIEW_LIST_DATA_TYPE_ERROR',
  VIEW_LIST_DATA_TYPE_CLEAR_STATE = 'VIEW_LIST_DATA_TYPE_CLEAR_STATE',
  UPDATE_REQUEST_VIEW_LIST_DATA_TYPE = 'UPDATE_REQUEST_VIEW_LIST_DATA_TYPE',
}

export interface DataType {
  name: string
  value: number
}

export interface ViewListDataTypeErrorResponse {
  error: ErrorMessage
}

export interface ViewListDataTypeResponse {
  dataType: DataType[]
}

export type ViewListDataTypeRequestAction =
  Action<ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_REQUESTING>
export type ViewListDataTypeSuccessAction = ActionWithPayload<
  ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_SUCCESS,
  ViewListDataTypeResponse
>
export type ViewListDataTypeErrorAction = ActionWithPayload<
  ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_ERROR,
  ViewListDataTypeErrorResponse
>
export type ViewListDataTypeClearStateAction = Action<ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_CLEAR_STATE>

export type ViewListDataTypeAction =
  | ViewListDataTypeRequestAction
  | ViewListDataTypeSuccessAction
  | ViewListDataTypeErrorAction
  | ViewListDataTypeClearStateAction

export interface ViewListDataTypeState {
  requesting: boolean
  successful: boolean
  errors: ErrorMessage
  dataType: DataType[]
}
