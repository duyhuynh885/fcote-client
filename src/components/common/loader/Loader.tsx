import React from 'react'
import { CircularProgress, Backdrop } from '@mui/material'

/**
 * Loader ui component
 *
 * Version 1.0
 *
 * Date: 21-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 21-06-2022         DuyHV           Create
 */

interface LoaderProps {
  loading: boolean
}

const defaultProps: LoaderProps = {
  loading: false,
}

const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <div>
      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={props.loading}>
        <CircularProgress color='success' />
      </Backdrop>
    </div>
  )
}

Loader.defaultProps = defaultProps

export default Loader
