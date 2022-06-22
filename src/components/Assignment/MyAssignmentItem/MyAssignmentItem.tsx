import { Button, Paper, Typography } from '@mui/material'
import React from 'react'

import MyAssignmentItemStyle from './style'

/**
 * My Assignment Item
 * <p>
 * Version 1.0
 * <p>
 * Date: 04-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 04-06-2022      HuyNT2711           Create
 */

export default function MyAssignmentItem() {
  const classes = MyAssignmentItemStyle()
  return (
    <div>
      <Paper square className={classes.paperWrap} elevation={0}>
        <Typography className={classes.name}>Code.Cpp September 2022</Typography>
        <Typography className={classes.level}>HARD</Typography>
        <Button variant='outlined' className={classes.btn}>
          <Typography className={classes.textBtn}>View Assignment</Typography>
        </Button>
      </Paper>
    </div>
  )
}
