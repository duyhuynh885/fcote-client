import { Paper, Stack } from '@mui/material'
import React from 'react'
import NewChallenge from '../../../components/challenge/create/NewChallenge'
import CreateAssignmentNavBar from '../../../components/common/navigation/CreateAssignmentNavBar'

export default function CreateChallenge() {
  return (
    <Stack>
      <CreateAssignmentNavBar namePage='NEW CHALLENGE ' />
      <Paper>
        <NewChallenge />
      </Paper>
    </Stack>
  )
}
