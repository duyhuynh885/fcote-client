import { Box, Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import useStyles from './style'
import SecondRankCard from './RankingCard/SecondRankCard'
import FirstRankCard from './RankingCard/FirstRankCard'
import ThirdRankCard from './RankingCard/ThirdRankCard'
/**
 * Best Of Three component
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

export default function BestOfThree() {
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
      className={classes.paperRoot}
    >
      <Stack direction='column' spacing={2}>
        <Box>
          <Grid container spacing={15} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <SecondRankCard/>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <FirstRankCard />
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <ThirdRankCard />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Paper>
  )
}
