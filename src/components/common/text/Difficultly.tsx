import React from 'react'
import classNames from 'classnames'
import useStyles from './style'
import { Typography } from '@mui/material'

/**
 * Difficultly components
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
interface DifficultlyProps {
  difficult: 'easy' | 'medium' | 'hard'
  displayText: string
}

export default function Difficultly(props: DifficultlyProps) {
  const classes = useStyles()
  const { difficult, displayText } = props
  const difficultyClasses = classNames({
    [classes.difficultStyle]: true,
    [classes[difficult]]: difficult,
  })

  return <Typography className={difficultyClasses}>{displayText}</Typography>
}
