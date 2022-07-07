import { RegisterActionType, RegisterRequestAction, RegisterRequestPayload } from './type'

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
  userName,
  email,
  password,
}: RegisterRequestPayload): RegisterRequestAction => {
  return {
    type: RegisterActionType.REGISTER_REQUESTING,
    firstName,
    lastName,
    userName,
    email,
    password,
  }
}