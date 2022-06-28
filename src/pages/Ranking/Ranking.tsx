import { Grid, Stack } from '@mui/material'
import React from 'react'
import BestOfThree from '../../components/Ranking/BestOfThree'
import Leaderboard from '../../components/Ranking/Leaderboard'
/**
 * Ranking Pages
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
  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <BestOfThree/>
        </Grid>
        <Grid item xs={12}>
          <Leaderboard/>
        </Grid>
      </Grid>
    </Stack>
  )
}
