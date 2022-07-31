import { Grid, Stack } from '@mui/material'
import TopAssignment from '../../components/assignment/general/TopAssignment'
import ChallengeCompleted from '../../components/my-profile/view/ChallengeCompleted'
import React, { useEffect } from 'react'
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
  const dispatch = useDispatch<AppDispatch>()
  const topChallengeState = useSelector((state: RootState) => state.listChallenges)
  const topAssignmentsState = useSelector((state: RootState) => state.listAssignment)
  const rankingState = useSelector((state: RootState) => state.ranking)

  const customTopChallengeRequest: ViewListChallengeRequestPayload = {
    typeData: 3,
    pageSize: 10,
    pageNumber: 1,
  }

  const customTopAssignmentRequest: ViewListAssignmentRequestPayload = {
    pageSize: 10,
    filterByCurrentAccount: false,
    pageNumber: 0,
    filterByDifficult: 0,
    filterByStatus: 0,
    searchBy: '',
  }

  useEffect(() => {
    dispatch(fetchListChallengeRequest(customTopChallengeRequest, undefined, undefined, undefined))
    dispatch(fetchListAssignmentRequest(customTopAssignmentRequest))
    dispatch(fetchRankingRequest(rankingState.rankingTypeRequest))
  }, [])

  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Stack direction='column' spacing={3}>
            <TopAssignment listAssignment={topAssignmentsState.assignments} />
            <ChallengeCompleted listChallengeCompleted={topChallengeState.challenges} />
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ height: '100%' }}>
          <TopUser rankingList={rankingState.rankingList} />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Home
