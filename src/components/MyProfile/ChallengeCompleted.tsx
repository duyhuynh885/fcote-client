import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ChallengeCard from '../ChallengeCard/ChallengeCard'
import useStyles from './style'

/**
 * Challenge completed component
 *
 * Version 1.0
 *
 * Date: 21-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 21-06-2022         DuyHV           Create
 */

export default function ChallengeCompleted() {
  const classes = useStyles()
  return (
    <Paper
      elevation={8}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Stack direction='column' spacing={2}>
        <Box>
          <Typography className={classes.title}>Challenge Completed</Typography>
        </Box>
        <Stack spacing={2} className={classes.scrollBar}>
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
        </Stack>
      </Stack>
    </Paper>
  )
}