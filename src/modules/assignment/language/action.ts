import {
  ViewListLanguageActionType,
  ViewListLanguageClearStateAction,
  ViewListLanguageRequestAction,
} from './type'

/**
 * Action for get languages
 *
 * Version 1.0
 *
 * Date: 26-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 26-07-2022         DuyHV           Create
 */

/**
 * ViewListLanguage request action
 * @param param ViewListLanguageRequestPayload
 * @returns ViewListLanguageRequestAction
 */
export const fetchListLanguageRequest = (): ViewListLanguageRequestAction => {
  return {
    type: ViewListLanguageActionType.VIEW_LIST_LANGUAGE_REQUESTING,
  }
}

/**
 * Clear state action
 * @returns ViewListLanguageClearStateAction
 */
export const viewListLanguageClearStateRequest = (): ViewListLanguageClearStateAction => {
  return {
    type: ViewListLanguageActionType.VIEW_LIST_LANGUAGE_CLEAR_STATE,
  }
}
