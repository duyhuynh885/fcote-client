import { Avatar, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import AssignmentItemStyle from './style'
import RegularButton from '../../Button/RegularButton'

/**
 * Assignment Item
 * <p>
 * Version 1.0
 * <p>
 * Date: 24-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 03-06-2022      HuyNT2711           Create
 * 24-06-2022      DuyHV               Update UI
 */
function AssignmentItem() {
  const classes = AssignmentItemStyle()
  const ImageURL =
    'https://picsum.photos/200'

  return (
    <Paper elevation={8} square className={classes.container}>
      <Stack direction='column' spacing={0.5}>
        <Typography className={classes.name}>Code.cpp September 2022</Typography>
        <Stack direction='column' justifyContent='center' alignItems='center'>
          <Avatar alt='Nguyen Tan Huy' src={ImageURL} />
          <Typography className={classes.userName}>Tan Huy</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography className={classes.state}>FINISHED</Typography>
          <Typography className={classes.level}>HARD</Typography>
        </Stack>
        <Stack>
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
      </Stack>
    </Paper>
  )
}

export default AssignmentItem
