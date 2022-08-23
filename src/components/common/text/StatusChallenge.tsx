import { Typography } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import { useTranslation } from 'react-i18next'
import useStyles from './style'

/**
 * StatusChallenge components
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

interface StatusChallengeProps {
  status: 'notOpenYet' | 'open' | 'close'
  displayText: string
  size: 'small' | 'large'
}

export default function StatusChallengeChallenge(props: StatusChallengeProps) {
  const classes = useStyles()
  const { status, displayText, size } = props
  const statusClasses = classNames({
    [classes.statusChallengeStyle]: true,
    [classes[status]]: status,
    [classes[size]]: size,
  })
  const { t } = useTranslation()

  return <Typography className={statusClasses}>{t(displayText)}</Typography>
}
