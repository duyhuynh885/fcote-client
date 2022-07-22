import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'
import { hideToastAction } from '../../../modules/layout/toast/toastAction'
import { delay, put } from 'redux-saga/effects'

/**
 * Toast ui component
 *
 * Version 1.0
 *
 * Date: 22-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-07-2022         TuanLA           Create
 */

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

interface ToastProps {
  open: boolean
  message: string
  type: AlertColor
}

const defaultProps: ToastProps = {
  open: false,
  message: '',
  type: 'success',
}

const Toast: React.FC<ToastProps> = (props) => {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
  }

  return (
    <div>
      <Snackbar
        open={props.open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={props.type} sx={{ width: '100%' }}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

Toast.defaultProps = defaultProps

export default Toast
