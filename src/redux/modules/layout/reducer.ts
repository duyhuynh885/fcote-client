import { LoaderAction, LoaderActionType } from './type'

/**
 * Reducer for authenticate
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

export const INITIAL_STATE = {
  loading: false,
}

/**
 * Reducer Loader
 * @param state false
 * @param action LoaderAction
 */
export default (state = INITIAL_STATE, action: LoaderAction) => {
  switch (action.type) {
    case LoaderActionType.SHOW_LOADER_ACTION:
      return { ...state, loading: true }
    case LoaderActionType.HIDE_LOADER_ACTION:
      return { ...state, loading: false }
    default:
      return state
  }
}
