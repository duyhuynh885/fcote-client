import React from 'react'
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import useStyles from './style'
import { theme } from '../../../styles/theme'
import { ReactComponent as SecondRank } from '../../../asset/SecondRank.svg'
/**
 * Second Rank Card component
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
export default function SecondRankCard() {
  const classes = useStyles()
  return (
    <Card sx={{ minWidth: 450, mt: '2em' }}>
      <CardHeader title='2nd PLACE' sx={{ backgroundColor: `${theme.color.darkGray}` }} />
      <CardContent sx={{ display: 'flex' }}>
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
          <Typography color='text.secondary'>FPT University</Typography>
        </Box>
        <Box className={classes.rankMedal}>
          <SecondRank />
        </Box>
      </CardContent>
      <CardActions className={classes.rankProfileScore}>
        <Typography variant='h6' component='span'>
          Score: 2000
        </Typography>
      </CardActions>
    </Card>
  )
}
