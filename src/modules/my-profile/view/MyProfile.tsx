import { Grid, Stack } from '@mui/material'
import React from 'react'
import AssignmentCompleted from '../../../components/my-profile/view/AssignmentCompleted'
import ChallengeCompleted from '../../../components/my-profile/view/ChallengeCompleted'
import Profile from '../../../components/my-profile/view/Profile'

/**
 * My Profile Pages
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */
export default function MyProfile() {
  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Profile></Profile>
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <ChallengeCompleted />
            <AssignmentCompleted />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
