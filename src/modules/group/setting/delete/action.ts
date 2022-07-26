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
  DeleteGroupActionType,
  DeleteGroupRequestAction,
  DeleteGroupClearStateAction,
} from './type'

/**
 * DeleteGroup request action
 * @param param DeleteGroupRequestPayload
 * @returns DeleteGroupRequestAction
 */
export const deleteGroupRequest = (idRequest: number): DeleteGroupRequestAction => {
  return {
    type: DeleteGroupActionType.DELETE_GROUP_REQUESTING,
    id: idRequest,
  }
}

/**
 * Clear state action
 * @returns DeleteGroupClearStateAction
 */
export const clearStateDeleteGroup = (): DeleteGroupClearStateAction => {
  return {
    type: DeleteGroupActionType.DELETE_GROUP_CLEAR_STATE,
  }
}
