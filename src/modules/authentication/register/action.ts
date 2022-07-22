import { RegisterActionType, RegisterClearStateAction, RegisterRequestAction, RegisterRequestPayload } from './type'

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
 * Register request action
 * @param param RegisterRequestAction
 * @returns RegisterRequestAction
 */
export const registerRequest = ({
  firstName,
  lastName,
  username,
  email,
  password,
}: RegisterRequestPayload): RegisterRequestAction => {
  return {
    type: RegisterActionType.REGISTER_REQUESTING,
    firstName,
    lastName,
    username,
    email,
    password,
  }
}

/**
 * Clear state action
 */
 export const registerClearStateRequest = (): RegisterClearStateAction => {
  return {
    type: RegisterActionType.REGISTER_CLEAR_STATE,
  }
}
