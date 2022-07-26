import React from 'react'
import classNames from 'classnames'
import useStyles from './style'
import { Typography } from '@mui/material'

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
