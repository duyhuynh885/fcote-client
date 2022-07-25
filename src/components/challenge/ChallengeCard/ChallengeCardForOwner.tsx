import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import useStyles from './style'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Link } from 'react-router-dom'
import { IChallenge } from '../../../modules/challenge/list/type'
import { formatDate, getDurationDateTime } from '../../../utils/dateUtil'

/**
 * ChallengeCardForOwner
 *
 * Version 1.0
 *
 * Date: 29-06-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 29-06-2022      HuyNT2711           Create
 */

interface ChallengeCardForOwnerProps {
  url: string
  challenge: IChallenge
}

const ChallengeCardForOwner: React.FC<ChallengeCardForOwnerProps> = (props) => {
  const classes = useStyles()
  const data = props

  const handleShowStatus = () => {
    switch (data.challenge.status) {
      case 1:
        return 'NOT OPEN YET'
      case 2:
        return 'OPEN'
      case 3:
        return 'CLOSE'
      default:
        return ''
    }
  }
  return (
    <Paper
      elevation={4}
      square
      sx={{
        width: '100%',
        height: '125px',
      }}
    >
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={props.url}>
        <Stack direction='row'>
          <img
            className={classes.challengeCardBanner}
            src='https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000'
          />
          <Stack direction='column' className={classes.challengeCardContainer}>
            <Typography className={classes.challengeCardTittle}>{data.challenge.title}</Typography>
            <Typography sx={{ marginTop: '18px' }}>{data.challenge.decription}</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                height: '',
              }}
            >
              <Stack direction='row'>
                <PersonOutlineIcon />
                <Typography>{data.challenge.totalMember}</Typography>
              </Stack>
              <Typography>{formatDate(data.challenge.startAt)}</Typography>
              <Typography className={classes.challengeCardStatus}>{handleShowStatus()}</Typography>
            </Box>
          </Stack>
        </Stack>
      </Link>
    </Paper>
  )
}
export default ChallengeCardForOwner
