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
import { KickGroupActionType, KickGroupRequestAction, KickGroupClearStateAction } from './type'

/**
 * KickGroup request action
 * @param param KickGroupRequestPayload
 * @returns KickGroupRequestAction
 */
export const kickGroupRequest = (idGroup: number, idMember: number): KickGroupRequestAction => {
  return {
    type: KickGroupActionType.KICK_GROUP_REQUESTING,
    groupId: idGroup,
    memberId: idMember,
  }
}

/**
 * Clear state action
 * @returns KickGroupClearStateAction
 */
export const clearStateKickGroup = (): KickGroupClearStateAction => {
  return {
    type: KickGroupActionType.KICK_GROUP_CLEAR_STATE,
  }
}
