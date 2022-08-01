import {
  LoginActionType,
  LoginClearStateAction,
  LoginRequestAction,
  LoginRequestPayload,
} from './type'

/**
 * Action for login
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
 * Clear state action
 */
export const loginClearStateRequest = (): LoginClearStateAction => {
  return {
    type: LoginActionType.LOGIN_CLEAR_STATE,
  }
}
