import { Stack } from '@mui/material'
import React from 'react'
import TableChallenge from '../../../components/challenge/TableChallenge/TableChallenge'
import CreateAssignmentNavBar from '../../../components/common/navigation/CreateAssignmentNavBar'

/**
 * Challenge Detail
 *
 * Version 1.0
 *
 * Date: 30-06-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 30-06-2022      HuyNT2711           Create
 */

export default function ChallengeDetail() {
  return (
    <Stack>
      <CreateAssignmentNavBar namePage='CHALLENGE DETAIL' />
      <Stack sx={{ marginLeft: '8.5%' }}>
        <TableChallenge />
      </Stack>
    </Stack>
  )
}