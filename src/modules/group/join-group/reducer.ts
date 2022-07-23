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

import { JoinGroupAction, JoinGroupActionType, JoinGroupState } from './type'

const initialState: JoinGroupState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  joinGroupRequest: {
    joinCode: '',
  },
}

/**
 * Reducer Detail Group
 * @param state JoinGroupState
 * @param action JoinGroupAction
 * @returns
 */
const reducer = (state = initialState, action: JoinGroupAction) => {
  switch (action.type) {
    case JoinGroupActionType.JOIN_GROUP_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case JoinGroupActionType.JOIN_GROUP_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case JoinGroupActionType.JOIN_GROUP_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case JoinGroupActionType.CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
