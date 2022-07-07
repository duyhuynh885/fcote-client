import { Stack } from '@mui/material'
import React from 'react'
import useStyles from './style'
import ChallengeCardForOwner from '../ChallengeCard/ChallengeCardForOwner'
import PaginationCard from '../../common/pagination/PaginationCard'
/**
 * ChallengeOwner
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

export default function ChallengeOwner() {
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