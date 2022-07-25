import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { IChallenge } from '../../../modules/challenge/list/type'
import ChallengeCard from '../../challenge/ChallengeCard/ChallengeCard'
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
  listChanllengeCompleted: IChallenge[]

  // listChanllengeCompleted: MyProfile['ChallengeCompleted']
}
const ChallengeCompleted: React.FC<ChallengeCompletedProps> = (props) => {
  const classes = useStyles()
  const { listChanllengeCompleted } = props

  return (
    <Paper
      elevation={8}
      square
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Stack direction='column' spacing={2}>
        <Box>
          <Typography className={classes.title}>Challenge Completed</Typography>
        </Box>
        <Stack spacing={2} className={classes.scrollBar}>
          {listChanllengeCompleted &&
            listChanllengeCompleted.map((challenge, index) => (
              <ChallengeCard key={index} url='/challenge/detail' challenge={challenge} />
            ))}
        </Stack>
      </Stack>
    </Paper>
  )
}

export default ChallengeCompleted
