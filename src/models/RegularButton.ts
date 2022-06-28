/**
 * Regular Button Type Model
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
export interface RegularButtonType {
  color: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'white' | 'transparent' | 'dotted'
  size: 'sm' | 'lg'
  round: boolean
  children?: React.ReactNode
  fullWidth: boolean
  disabled: boolean
  simple: boolean
  block: boolean
  link: boolean
  justIcon: boolean
  className: string
  onClick?: React.MouseEventHandler
}
