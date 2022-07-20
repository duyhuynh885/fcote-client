import React from 'react'
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
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
} from '../../../modules/assignment/create/type'
import { mapNameDataTypeByValue } from '../../../utils/mapper'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import { useForm } from 'react-hook-form'
import _ from 'lodash'

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
  const { handleSubmit, register, reset } = useForm()
  const rest = {
    type: 'submit',
  }

  const onSubmit = handleSubmit((values) => {
    if (testCase) {
      const { inputTestCaseValue, outputTestCaseValue } = values
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
      onSave({
        isPrivate: false,
        order: testCase.order,
        input: inputTestCase,
        output: {
          order: testCase.output.order,
          name: testCase.output.name,
          type: output.type,
          value: outputTestCaseValue,
        },
      })
    }
    onClose()
    reset()
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
                {...register('outputTestCaseValue')}
                size='small'
                fullWidth
                defaultValue={testCase ? testCase.output.value : undefined}
                id='outlined-basic'
                variant='outlined'
                required
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked color='success' />}
                  label='Hidden'
                />
              </FormGroup>
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
