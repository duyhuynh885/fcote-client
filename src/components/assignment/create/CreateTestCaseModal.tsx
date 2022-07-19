import React from 'react'
import { Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import useStyles from './style'
import RegularButton from '../../../components/common/button/RegularButton'
import {
  InputCreateAssignment,
  OutputCreateAssignment,
  TestCaseCreateAssignment,
} from '../../../modules/assignment/create/type'
import { mapNameDataTypeByValue } from '../../../utils/mapper'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import { useForm, useFieldArray } from 'react-hook-form'

/**
 * Create test case model component
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  backgroundColor: 'background.paper',
  borderRadius: 3,
  p: 4,
}
interface CreateTestCaseModalProps {
  open: boolean
  onClose: () => void
  onSave: (testCase: TestCaseCreateAssignment) => void
  inputList: InputCreateAssignment[]
  output: OutputCreateAssignment
}

export default function CreateTestCaseModal(props: CreateTestCaseModalProps) {
  const classes = useStyles()
  const { open, onClose, inputList, output } = props
  const dataTypeState = useSelector((state: RootState) => state.dataType.dataType)
  const { handleSubmit, register } = useForm()

  function onSubmit(data: any) {
    console.log(data)
  }

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Paper sx={style}>
          <form>
            <Typography className={classes.createTestCaseModelTitle}>Add new test case</Typography>
            <Stack>
              <Typography className={classes.titleNameInput}>Input</Typography>
              {inputList.map((_input) => (
                <React.Fragment key={_input.order}>
                  <Typography className={classes.titleTextField}>
                    {_input.name} ({mapNameDataTypeByValue(dataTypeState, _input.type)})
                  </Typography>
                  <TextField
                    {...register(`inputTestCaseValue.${_input.order}.value`)}
                    fullWidth
                    id='outlined-basic'
                    variant='outlined'
                    required
                    size='small'
                  />
                </React.Fragment>
              ))}
              <Typography className={classes.titleNameInput}>Excepted Output</Typography>
              <Typography className={classes.titleTextField}>
                ({mapNameDataTypeByValue(dataTypeState, output.type)})
              </Typography>
              <TextField
                {...register('outputTestCaseValue')}
                size='small'
                fullWidth
                id='outlined-basic'
                variant='outlined'
                required
              />{' '}
            </Stack>
            <Stack
              direction='row'
              justifyContent='space-around'
              alignItems='center'
              spacing={8}
              sx={{
                paddingTop: 2,
                paddingRight: 2,
                paddingLeft: 2,
              }}
            >
              <RegularButton
                color={'danger'}
                size={'sm'}
                round={false}
                fullWidth={true}
                disabled={false}
                simple={false}
                block={false}
                link={false}
                justIcon={false}
                className={''}
                onClick={onClose}
              >
                Cancel
              </RegularButton>
              <RegularButton
                color={'success'}
                size={'sm'}
                round={false}
                fullWidth={true}
                disabled={false}
                simple={false}
                block={false}
                link={false}
                justIcon={false}
                className={''}
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </RegularButton>
            </Stack>
          </form>
        </Paper>
      </Modal>
    </React.Fragment>
  )
}
