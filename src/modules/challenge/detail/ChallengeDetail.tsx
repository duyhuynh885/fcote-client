import { Stack } from '@mui/material'
import React from 'react'
import TableChallenge from '../../../components/challenge/TableChallenge/TableChallenge'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'

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
      <InsideNavBar namePage='Challenge Detail' />
      <Stack sx={{ marginLeft: '8.5%' }}>
        <TableChallenge />
      </Stack>
    </Stack>
  )
}
