import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import TopAssignment from '../../components/assignment/general/TopAssignment'
import TopUser from '../../components/home/TopUser'
import ChallengeCompleted from '../../components/my-profile/view/ChallengeCompleted'
import React from 'react'
import useStyles from './style'
/**
 * Home Pages
 *
 * Version 1.0
 *
 * Date: 22-06-2022O
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create
 */

const Home = () => {
  const classes = useStyles()
  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container>
        <Grid item xs={8} sx={{ padding: '0px 40px 10px 0px' }}>
          <Stack spacing={2}>
            <TopAssignment />
            <ChallengeCompleted listChanllengeCompleted={[]} />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={8} sx={{ padding: '0px 20px 0px 0px'}}>
            <Typography className={classes.title}>LeaderBoard</Typography>
            <TopUser />
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Home
