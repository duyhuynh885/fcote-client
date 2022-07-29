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
import { LeaveGroupActionType, LeaveGroupRequestAction, LeaveGroupClearStateAction } from './type'

/**
 * LeaveGroup request action
 * @param param LeaveGroupRequestPayload
 * @returns LeaveGroupRequestAction
 */
export const leaveGroupRequest = (idRequest: number): LeaveGroupRequestAction => {
  return {
    type: LeaveGroupActionType.LEAVE_GROUP_REQUESTING,
    groupId: idRequest,
  }
}

/**
 * Clear state action
 * @returns LeaveGroupClearStateAction
 */
export const clearStateLeaveGroup = (): LeaveGroupClearStateAction => {
  return {
    type: LeaveGroupActionType.LEAVE_GROUP_CLEAR_STATE,
  }
}
