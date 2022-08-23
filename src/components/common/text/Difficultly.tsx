import React from 'react'
import classNames from 'classnames'
import useStyles from './style'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import _ from 'lodash'

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
  const { t } = useTranslation()

  return (
    <Typography className={difficultyClasses}>{_.toUpper(t(_.capitalize(displayText)))}</Typography>
  )
}
