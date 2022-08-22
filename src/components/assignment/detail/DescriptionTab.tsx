import { Typography, Stack, Box, Divider, Chip } from '@mui/material'
import parse from 'html-react-parser'
import _ from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import { Detail, Parameter } from '../../../modules/assignment/detail/type'
import { DifficultEnum } from '../../../modules/assignment/list/type'
import { mapDifficultyAssignment, mapNameDataTypeByValue } from '../../../utils/mapper'
import Difficultly from '../../common/text/Difficultly'
import useStyles from './style'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
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
          <Box
            sx={{
              padding: '10px 15px',
              border: (theme) => `1px solid ${theme.palette.divider}`,
              bgcolor: 'background.paper',
              marginBottom: 5,
            }}
          >
            <Stack alignItems='center' justifyContent='space-between' spacing={3} direction='row'>
              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography className={classes.titleHeader} alignItems='center'>
                  Author
                </Typography>
                <Chip
                  label={detail.createdBy}
                  sx={{ fontWeight: '700', borderRadius: '5px', padding: '5px' }}
                  color='info'
                  size='small'
                  variant='outlined'
                ></Chip>
              </Stack>
              <Divider orientation='vertical' flexItem />
              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography className={classes.titleHeader}>Point</Typography>
                <Chip
                  label={detail.score}
                  sx={{ fontWeight: '700', borderRadius: '5px' }}
                  color='error'
                  size='small'
                  variant='outlined'
                ></Chip>
              </Stack>
              <Divider orientation='vertical' flexItem />
              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography className={classes.titleHeader}>Submissions</Typography>
                <Chip
                  label={`${detail?.availableSubmission}/${detail?.limitSubmission}`}
                  sx={{ fontWeight: '700', borderRadius: '5px' }}
                  color='secondary'
                  size='small'
                  variant='outlined'
                ></Chip>
              </Stack>
              <Divider orientation='vertical' flexItem />
              <Stack spacing={1} alignItems='center' direction='row'>
                <Typography className={classes.titleHeader} alignItems='center'>
                  Difficult
                </Typography>
                <Difficultly
                  difficult={mapDifficultyAssignment(detail.difficulty)}
                  displayText={DifficultEnum[detail.difficulty]}
                />
              </Stack>
            </Stack>
          </Box>
          <Typography className={classes.titleNameInput}>The Description</Typography>
          <Stack marginLeft={2}>
            <div style={{ wordWrap: 'break-word', display: 'inline-block' }}>
              <div className='editor' dangerouslySetInnerHTML={{ __html: detail.description }} />
            </div>
          </Stack>
          <Typography className={classes.titleNameInput}>Input / Output</Typography>
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
