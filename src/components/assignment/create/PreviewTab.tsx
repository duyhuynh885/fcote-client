import React from 'react'
import parse from 'html-react-parser'
import { Box, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import {
  OutputCreateAssignment,
  InputCreateAssignment,
  SettingCreateAssignment,
} from '../../../modules/assignment/create/type'
import useStyles from './style'
import { mapNameDataTypeByValue } from '../../../utils/mapper'

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
interface PreviewTabProps {
  setting: SettingCreateAssignment
  inputList: InputCreateAssignment[]
  output: OutputCreateAssignment
}

export default function PreviewTab(props: PreviewTabProps) {
  const { setting, inputList, output } = props
  const classes = useStyles()
  const dataTypeState = useSelector((state: RootState) => state.dataType.dataType)

  return (
    <Box className={classes.scrollBar}>
      {setting.description && (
        <React.Fragment>
          <Typography className={classes.titleNameInput}>Code Topic</Typography>
          <Stack marginLeft={2}>{parse(setting.description)}</Stack>
        </React.Fragment>
      )}
      {inputList && output && (
        <Typography className={classes.titleNameInput}>Input/Output</Typography>
      )}
      <Stack marginLeft={2} direction='column'>
        {inputList.map((input) => (
          <React.Fragment key={input.order}>
            <Typography className={classes.titleTextField}>
              [input{input.order + 1}] {mapNameDataTypeByValue(dataTypeState, input.type)}{' '}
              {input.name}
            </Typography>
            <Typography fontSize='14px'>{input.description}</Typography>
          </React.Fragment>
        ))}
        <Typography className={classes.titleTextField}>
          [output] {mapNameDataTypeByValue(dataTypeState, output.type)}
        </Typography>
        <Typography fontSize='14px'>{output.description}</Typography>
      </Stack>
    </Box>
  )
}
