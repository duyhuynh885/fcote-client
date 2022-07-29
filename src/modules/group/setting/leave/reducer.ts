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

import { LeaveGroupAction, LeaveGroupActionType, LeaveGroupState } from './type'

const initialState: LeaveGroupState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  leaveGroupRequest: {
    groupId: -1,
  },
}

/**
 * Reducer Detail Group
 * @param state LeaveGroupState
 * @param action LeaveGroupAction
 * @returns
 */
const reducer = (state = initialState, action: LeaveGroupAction) => {
  switch (action.type) {
    case LeaveGroupActionType.LEAVE_GROUP_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case LeaveGroupActionType.LEAVE_GROUP_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case LeaveGroupActionType.LEAVE_GROUP_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case LeaveGroupActionType.LEAVE_GROUP_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
