import { GetMyProfileActionType, GetUserProfileRequestAction } from './type'

/**
 * actions my profile
 *
 * Version 1.0
 *
 * Date: 31-07-2022
 *
 * Copyright By TuanLA
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 31-07-2022      TuanLA           Create
 */

export const getUserProfileRequest = (): GetUserProfileRequestAction => {
  return {
    type: GetMyProfileActionType.GET_USER_PROFILE_REQUESTING,
  }
}
