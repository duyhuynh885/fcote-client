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

import { KickGroupAction, KickGroupActionType, KickGroupState } from './type'

const initialState: KickGroupState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  kickGroupRequest: {
    groupId: 0,
    memberId: 0,
  },
}

/**
 * Reducer Detail Group
 * @param state KickGroupState
 * @param action KickGroupAction
 * @returns
 */
const reducer = (state = initialState, action: KickGroupAction) => {
  switch (action.type) {
    case KickGroupActionType.KICK_GROUP_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case KickGroupActionType.KICK_GROUP_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case KickGroupActionType.KICK_GROUP_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case KickGroupActionType.KICK_GROUP_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
