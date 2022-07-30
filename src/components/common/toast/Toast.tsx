import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'

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
  return (
    <div>
      <Snackbar open={props.open} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert variant='standard' severity={props.type} sx={{ width: '100%' }}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

Toast.defaultProps = defaultProps

export default Toast
