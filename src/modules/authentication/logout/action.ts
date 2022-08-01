import { LogoutActionType, LogoutClearStateAction, LogoutRequestAction } from './type'

/**
 * Action for logout
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */

/**
 * Logout request action
 * @param param LogoutRequestPayload
 * @returns LogoutRequestAction
 */
export const logoutRequest = (): LogoutRequestAction => {
  return {
    type: LogoutActionType.LOGOUT_REQUESTING,
  }
}

/**
 * Clear state action
 */
export const logoutClearStateRequest = (): LogoutClearStateAction => {
  return {
    type: LogoutActionType.LOGOUT_CLEAR_STATE,
  }
}
