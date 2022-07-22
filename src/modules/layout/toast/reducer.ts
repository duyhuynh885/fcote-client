import { AlertColor } from '@mui/material'
import { ToastAction, ToastActionType } from './type'

/**
 * Reducer for authenticate
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

export const INITIAL_STATE = {
  open: false,
  typeAl: '' as AlertColor,
  message: '',
}

/**
 * Reducer Toast
 * @param state false
 * @param action ToastAction
 */
export default (state = INITIAL_STATE, action: ToastAction) => {
  switch (action.type) {
    case ToastActionType.SHOW_TOAST_ACTION:
      return { ...state, open: true, typeAl: action.typeAlert, message: action.message }
    case ToastActionType.HIDE_TOAST_ACTION:
      return { ...state, open: false }
    default:
      return state
  }
}
