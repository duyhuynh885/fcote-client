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
  EditGroupActionType,
  EditGroupRequestAction,
  EditGroupClearStateAction,
  EditGroupRequestPayload,
} from './type'

/**
 * EditGroup request action
 * @param param EditGroupRequestPayload
 * @returns EditGroupRequestAction
 */
export const editGroupRequest = (
  { image }: EditGroupRequestPayload,
  idRequest: number,
  titleRequest: string,
  descriptionRequest: string,
): EditGroupRequestAction => {
  return {
    type: EditGroupActionType.EDIT_GROUP_REQUESTING,
    groupId: idRequest,
    title: titleRequest,
    description: descriptionRequest,
    image,
  }
}

/**
 * Clear state action
 * @returns EditGroupClearStateAction
 */
export const clearStateEditGroup = (): EditGroupClearStateAction => {
  return {
    type: EditGroupActionType.EDIT_GROUP_CLEAR_STATE,
  }
}
