import { ViewListLanguageAction, ViewListLanguageActionType, ViewListLanguageState } from './type'

/**
 * Reducer for create assignment
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

const initialState: ViewListLanguageState = {
  requesting: false,
  successful: false,
  errors: {} as ErrorMessage,
  languages: [],
}

/**
 * Reducer Authentication
 * @param state ViewListLanguageState
 * @param action ViewListLanguageAction
 * @returns
 */
const reducer = (state = initialState, action: ViewListLanguageAction) => {
  switch (action.type) {
    case ViewListLanguageActionType.VIEW_LIST_LANGUAGE_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ViewListLanguageActionType.VIEW_LIST_LANGUAGE_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        languages: action.languages,
      }

    case ViewListLanguageActionType.VIEW_LIST_LANGUAGE_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case ViewListLanguageActionType.CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
