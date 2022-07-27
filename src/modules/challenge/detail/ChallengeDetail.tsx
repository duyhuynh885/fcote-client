import { Stack } from '@mui/material'
import React from 'react'
import TableChallenge from '../../../components/challenge/general/TableChallenge/TableChallenge'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'

/**
 * Challenge Detail
 *
 * Version 1.0
 *
 * Date: 27-07-2022
 *
 * Copyright By DuyHV
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 27-07-2022       DuyHV           Create
 */

export default function ChallengeDetail() {
  return (
    <Stack>
      <InsideNavBar namePage='Challenge Detail' />
      <Stack direction='row' justifyContent='center' alignItems='center' margin={5}>
        <TableChallenge />
      </Stack>
    </Stack>
  )
}
