import React from 'react'
import { Typography } from '@mui/material'
import useStyles from './style'
import history from '../../../configs/routing/history'

/**
 * ButtonBack
 * <p>
 * Version 1.0
 * <p>
 * Date: 24-06-2022
 * <p>
 * Copyright By DuyHV
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 24-06-2022      DuyHV           Create
 */

export default function ButtonBack() {
  const classes = useStyles()
  function handleBackButton() {
    history.goBack()
  }
  return (
    <Typography onClick={handleBackButton} className={classes.buttonBack}>
      {'< BACK'}
    </Typography>
  )
}
