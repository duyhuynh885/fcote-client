import { Paper, Stack } from '@mui/material'
import React from 'react'
import NewChallenge from '../../../components/challenge/create/NewChallenge'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'

export default function CreateChallenge() {
  return (
    <Stack>
      <InsideNavBar namePage='New Challenge' />
      <Paper>
        <NewChallenge />
      </Paper>
    </Stack>
  )
}
