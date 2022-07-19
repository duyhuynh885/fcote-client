import {
  ViewListLanguageActionType,
  ViewListLanguageClearStateAction,
  ViewListLanguageRequestAction,
} from './type'

/**
 * Action for view list language
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
export const clearState = (): ViewListLanguageClearStateAction => {
  return {
    type: ViewListLanguageActionType.CLEAR_STATE,
  }
}
