import React from 'react'
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import useStyles from './style'
import { theme } from '../../../configs/theme/theme'
import { ReactComponent as ThirdRank } from '../../../assets/ThirdRank.svg'

/**
 * Third Rank Card component
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
export default function ThirdRankCard() {
  const classes = useStyles()
  return (
    <Card sx={{ minWidth: 450, mt: '1.5em' }} className={classes.cardRoot}>
      <CardHeader
        title='3nd PLACE'
        sx={{ backgroundColor: `${theme.rankingCard.darkNavyBlue}` }}
        className={classes.cardHeader}
      />
      <CardContent sx={{ display: 'flex', backgroundColor: `${theme.rankingCard.navyBlue}` }}>
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
          <ThirdRank />
        </Box>
      </CardContent>
      <CardActions
        className={classes.rankProfileScore}
        sx={{ backgroundColor: `${theme.rankingCard.navyBlue}` }}
      >
        <Typography variant='h5' component='span' sx={{ fontWeight: 1000 }}>
          Score: 2000
        </Typography>
      </CardActions>
    </Card>
  )
}