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

import { EditGroupAction, EditGroupActionType, EditGroupState } from './type'

const initialState: EditGroupState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  editGroupRequest: {
    groupId: -1,
    title: '',
    description: '',
    image: '123',
  },
}

/**
 * Reducer Detail Group
 * @param state EditGroupState
 * @param action EditGroupAction
 * @returns
 */
const reducer = (state = initialState, action: EditGroupAction) => {
  switch (action.type) {
    case EditGroupActionType.EDIT_GROUP_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case EditGroupActionType.EDIT_GROUP_SUCCESS:
      return {
        ...state,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case EditGroupActionType.EDIT_GROUP_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case EditGroupActionType.EDIT_GROUP_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer
