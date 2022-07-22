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

export enum ViewListLanguageActionType {
  VIEW_LIST_LANGUAGE_REQUESTING = 'VIEW_LIST_LANGUAGE_REQUESTING',
  VIEW_LIST_LANGUAGE_SUCCESS = 'VIEW_LIST_LANGUAGE_SUCCESS',
  VIEW_LIST_LANGUAGE_ERROR = 'VIEW_LIST_LANGUAGE_ERROR',
  VIEW_LIST_LANGUAGE_CLEAR_STATE = 'VIEW_LIST_LANGUAGE_CLEAR_STATE',
}

export interface Language {
  id: string
  title: number
}
export interface ViewListLanguageErrorResponse {
  error: ErrorMessage
}

export interface ViewListLanguageResponse {
  languages: Language[]
}

export type ViewListLanguageRequestAction =
  Action<ViewListLanguageActionType.VIEW_LIST_LANGUAGE_REQUESTING>
export type ViewListLanguageSuccessAction = ActionWithPayload<
  ViewListLanguageActionType.VIEW_LIST_LANGUAGE_SUCCESS,
  ViewListLanguageResponse
>
export type ViewListLanguageErrorAction = ActionWithPayload<
  ViewListLanguageActionType.VIEW_LIST_LANGUAGE_ERROR,
  ViewListLanguageErrorResponse
>
export type ViewListLanguageClearStateAction = Action<ViewListLanguageActionType.VIEW_LIST_LANGUAGE_CLEAR_STATE>

export type ViewListLanguageAction =
  | ViewListLanguageRequestAction
  | ViewListLanguageSuccessAction
  | ViewListLanguageErrorAction
  | ViewListLanguageClearStateAction

export interface ViewListLanguageState {
  requesting: boolean
  successful: boolean
  errors: ErrorMessage
  languages: Language[]
}
