/**
 * Reducer for list group
 *
 * Version 1.0
 *
 * Date: 21-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 21-07-2022         TuanLA           Create
 */

import { ViewListGroupAction, ViewListGroupActionType, ViewListGroupState } from './type'

const initialState: ViewListGroupState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  groupTypeRequest: {
    pageNumber: 0,
    pageSize: 15,
  },
  groups: [],
  currentSize: 0,
}

/**
 * Reducer List Group
 * @param state ViewListGroupState
 * @param action ViewListGroupAction
 * @returns
 */
const reducer = (state = initialState, action: ViewListGroupAction) => {
  switch (action.type) {
    case ViewListGroupActionType.VIEW_LIST_GROUP_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ViewListGroupActionType.VIEW_LIST_GROUP_SUCCESS:
      return {
        ...state,
        currentSize: action.currentSize,
        groups: action.groups,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case ViewListGroupActionType.VIEW_LIST_GROUP_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case ViewListGroupActionType.VIEW_LIST_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
