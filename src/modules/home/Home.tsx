import { Grid, Stack } from '@mui/material'
import React from 'react'
import TopAssignment from '../../components/assignment/general/TopAssignment'
import TopUser from '../../components/home/TopUser'
import ChallengeCompleted from '../../components/my-profile/view/ChallengeCompleted'
import LeaderBoardsTable from '../../components/ranking/detail/LeaderBoardsTable/LeaderBoardsTable'
import { UserInfo } from '../ranking/type'

/**
 * Home Pages
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

const Home = () => {
  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <TopAssignment />
            <ChallengeCompleted listChanllengeCompleted={[]} />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <TopUser />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Home
