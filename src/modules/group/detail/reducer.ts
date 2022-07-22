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

import {
  GroupDetail,
  ViewDetailGroupAction,
  ViewDetailGroupActionType,
  ViewDetailGroupState,
} from './type'

const initialState: ViewDetailGroupState = {
  requesting: false,
  successful: false,
  messages: {} as Message,
  errors: {} as ErrorMessage,
  groupDetailRequest: {
    pageNumber: 0,
    pageSize: 15,
    id: 0,
  },
  groupDetail: {} as GroupDetail,
  member: [],
  currentSize: 0,
}

/**
 * Reducer Detail Group
 * @param state ViewDetailGroupState
 * @param action ViewDetailGroupAction
 * @returns
 */
 const reducer = (state = initialState, action: ViewDetailGroupAction) => {
  switch (action.type) {
    case ViewDetailGroupActionType.VIEW_DETAIL_GROUP_REQUESTING:
      return {
        ...state,
        requesting: true,
        successful: false,
      }

    case ViewDetailGroupActionType.VIEW_DETAIL_GROUP_SUCCESS:
      return {
        ...state,
        currentSize: action.currentSize,
        groupDetail: action.groupDetail,
        member: action.member,
        messages: {
          messageEn: action.messageEn,
          messageVi: action.messageVi,
        },
        requesting: false,
        successful: true,
      }

    case ViewDetailGroupActionType.VIEW_DETAIL_GROUP_ERROR:
      return {
        ...state,
        errors: {
          errorMessageEn: action.error.errorMessageEn,
          errorMessageVi: action.error.errorMessageVi,
        },
        requesting: false,
        successful: false,
      }

    case ViewDetailGroupActionType.VIEW_DETAIL_CLEAR_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default reducer