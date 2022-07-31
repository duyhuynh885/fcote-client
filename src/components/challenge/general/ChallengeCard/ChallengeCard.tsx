import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import useStyles from './style'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Link } from 'react-router-dom'
import { IChallenge } from '../../../../modules/challenge/list/type'
import { formatDate } from '../../../../utils/dateUtil'
/**
 * Challenge Card Component
 *
 * Version 1.0
 *
 * Date: 21-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 21-06-2022         DuyHV           Create
 */
interface ChallengeCardProps {
  url: string
  challenge: IChallenge
}
const ChallengeCard: React.FC<ChallengeCardProps> = (props) => {
  const classes = useStyles()
  const challenge = props.challenge
  const handleShowStatus = () => {
    switch (challenge.status) {
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
    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={props.url}>
      <Paper
        elevation={2}
        square
        sx={{
          width: '100%',
          height: '125px',
        }}
      >
        <Stack direction='row'>
          <img
            className={classes.challengeCardBanner}
            src='https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000'
          />
          <Stack
            sx={{
              width: '100%',
            }}
            direction='column'
            justifyContent='space-between'
            alignItems='flex-start'
            className={classes.challengeCardContainer}
            spacing={1}
          >
            <Typography className={classes.challengeCardTittle}>{challenge.title}</Typography>
            <Typography sx={{ marginBottom: '10px' }}>{challenge.description}</Typography>
            <Stack
              sx={{
                width: '100%',
              }}
              direction='row'
              justifyContent='space-between'
            >
              <Stack direction='row'>
                <PersonOutlineIcon />
                <Typography>{challenge.totalMember}</Typography>
              </Stack>
              <Typography>{formatDate(challenge.startAt)}</Typography>
              <Typography className={classes.challengeCardStatus}>{handleShowStatus()}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Link>
  )
}
export default ChallengeCard
