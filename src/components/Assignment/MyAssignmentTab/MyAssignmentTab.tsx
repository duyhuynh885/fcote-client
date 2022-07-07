import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MyAssignmentItem from './MyAssignmentItem'
import useStyles from './style'

/**
 * My Assignment Tab Component
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
export default function MyAssignmentTab() {
  const classes = useStyles()
  return (
    <Paper
      elevation={8}
      square
      sx={{ height: 830, display: 'flex', flexDirection: 'column', padding: 2 }}
    >
      <Stack direction='column' spacing={2}>
        <Box>
          <Link to='/my-assignment' className={classes.link}>
            <Typography className={classes.title}>My Assignment</Typography>
          </Link>
        </Box>
        <Stack spacing={2} className={classes.scrollBar}>
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
          <MyAssignmentItem />
        </Stack>
      </Stack>
    </Paper>
  )
}
