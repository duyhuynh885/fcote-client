import { Stack, Typography } from '@mui/material'
import React from 'react'
import IDE from '../general/IDE'
import useStyles from './style'

/**
 * Editor tab component
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

export default function EditorTab() {
  const classes = useStyles()

  /**
   * Handle change source code in editor tab
   * @param sourceCode
   */
  const handleOnChangeCode = (sourceCode: string) => {
    // TODO : IN PROGRESS CODING
  }
  return (
    <Stack sx={{ height: '100%' }}>
      <Typography
        sx={{
          padding: '10px',
          borderBottom: 'solid 1px black',
        }}
        className={classes.tabFileName}
      >
        test.py
      </Typography>
      <Stack sx={{ height: '100% !important' }}>
        <IDE onChange={handleOnChangeCode} />
      </Stack>
    </Stack>
  )
}
