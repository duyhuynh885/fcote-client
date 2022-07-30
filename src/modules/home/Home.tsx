import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import TopAssignment from '../../components/assignment/general/TopAssignment'

import ChallengeCompleted from '../../components/my-profile/view/ChallengeCompleted'
import React, { useEffect } from 'react'
import useStyles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../apps/ReduxContainer'
import { ViewListChallengeRequestPayload } from '../challenge/list/type'
import { fetchListChallengeRequest } from '../challenge/list/action'
import { fetchListAssignmentRequest } from '../assignment/list/action'
import { ViewListAssignmentRequestPayload } from '../assignment/list/type'
import { fetchRankingRequest } from '../ranking/action'
import TopUser from '../../components/home/TopUser'
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
 * 30-07-2022         HuyNT2711           Create
 */

const Home = () => {
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const topChallengeState = useSelector((state: RootState) => state.listChallenges)
  const topAssignmentsState = useSelector((state: RootState) => state.listAssignment)
  const rankingState = useSelector((state: RootState) => state.ranking)

  const TopChallengeRequest: ViewListChallengeRequestPayload = {
    typeData: 3,
    pageSize: 50,
    pageNumber: 1,
  }
  const TopAssignmentRequest: ViewListAssignmentRequestPayload = {
    pageSize: 10,
    filterByCurrentAccount: false,
    pageNumber: 0,
    filterByDifficult: 0,
    filterByStatus: 0,
    searchBy: '',
  }
  useEffect(() => {
    dispatch(fetchListChallengeRequest(TopChallengeRequest, undefined, undefined, undefined))
    dispatch(fetchListAssignmentRequest(TopAssignmentRequest))
    dispatch(fetchRankingRequest(rankingState.rankingTypeRequest))
  }, [])
  console.log('---------- topAssignmentsState', topAssignmentsState.assignments)

  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container>
        <Grid item xs={8} sx={{ padding: '0px 40px 10px 0px' }}>
          <Stack spacing={2}>
            <TopAssignment listAssignment={topAssignmentsState.assignments} />
            <ChallengeCompleted listChanllengeCompleted={topChallengeState.challenges} />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={8} sx={{ padding: '0px 20px 0px 0px' }}>
            <Typography className={classes.title}>LeaderBoard</Typography>
            <TopUser rankingList={rankingState.rankingList} />
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Home
