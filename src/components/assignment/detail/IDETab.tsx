import { Stack, Typography } from '@mui/material'
import React from 'react'
import SwapLanguageCode from '../../common/button/SwapLanguageCode'
import IDE from '../general/IDE'
import useStyles from './style'

/**
 * IDETabProps component
 *
 * Version 1.0
 *
 * Date: 26-07-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 26-07-2022         DuyHV           Create
 */

interface IDETabProps {
  sourceCode: string
  onChangeSourceCode: (sourceCode: string) => void
  language: number
  handleChangeLanguage: (language: number) => void
}

export default function IDETab(props: IDETabProps) {
  const classes = useStyles()
  const { sourceCode, onChangeSourceCode, language, handleChangeLanguage } = props
  console.log(sourceCode)
  return (
    <Stack sx={{ height: '100%' }}>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={{
          padding: '0px 10px',
          borderBottom: 'solid 1px black',
        }}
      >
        <Typography className={classes.tabFileName}>
          solution.{language === 1 ? 'py' : 'java'}
        </Typography>
        <SwapLanguageCode language={language} onChange={handleChangeLanguage} />
      </Stack>
      <Stack sx={{ height: '100% !important' }}>
        <IDE language={language} sourceCode={sourceCode} onChange={onChangeSourceCode} />
      </Stack>
    </Stack>
  )
}
