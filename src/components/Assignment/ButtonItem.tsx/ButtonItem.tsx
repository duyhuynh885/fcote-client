import React from 'react'
import { Button, Typography } from '@mui/material'
import ButtonItemStyle from './style'

/**
 * Button Item component
 * <p>
 * Version 1.0
 * <p>
 * Date: 02-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 02-06-2022      HuyNT2711           Create
 */

export default function ButtonItem() {
  const classes = ButtonItemStyle()
  return (
    <Button style={{ width: '' }} variant='outlined' className={classes.btn}>
      <Typography className={classes.textBtn}>View Assignment</Typography>
    </Button>
  )
}
