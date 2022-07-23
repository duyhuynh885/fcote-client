/**
 * Type for Toast
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

import { AlertColor } from '@mui/material'

export enum ToastActionType {
  SHOW_TOAST_ACTION = 'SHOW_TOAST_ACTION',
  HIDE_TOAST_ACTION = 'HIDE_TOAST_ACTION',
}

export interface ToastPayload {
  typeAlert: AlertColor
  message: string
}

export type HideToastAction = Action<ToastActionType.HIDE_TOAST_ACTION>
export type ShowToastAction = ActionWithPayload<ToastActionType.SHOW_TOAST_ACTION, ToastPayload>
export type ToastAction = ShowToastAction | HideToastAction
