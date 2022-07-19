import { Grid, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import Leaderboard from '../../components/ranking/detail/Leaderboard'
import TopRanking from '../../components/ranking/detail/TopRanking'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../apps/ReduxContainer'
import { clearState, fetchRankingRequest } from './action'
/**
 * ranking Pages
 *
 * Version 1.0
 *
 * Date: 24-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 24-06-2022         TuanLA           Create
 */

export default function Ranking() {
  const dispatch = useDispatch<AppDispatch>()
  const rankingState = useSelector((state: RootState) => state.ranking)
  const topThreeState = useSelector((state: RootState) => state.ranking.top3)
  const rankingListState = useSelector((state: RootState) => state.ranking.rankingList)

  useEffect(() => {
    console.log('fetch Ranking')
    dispatch(fetchRankingRequest(rankingState.rankingTypeRequest))
  }, [rankingState.rankingTypeRequest])

  return (
    <Stack sx={{}}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TopRanking data={topThreeState} />
        </Grid>
        <Grid item xs={12}>
          <Leaderboard data={rankingListState} />
        </Grid>
      </Grid>
    </Stack>
  )
}
