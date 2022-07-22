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
  JoinGroupActionType,
  JoinGroupRequestAction,
  JoinGroupClearStateAction,
} from './type'

/**
 * JoinGroup request action
 * @param param JoinGroupRequestPayload
 * @returns JoinGroupRequestAction
 */
export const joinGroupRequest = (code: string): JoinGroupRequestAction => {
  return {
    type: JoinGroupActionType.JOIN_GROUP_REQUESTING,
    joinCode: code,
  }
}

/**
 * Clear state action
 * @returns JoinGroupClearStateAction
 */
export const clearStateJoinGroup = (): JoinGroupClearStateAction => {
  return {
    type: JoinGroupActionType.JOIN_GROUP_CLEAR_STATE,
  }
}
