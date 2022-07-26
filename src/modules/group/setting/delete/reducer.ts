/**
 * Reducer for detail group
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

import { DeleteGroupAction, DeleteGroupActionType, DeleteGroupState } from './type'

const initialState: DeleteGroupState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  deleteGroupRequest: {
    id: -1,
  },
}

/**
 * Reducer Detail Group
 * @param state DeleteGroupState
 * @param action DeleteGroupAction
 * @returns
 */
const reducer = (state = initialState, action: DeleteGroupAction) => {
  switch (action.type) {
    case DeleteGroupActionType.DELETE_GROUP_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case DeleteGroupActionType.DELETE_GROUP_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case DeleteGroupActionType.DELETE_GROUP_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case DeleteGroupActionType.DELETE_GROUP_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
