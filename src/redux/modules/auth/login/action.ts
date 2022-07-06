import {
  LoginActionType,
  LoginClearStateAction,
  LoginRequestAction,
  LoginRequestPayload,
  LogoutAction,
} from './type'

/**
 * Action Type for authenticate
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
 * Login request action
 * @param param LoginRequestPayload
 * @returns LoginRequestAction
 */
export const loginRequest = ({ email, password }: LoginRequestPayload): LoginRequestAction => {
  return {
    type: LoginActionType.LOGIN_REQUESTING,
    email,
    password,
  }
}

/**
 * Logout request action
 * @returns LogoutAction
 */
export const logoutRequest = (): LogoutAction => {
  return {
    type: LoginActionType.LOGOUT_REQUEST,
  }
}

/**
 * Clear state action
 * @returns LogoutAction
 */
export const clearState = (): LoginClearStateAction => {
  return {
    type: LoginActionType.CLEAR_STATE,
  }
}
