/**
 * Reducer create group
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

import { CreateGroupAction, CreateGroupActionType, CreateGroupState } from './type'

const initialState: CreateGroupState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  createGroupRequest: {
    title: '',
    description: '',
    image: '234251',
  },
}

/**
 * Reducer Detail Group
 * @param state CreateGroupState
 * @param action CreateGroupAction
 * @returns
 */
const reducer = (state = initialState, action: CreateGroupAction) => {
  switch (action.type) {
    case CreateGroupActionType.CREATE_GROUP_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case CreateGroupActionType.CREATE_GROUP_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case CreateGroupActionType.CREATE_GROUP_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case CreateGroupActionType.CREATE_GROUP_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
