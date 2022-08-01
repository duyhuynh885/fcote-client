import {
  ResetPasswordActionType,
  ResetPasswordClearStateAction,
  ResetPasswordRequestAction,
  ResetPasswordRequestPayload,
} from './type'

/**
 * Action for resetPassword
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
 * ResetPassword request action
 * @param param ResetPasswordRequestPayload
 * @returns ResetPasswordRequestAction
 */
export const resetPasswordRequest = ({
  email,
}: ResetPasswordRequestPayload): ResetPasswordRequestAction => {
  return {
    type: ResetPasswordActionType.RESET_PASSWORD_REQUESTING,
    email,
  }
}

/**
 * Clear state action
 */
export const resetPasswordClearStateRequest = (): ResetPasswordClearStateAction => {
  return {
    type: ResetPasswordActionType.RESET_PASSWORD_CLEAR_STATE,
  }
}
