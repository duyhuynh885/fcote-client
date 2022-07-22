/**
 * Action for fetch detail group
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
  ViewDetailGroupActionType,
  ViewDetailGroupRequestAction,
  ViewDetailGroupRequestPayload,
  ViewDetailGroupClearStateAction,
} from './type'

/**
 * ViewDetailGroup request action
 * @param param ViewDetailGroupRequestPayload
 * @returns ViewDetailGroupRequestAction
 */
export const fetchDetailGroupRequest = (
  { pageSize, pageNumber }: ViewDetailGroupRequestPayload,
  idRequest: number,
): ViewDetailGroupRequestAction => {
  return {
    type: ViewDetailGroupActionType.VIEW_DETAIL_GROUP_REQUESTING,
    id: idRequest,
    pageNumber,
    pageSize,
  }
}

/**
 * Clear state action
 * @returns ViewDetailGroupClearStateAction
 */
export const clearState = (): ViewDetailGroupClearStateAction => {
  return {
    type: ViewDetailGroupActionType.CLEAR_STATE,
  }
}
