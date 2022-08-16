import { Grid, Stack } from '@mui/material'
import TopAssignment from '../../components/assignment/general/TopAssignment'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../apps/ReduxContainer'
import TopUser from '../../components/home/TopUser'
import ChallengeCompleted from '../../components/my-profile/view/ChallengeCompleted'
import {
  fetchListAssignmentRequest,
  viewListAssignmentClearStateRequest,
} from '../assignment/list/action'
import { ViewListAssignmentRequestPayload } from '../assignment/list/type'
import { clearStateViewListChallenge, fetchListChallengeRequest } from '../challenge/list/action'
import { ViewListChallengeRequestPayload } from '../challenge/list/type'
import { fetchRankingRequest, rankingClearState } from '../ranking/action'

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
    typeData: 5,
    pageSize: 5,
    pageNumber: 1,
  }

  const customTopAssignmentRequest: ViewListAssignmentRequestPayload = {
    pageSize: 10,
    filterByCurrentAccount: false,
    pageNumber: 0,
    filterByDifficult: 0,
    filterByStatus: 0,
    searchBy: '',
    filterByTop: true,
  }

  useEffect(() => {
    dispatch(fetchListChallengeRequest(customTopChallengeRequest))
    dispatch(fetchListAssignmentRequest(customTopAssignmentRequest))
    dispatch(fetchRankingRequest(rankingState.rankingTypeRequest))
  }, [])

  /**
   * clear state
   */
  useEffect(() => {
    return () => {
      dispatch(rankingClearState())
      dispatch(clearStateViewListChallenge())
      dispatch(viewListAssignmentClearStateRequest())
    }
  }, [])

  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container>
        <Grid item xs={8} sx={{ padding: '0px 40px 10px 0px' }}>
          <Stack spacing={3}>
            <TopAssignment listAssignment={topAssignmentsState.assignments} />
            <ChallengeCompleted
              title='Top 5 Challenge'
              listChallengeCompleted={topChallengeState.challenges}
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <TopUser ranking={rankingState} />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Home
