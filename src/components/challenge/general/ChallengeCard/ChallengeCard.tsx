import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import useStyles from './style'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Link } from 'react-router-dom'
import { IChallenge } from '../../../../modules/challenge/list/type'
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
            <Typography className={classes.challengeCardTittle}>{challenge.title}</Typography>
            <Typography sx={{ marginBottom: '10px' }}>{challenge.decription}</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '20px',
              }}
            >
              <Stack direction='row'>
                <PersonOutlineIcon />
                <Typography>{challenge.totalMember}</Typography>
              </Stack>
              <Typography>{challenge.startAt}</Typography>
              <Typography className={classes.challengeCardStatus}>{handleShowStatus()}</Typography>
            </Box>
          </Stack>
        </Stack>
      </Link>
    </Paper>
  )
}
export default ChallengeCard
