import {
  ViewListDataTypeActionType,
  ViewListDataTypeClearStateAction,
  ViewListDataTypeRequestAction,
} from './type'

/**
 * Action for get data-type
 *
 * Version 1.0
 *
 * Date: 26-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 26-07-2022         DuyHV           Create
 */

/**
 * ViewListDataType request action
 * @param param ViewListDataTypeRequestPayload
 * @returns ViewListDataTypeRequestAction
 */
export const fetchListDataTypeRequest = (): ViewListDataTypeRequestAction => {
  return {
    type: ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_REQUESTING,
  }
}

/**
 * Clear state action
 * @returns ViewListDataTypeClearStateAction
 */
export const viewListDataTypeClearStateRequest = (): ViewListDataTypeClearStateAction => {
  return {
    type: ViewListDataTypeActionType.VIEW_LIST_DATA_TYPE_CLEAR_STATE,
  }
}
