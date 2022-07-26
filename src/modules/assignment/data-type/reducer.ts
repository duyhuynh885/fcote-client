import { ViewListDataTypeAction, ViewListDataTypeActionType, ViewListDataTypeState } from './type'

/**
 * Reducer for get data-type
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

const initialState: ViewListDataTypeState = {
  requesting: false,
  successful: false,
  errors: {} as ErrorMessage,
  dataType: [],
}

/**
 * Reducer Authentication
 * @param state ViewListDataTypeState
 * @param action ViewListDataTypeAction
 * @returns
 */
const reducer = (state = initialState, action: ViewListDataTypeAction) => {
  switch (action.type) {
    case ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        dataType: action.dataType,
      }

    case ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
