import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import useStyles from './style'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Link } from 'react-router-dom'
import { IChallenge } from '../../../../modules/challenge/list/type'
import { mapStatusChallenge } from '../../../../utils/mapper'
import StatusChallengeChallenge from '../../../common/text/StatusChallenge'
import DateChallenge from '../../../common/text/DateChallenge'
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
  return (
    <Paper elevation={2} square className={classes.container}>
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={props.url}>
        <Stack direction='row'>
          <img
            className={classes.challengeCardBanner}
            src='https://img.freepik.com/premium-vector/programming-web-banner-with-engineer-work_88188-640.jpg?w=826'
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
            <Typography className={classes.challengeCardDescription}>
              {challenge.description}
            </Typography>
            <Stack
              sx={{
                width: '100%',
              }}
              direction='row'
              justifyContent='space-between'
            >
              <Stack direction='row' alignItems='center'>
                <Typography className={classes.challengeTotalMember}>
                  <PersonOutlineIcon fontSize='small' />
                  {challenge.totalMember}
                </Typography>
              </Stack>
              <DateChallenge startDate={challenge.startAt} endDate={challenge.endAt} />
              <StatusChallengeChallenge {...mapStatusChallenge(challenge.status)} size={'large'} />
            </Stack>
          </Stack>
        </Stack>
      </Link>
    </Paper>
  )
}
export default ChallengeCard
