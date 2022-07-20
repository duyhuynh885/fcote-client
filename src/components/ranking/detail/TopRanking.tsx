import React from 'react'
import { Box, Grid, Paper, Stack } from '@mui/material'
import { UserInfor } from '../../../modules/ranking/type'
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

interface UserInforProps {
  data: UserInfor[]
}

const immutablySwapItems = (items: UserInfor[], firstIndex: number, secondIndex: number) =>
  items.map((element, index) =>
    index === firstIndex ? items[secondIndex] : index === secondIndex ? items[firstIndex] : element,
  )

const TopRanking: React.FC<UserInforProps> = (props) => {
  const classes = useStyles()
  const topRanking = immutablySwapItems(props.data, 0, 1)
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
            {topRanking.map((top) => (
              <Grid item key={top.order}>
                <Stack direction='column' alignItems='center'>
                  <TopMember
                    order={top.order}
                    rank={top.order}
                    avatar={top.avatar}
                    username={top.username}
                    fullname={top.fullname}
                    score={top.total_score}
                    organization={top.organization}
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Paper>
  )
}

export default TopRanking
