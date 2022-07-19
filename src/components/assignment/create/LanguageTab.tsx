import React from 'react'
import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import useStyles from './style'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'

/**
 * Language tab component
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

export default function LanguageTab() {
  const classes = useStyles()
  const languageState = useSelector((state: RootState) => state.language.languages)
  return (
    <Stack>
      <Typography textAlign='center' className={classes.tabTitle}>
        Set timeout for languages (default 10second)
      </Typography>
      <Table aria-label='caption table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.titleTextField} align='left'>
              Language
            </TableCell>
            <TableCell className={classes.titleTextField} align='left'>
              Timeout
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {languageState.map((language) => (
            <TableRow key={language.id}>
              <TableCell align='left'>{language.title}</TableCell>
              <TableCell align='left'>10 s</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  )
}
