import { Typography, Stack } from '@mui/material'
import parse from 'html-react-parser'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import { Detail, Parameter } from '../../../modules/assignment/detail/type'
import { mapNameDataTypeByValue } from '../../../utils/mapper'
import useStyles from './style'
interface DescriptionTabProps {
  detail: Detail
  parameters: Parameter[]
}

export default function DescriptionTab(props: DescriptionTabProps) {
  const { detail, parameters } = props
  const classes = useStyles()
  const dataTypeState = useSelector((state: RootState) => state.dataType.dataType)
  return (
    <React.Fragment>
      <React.Fragment>
        <Typography className={classes.titleNameInput}>Code Topic</Typography>
        <Stack marginLeft={2}>{parse(detail.description)}</Stack>
      </React.Fragment>
      {parameters && <Typography className={classes.titleNameInput}>Input/Output</Typography>}
      <Stack marginLeft={2} direction='column'>
        {parameters
          .filter((parameter) => parameter.type === 1)
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((filteredParameter) => (
            <React.Fragment key={filteredParameter.order}>
              <Typography className={classes.titleTextField}>
                [input{filteredParameter.order + 1}]{' '}
                {mapNameDataTypeByValue(dataTypeState, filteredParameter.dataType)}{' '}
                {filteredParameter.name}
              </Typography>
              <Typography fontSize='14px'>{filteredParameter.description}</Typography>
            </React.Fragment>
          ))}
        {parameters
          .filter((parameter) => parameter.type === 2)
          .map((filteredParameter) => (
            <React.Fragment key={filteredParameter.order}>
              <Typography
                key={filteredParameter.order}
                margin='0'
                className={classes.titleTextField}
              >
                [output] {mapNameDataTypeByValue(dataTypeState, filteredParameter.dataType)}
              </Typography>
              <Typography fontSize='14px'>{filteredParameter.description}</Typography>
            </React.Fragment>
          ))}
      </Stack>
    </React.Fragment>
  )
}
