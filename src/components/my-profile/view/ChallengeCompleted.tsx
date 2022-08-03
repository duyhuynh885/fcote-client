import { Box, CircularProgress, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import { IChallenge } from '../../../modules/challenge/list/type'
import ChallengeCard from '../../challenge/general/ChallengeCard/ChallengeCard'
import useStyles from '../style'

/**
 * Challenge completed component
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

interface ChallengeCompletedProps {
  listChallengeCompleted: IChallenge[]
  title?: string
}
const ChallengeCompleted: React.FC<ChallengeCompletedProps> = (props) => {
  const classes = useStyles()
  const { listChallengeCompleted, title } = props
  const listChallengesState = useSelector((state: RootState) => state.listChallenges)
  const {requesting: challengesRequesting} = listChallengesState
  return (
    <Paper
      elevation={4}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Stack direction='column' spacing={2}>
        <Box>
          <Typography className={classes.title}>{title ? title : 'Challenge Completed'}</Typography>
        </Box>
        <Stack spacing={2} className={classes.scrollBar}>
          {challengesRequesting ? (
            <Stack alignItems='center' justifyContent='center'>
              <CircularProgress color='success' />
            </Stack>
          ) : (
            <>
              {listChallengeCompleted &&
                listChallengeCompleted.map((challenge, index) => (
                  <ChallengeCard key={index} url='/challenge/detail' challenge={challenge} />
                ))}
            </>
          )}
        </Stack>
      </Stack>
    </Paper>
  )
}

export default ChallengeCompleted
