import React from 'react'
import { Box, SxProps, Theme, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import useStyles from './style'
import { theme } from '../../../../configs/theme/theme'
import { ReactComponent as FirstRank } from '../../../../assets/FirstRank.svg'
import { ReactComponent as SecondRank } from '../../../../assets/SecondRank.svg'
import { ReactComponent as ThirdRank } from '../../../../assets/ThirdRank.svg'
import './RankCard.css'
import { DataTopRank } from './type'
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

export default function TopMember(props: DataTopRank) {
  const classes = useStyles()

  function renderRanking() {
    {
      switch (props.rank) {
        case 1:
          return <FirstRank />
        case 2:
          return <SecondRank />
        case 3:
          return <ThirdRank />
        default:
          return <Typography>{props.rank}</Typography>
      }
    }
  }
  function returnColorByRank() {
    {
      switch (props.rank) {
        case 1:
          return [`${theme.rankingCard.darkGreen}`, `${theme.rankingCard.green}`]
        case 2:
          return [`${theme.rankingCard.darkNavyBlue}`, `${theme.rankingCard.navyBlue}`]
        case 3:
          return [`${theme.rankingCard.darkNavyBlue}`, `${theme.rankingCard.navyBlue}`]
        default:
          return [`${theme.rankingCard.darkNavyBlue}`, `${theme.rankingCard.navyBlue}`]
      }
    }
  }

  const sxCard: SxProps<Theme> = () => {
    {
      switch (props.rank) {
        case 1:
          return {
            minWidth: 500,
            minHeight: 275,
          }
        case 2:
          return {
            minWidth: 400,
            mt: '1.5em',
          }
        case 3:
          return {
            minWidth: 400,
            mt: '1.5em',
          }
        default:
          return {
            minWidth: 400,
            mt: '1.5em',
          }
      }
    }
  }

  const sxCardContent: SxProps<Theme> = () => {
    {
      switch (props.rank) {
        case 1:
          return {
            display: 'flex',
            padding: '25px',
            backgroundColor: returnColorByRank()[1],
          }
        case 2:
          return {
            display: 'flex',
            backgroundColor: returnColorByRank()[1],
          }
        case 3:
          return {
            display: 'flex',
            backgroundColor: returnColorByRank()[1],
          }
        default:
          return {
            display: 'flex',
            backgroundColor: returnColorByRank()[1],
          }
      }
    }
  }

  const sxCardAction: SxProps<Theme> = () => {
    {
      switch (props.rank) {
        case 1:
          return {
            padding: 3,
            backgroundColor: returnColorByRank()[1],
          }
        case 2:
          return {
            backgroundColor: returnColorByRank()[1],
          }
        case 3:
          return {
            backgroundColor: returnColorByRank()[1],
          }
        default:
          return {
            backgroundColor: returnColorByRank()[1],
          }
      }
    }
  }

  function returnRankStr() {
    switch (props.rank) {
      case 1:
        return '1st PLACE'
      case 2:
        return '2nd PLACE'
      case 3:
        return '3rd PLACE'
      default:
        return 'Unrank'
    }
  }

  return (
    <Card sx={sxCard} className={classes.cardRoot}>
      <CardHeader title={returnRankStr()} sx={{ backgroundColor: returnColorByRank()[0] }} />
      <CardContent sx={sxCardContent}>
        <Box>
          <Avatar
            alt={props.username.toUpperCase()}
            src={props.avatar}
            className={classes.rankSecondProfileAvatar}
          />
        </Box>
        <Box className={classes.rankProfileCotent} sx={{ flexGrow: 1 }}>
          <Typography variant='h5' component='span'>
            {props.username}
          </Typography>
          <Typography>{props.organization}</Typography>
        </Box>
        <Box className={classes.rankMedal}>{renderRanking()}</Box>
      </CardContent>
      <CardActions className={classes.rankProfileScore} sx={sxCardAction}>
        <Typography variant='h5' component='span' sx={{ fontWeight: 1000 }}>
          Score: {props.score}
        </Typography>
      </CardActions>
    </Card>
  )
}
