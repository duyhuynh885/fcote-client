import { Stack } from '@mui/material'
import React from 'react'
import ChallengeCardForOwner from '../../../Challenge/ChallengeCard/ChallengeCardForOwner'
import PaginationCard from '../../../Common/PaginationCard'
import useStyles from './style'

export default function Tasklist() {
  const classes = useStyles()
  return (
    <Stack>
      <Stack className={classes.scrollBar} spacing={2}>
        <ChallengeCardForOwner url='/challenge/detail' />
        <ChallengeCardForOwner url='/challenge/detail' />
        <ChallengeCardForOwner url='/challenge/detail' />
        <ChallengeCardForOwner url='/challenge/detail' />
        <ChallengeCardForOwner url='/challenge/detail' />
        <ChallengeCardForOwner url='/challenge/detail' />
      </Stack>
      <PaginationCard />
    </Stack>
  )
}
