import { HideToastAction, ToastActionType, ShowToastAction } from './type'
import { AlertColor } from '@mui/material'
/**
 * Action Type for Toast
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
 * Show Toast action
 * @returns ShowToastAction
 */
const showToastAction = (typeAlertRq: AlertColor, message: string): ShowToastAction => {
  return {
    type: ToastActionType.SHOW_TOAST_ACTION,
    typeAlert: typeAlertRq,
    message: message,
  }
}

/**
 * Hide Toast action
 * @returns HideToastAction
 */
const hideToastAction = (): HideToastAction => {
  return {
    type: ToastActionType.HIDE_TOAST_ACTION,
  }
}

export { showToastAction, hideToastAction }
