import React from 'react'
import parse from 'html-react-parser'
import { Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'

/**
 * PreviewTab component
 *
 * Version 1.0
 *
 * Date: 28-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 28-06-2022         DuyHV           Create
 */

export default function PreviewTab() {
  const settingState = useSelector((state: RootState) => state.createAssignment.requestBody.setting)

  return (
    <React.Fragment>
      <div>{parse(settingState.description)}</div>
      <Stack></Stack>
    </React.Fragment>
  )
}
