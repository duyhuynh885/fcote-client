import { Typography } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import useStyles from './style'

/**
 * Status components
 *
 * Version 1.0
 *
 * Date: 26-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 26-07-2022         DuyHV           Create
 */

interface StatusProps {
  status: 'notSolved' | 'inProgress' | 'solved'
  displayText: string
}

export default function Status(props: StatusProps) {
  const classes = useStyles()
  const { status, displayText } = props
  const statusClasses = classNames({
    [classes.difficultStyle]: true,
    [classes[status]]: status,
  })

  return <Typography className={statusClasses}>{displayText}</Typography>
}
