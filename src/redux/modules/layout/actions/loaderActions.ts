import { HideLoaderAction, LoaderActionType, ShowLoaderAction } from './../type'

/**
 * Action Type for loader
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */

/**
 * Show loader action
 * @returns ShowLoaderAction
 */
const showLoaderAction = (): ShowLoaderAction => {
  return {
    type: LoaderActionType.SHOW_LOADER_ACTION,
  }
}

/**
 * Hide loader action
 * @returns HideLoaderAction
 */
const hideLoaderAction = (): HideLoaderAction => {
  return {
    type: LoaderActionType.HIDE_LOADER_ACTION,
  }
}

export { showLoaderAction, hideLoaderAction }
