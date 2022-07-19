import React from 'react'
import { Box, Grid, Paper, Stack } from '@mui/material'
import useStyles from './style'
import TopMember from './Top/TopMenber'
/**
 * First Rank Card component
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

export default function TopRanking() {
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
          <Grid container spacing={10} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <TopMember rank={2} avatar='' name='Le Anh Tuan' score={5000} university='FPT' />
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <TopMember rank={1} avatar='' name='Le Anh Tuan' score={9000} university='FPT' />
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction='column' alignItems='center'>
                <TopMember rank={3} avatar='' name='Le Anh Tuan' score={7000} university='FPT' />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Paper>
  )
}
