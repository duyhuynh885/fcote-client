import { Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import RegularButton from '../../Button/RegularButton'

import useStyles from './style'

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
 * 24-06-2022      DuyHV               Update UI
 */

export default function MyAssignmentItem() {
  const classes = useStyles()
  return (
    <div>
      <Paper square className={classes.paperWrap} elevation={0}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2}>
          <Typography className={classes.name}>Code.Cpp September 2022</Typography>
          <Typography className={classes.level}>HARD</Typography>
          <RegularButton
            color={'primary'}
            size={'sm'}
            round={false}
            fullWidth={false}
            disabled={false}
            simple={false}
            block={false}
            link={false}
            justIcon={false}
            className={''}
          >
            View Assignment
          </RegularButton>
        </Stack>
      </Paper>
    </div>
  )
}
