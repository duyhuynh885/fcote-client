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
  CreateGroupActionType,
  CreateGroupRequestAction,
  CreateGroupRequestPayload,
  CreateGroupClearStateAction,
} from './type'

/**
 * CreateGroup request action
 * @param param CreateGroupRequestPayload
 * @returns CreateGroupRequestAction
 */
export const createGroupRequest = (
  { image }: CreateGroupRequestPayload,
  groupName: string,
  groupDescription: string,
): CreateGroupRequestAction => {
  return {
    type: CreateGroupActionType.CREATE_GROUP_REQUESTING,
    image,
    title: groupName,
    description: groupDescription,
  }
}

/**
 * Clear state action
 * @returns CreateGroupClearStateAction
 */
export const clearStateCreateGroup = (): CreateGroupClearStateAction => {
  return {
    type: CreateGroupActionType.CREATE_GROUP_CLEAR_STATE,
  }
}
