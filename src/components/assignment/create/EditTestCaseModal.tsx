import React from 'react'
import {
  Checkbox,
  FormControlLabel,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import useStyles from './style'
import RegularButton from '../../common/button/RegularButton'
import {
  InputCreateAssignment,
  OutputCreateAssignment,
  TestCaseCreateAssignment,
  TestCaseInputCreateAssignment,
  TestCaseOutputCreateAssignment,
} from '../../../modules/assignment/create/type'
import { mapNameDataTypeByValue } from '../../../utils/mapper'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { Controller, useForm } from 'react-hook-form'
import _ from 'lodash'
import { showToastAction } from '../../../modules/layout/toast/toastAction'
import { validationInputOutputTestCase } from '../../../utils/helper'

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
interface EditTestCaseModalProps {
  currentSize: number
  open: boolean
  onClose: () => void
  onSave: (testCase: TestCaseCreateAssignment) => void
  inputList: InputCreateAssignment[]
  output: OutputCreateAssignment
  testCase?: TestCaseCreateAssignment
}

export default function EditTestCaseModal(props: EditTestCaseModalProps) {
  const classes = useStyles()
  const { open, onClose, inputList, output, onSave, testCase } = props
  const dataTypeState = useSelector((state: RootState) => state.dataType.dataType)
  const { handleSubmit, register, reset, control, watch } = useForm()
  const dispatch = useDispatch<AppDispatch>()
  const rest = {
    type: 'submit',
  }

  const validationInput = (
    inputTestCase: TestCaseInputCreateAssignment[],
    outputTestCase: TestCaseOutputCreateAssignment,
  ) => {
    const { result } = validationInputOutputTestCase(inputTestCase, outputTestCase)
    if (result.isValid) {
      return true
    } else {
      dispatch(showToastAction('error', result.message))
      return false
    }
  }

  /**
   * Handle save data to edit a test case
   */
  const onSubmit = handleSubmit((values) => {
    if (testCase) {
      const { inputTestCaseValue, outputTestCaseValue, isHide } = values
      const inputTestCase: TestCaseInputCreateAssignment[] = inputTestCaseValue.map(
        (data: string, index: number) => {
          const inputData = _.find(inputList, { order: index })
          if (inputData)
            return {
              order: index,
              name: inputData.name,
              type: inputData.type,
              value: data,
            } as TestCaseInputCreateAssignment
          else return null
        },
      )

      const outputTestCase: TestCaseOutputCreateAssignment = {
        order: testCase.output.order,
        name: testCase.output.name,
        type: output.type,
        value: outputTestCaseValue,
      }

      if (validationInput(inputTestCase, outputTestCase)) {
        onSave({
          isPrivate: isHide,
          order: testCase.order,
          input: inputTestCase,
          output: outputTestCase,
        })

        onClose()
        reset()
      }
    }
  })

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Paper sx={style}>
          <form onSubmit={onSubmit}>
            <Typography className={classes.createTestCaseModelTitle}>Edit test case</Typography>
            <Stack>
              <Typography className={classes.titleNameInput}>Input</Typography>
              {testCase &&
                inputList.map((_input) => {
                  const testCaseInput = _.find(testCase.input, { order: _input.order })
                  return (
                    <React.Fragment key={testCaseInput ? testCaseInput.order : _input.order}>
                      <Typography className={classes.titleTextField}>
                        {testCaseInput ? testCaseInput.name : _input.name} (
                        {mapNameDataTypeByValue(
                          dataTypeState,
                          testCaseInput ? testCaseInput.type : _input.type,
                        )}
                        )
                      </Typography>
                      <TextField
                        color='success'
                        {...register(`inputTestCaseValue.${_input.order}`)}
                        fullWidth
                        id='outlined-basic'
                        variant='outlined'
                        required
                        size='small'
                        defaultValue={testCaseInput ? testCaseInput.value : undefined}
                      />
                    </React.Fragment>
                  )
                })}
              <Typography className={classes.titleNameInput}>Excepted Output</Typography>
              <Typography className={classes.titleTextField}>
                ({mapNameDataTypeByValue(dataTypeState, output.type)})
              </Typography>
              <TextField
                color='success'
                {...register('outputTestCaseValue')}
                size='small'
                fullWidth
                defaultValue={testCase ? testCase.output.value : undefined}
                id='outlined-basic'
                variant='outlined'
                required
              />
              <Controller
                name='isHide'
                control={control}
                defaultValue={testCase?.isPrivate}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} checked={watch('isHide')} color='success' />}
                    label={
                      <Typography className={classes.titleTextField}>Hide test case</Typography>
                    }
                  />
                )}
              />
            </Stack>
            <Stack
              direction='row'
              justifyContent='space-around'
              alignItems='center'
              spacing={8}
              sx={{
                paddingTop: 2,
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
                {...rest}
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
