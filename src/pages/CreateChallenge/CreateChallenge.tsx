import { Paper, Stack } from '@mui/material'
import React from 'react'
import NewChallenge from '../../components/Challenge/CreateChallenge/NewChallenge'
import CreateAssignmentNavBar from '../../components/NavBar/CreateAssignmentNavBar'

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
