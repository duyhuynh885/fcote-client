import React from 'react'
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import useStyles from './style'
import { theme } from '../../../styles/theme'
import { ReactComponent as FirstRank } from '../../../asset/FirstRank.svg'
import './RankCard.css'
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
export default function FirstRankCard() {
  const classes = useStyles()
  return (
    <Card sx={{ minWidth: 500, minHeight: 275 }} className={classes.cardRoot}>
      <CardHeader title='1st PLACE' sx={{ backgroundColor: `${theme.rankingCard.darkGreen}` }} />
      <CardContent
        sx={{ display: 'flex', padding: '25px', backgroundColor: `${theme.rankingCard.green}` }}
      >
        <Box>
          <Avatar
            alt='Profile Image'
            src='https://hanoimoi.com.vn/Uploads/images/tuandiep/2022/02/12/ro.jpg'
            className={classes.rankSecondProfileAvatar}
          />
        </Box>
        <Box className={classes.rankProfileCotent} sx={{ flexGrow: 1 }}>
          <Typography variant='h5' component='span'>
            Le Anh Tuan
          </Typography>
          <Typography>FPT University</Typography>
        </Box>
        <Box className={classes.rankMedal}>
          <FirstRank />
        </Box>
      </CardContent>
      <CardActions
        className={classes.rankProfileScore}
        sx={{ padding: 3, backgroundColor: `${theme.rankingCard.green}` }}
      >
        <Typography variant='h5' component='span' sx={{ fontWeight: 1000 }}>
          Score: 2000
        </Typography>
      </CardActions>
    </Card>
  )
}
