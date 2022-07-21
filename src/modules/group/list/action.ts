/**
 * Action for fetch list group
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
 * 21-06-2022         TuanLA           Create
 */

import {
  ViewListGroupActionType,
  ViewListGroupRequestAction,
  ViewListGroupRequestPayload,
  ViewListGroupClearStateAction,
} from './type'

/**
 * ViewListGroup request action
 * @param param ViewListGroupRequestPayload
 * @returns ViewListGroupRequestAction
 */
export const fetchListGroupRequest = ({
  pageSize,
  pageNumber,
}: ViewListGroupRequestPayload): ViewListGroupRequestAction => {
  return {
    type: ViewListGroupActionType.VIEW_LIST_GROUP_REQUESTING,
    pageNumber,
    pageSize,
  }
}

/**
 * Clear state action
 * @returns ViewListGroupClearStateAction
 */
 export const clearState = (): ViewListGroupClearStateAction => {
  return {
    type: ViewListGroupActionType.CLEAR_STATE,
  }
}