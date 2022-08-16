import { Typography, Stack, Box } from '@mui/material'
import parse from 'html-react-parser'
import _ from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import { Detail, Parameter } from '../../../modules/assignment/detail/type'
import { mapNameDataTypeByValue } from '../../../utils/mapper'
import useStyles from './style'

/**
 * DescriptionTab component
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
interface DescriptionTabProps {
  detail: Detail
  parameters: Parameter
}

export default function DescriptionTab(props: DescriptionTabProps) {
  const { detail, parameters } = props
  const classes = useStyles()
  const dataTypeState = useSelector((state: RootState) => state.dataType.dataType)

  return (
    <Box className={classes.scrollBar}>
      {detail.description && parameters.input.length > 0 && parameters.output && (
        <React.Fragment>
          <Typography className={classes.titleNameInput}>Code Topic</Typography>
          <Stack marginLeft={2}>{parse(detail.description)}</Stack>
          <Typography className={classes.titleNameInput}>Input/Output</Typography>
          <Stack marginLeft={2} direction='column'>
            {_.sortBy(parameters.input, ['order']).map((_input) => (
              <React.Fragment key={_input.order}>
                <Typography className={classes.titleTextField}>
                  [input{_input.order + 1}] {mapNameDataTypeByValue(dataTypeState, _input.dataType)}{' '}
                  {_input.name}
                </Typography>
                <Typography fontSize='14px' fontWeight='500'>
                  {_input.description}
                </Typography>
              </React.Fragment>
            ))}
            <Typography key={parameters.output.order} margin='0' className={classes.titleTextField}>
              [output] {mapNameDataTypeByValue(dataTypeState, parameters.output.dataType)}
            </Typography>
            <Typography fontSize='14px' fontWeight='500'>
              {parameters.output.description}
            </Typography>
          </Stack>
        </React.Fragment>
      )}
    </Box>
  )
}
