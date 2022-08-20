import {
  Box,
  Divider,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import useStyles from './style'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import { number, object, string } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import _ from 'lodash'
import RegularButton from '../../../components/common/button/RegularButton'
import { useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import { DataType } from '../../../modules/assignment/data-type/type'
import {
  InputCreateAssignment,
  OutputCreateAssignment,
} from '../../../modules/assignment/create/type'

/**
 * InputOutputTab component
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
interface InputOutputTabProps {
  type: 'CREATE' | 'EDIT'
  inputList: InputCreateAssignment[]
  output: OutputCreateAssignment
  handleInputList: (inputList: InputCreateAssignment[]) => void
  handleOutput: (output: OutputCreateAssignment) => void
}

export default function InputOutputTab(props: InputOutputTabProps) {
  const { inputList, output, handleInputList, handleOutput, type } = props
  const classes = useStyles()
  const dataTypeState = useSelector((state: RootState) => state.dataType.dataType)

  /**
   * Handle create new form input
   */
  const handleInputAdd = () => {
    handleInputList([
      ...inputList,
      {
        order: inputList.length,
        name: `arg${inputList.length + 1}`,
        type: 1,
        description: '',
      } as InputCreateAssignment,
    ])
  }

  /**
   * Handle remove form input
   */
  const handleInputRemove = (index: number) => {
    const list = [...inputList]
    list.splice(index, 1)
    handleInputList(list)
  }

  /**
   * Handle change form input
   */
  const handleInputChange = (data: InputCreateAssignment, index: number) => {
    const list = [...inputList]
    const indexOfInputList = _.findIndex(list, { order: index })
    list.splice(indexOfInputList, 1, data)
    handleInputList(list)
  }

  /**
   * Handle change form output
   */
  const handleOutputChange = (data: OutputCreateAssignment) => {
    handleOutput(data)
  }

  return (
    <Box className={classes.scrollBar}>
      {inputList.map((input, index) => {
        return (
          <FormInput
            typeForm={type}
            handleChange={handleInputChange}
            handleRemove={handleInputRemove}
            index={index}
            key={index}
            listSize={inputList.length}
            input={input}
            listDataType={dataTypeState}
          />
        )
      })}
      {type === 'CREATE' ? (
        <RegularButton
          onClick={handleInputAdd}
          color={'transparent'}
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
          + ADD INPUT
        </RegularButton>
      ) : null}
      <Divider />
      <FormOutput listDataType={dataTypeState} output={output} handleChange={handleOutputChange} />
    </Box>
  )
}

interface FormInputProps {
  typeForm: string
  listDataType: DataType[]
  index: number
  listSize: number
  input: InputCreateAssignment
  handleRemove: (index: number) => void
  handleChange: (input: InputCreateAssignment, index: number) => void
}

const inputSchema = object({
  name: string(),
  typeForm: number(),
  description: string(),
})

// Form InputCreateAssignment Create Assignment
function FormInput(props: FormInputProps) {
  const { listSize, input, index, handleRemove, handleChange, listDataType, typeForm } = props
  const [type, setType] = React.useState('' + input.type)
  const classes = useStyles()
  const {
    register,
    formState: { errors },
  } = useForm<InputCreateAssignment>({
    resolver: zodResolver(inputSchema),
  })
  const nameFiled = register('name', { required: true })
  const typeFiled = register('type', { required: true })
  const descriptionFiled = register('description')

  const handleOnChange = (event: any) => {
    const updates = { [event.target.name]: event.target.value }
    handleChange(_.merge(input, updates), index)
  }

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setType(event.target.value)
    const updates = { [event.target.name]: event.target.value }
    handleChange(_.merge(input, updates), index)
  }

  return (
    <React.Fragment>
      {listSize !== 1 && index !== 0 && <Divider sx={{ margin: '10px 0px' }} />}
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography className={classes.titleNameInput}>Input {index + 1}</Typography>
        {listSize !== 1 && index !== 0 && typeForm === 'CREATE' && (
          <IconButton
            onClick={() => {
              handleRemove(index)
            }}
            aria-label='delete'
          >
            <DeleteIcon fontSize='small' color='error' />
          </IconButton>
        )}
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography className={classes.titleTextField}>Name</Typography>
          <TextField
            color='success'
            size='small'
            value={input.name}
            fullWidth
            id='outlined-basic'
            variant='outlined'
            {...nameFiled}
            onChange={(e) => {
              nameFiled.onChange(e)
              handleOnChange(e)
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ height: 50 }}>
            <Typography className={classes.titleTextField}>Type</Typography>
            <Select
              color='success'
              size='small'
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={type}
              MenuProps={{ classes: { paper: classes.menuPaper } }}
              {...typeFiled}
              onChange={(e) => {
                typeFiled.onChange(e)
                handleChangeSelect(e)
              }}
            >
              {listDataType.map((dataType) => {
                return (
                  <MenuItem
                    classes={{ selected: classes.selected }}
                    key={dataType.value}
                    value={dataType.value}
                  >
                    {dataType.name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.titleTextField}>Description</Typography>
        <TextField
          color='success'
          size='small'
          fullWidth
          multiline
          value={input.description}
          rows={2}
          {...descriptionFiled}
          onChange={(e) => {
            descriptionFiled.onChange(e)
            handleOnChange(e)
          }}
        />
      </Grid>
    </React.Fragment>
  )
}

interface FormOutputProps {
  listDataType: DataType[]
  output: OutputCreateAssignment
  handleChange: (output: OutputCreateAssignment) => void
}

const outputSchema = object({
  type: number(),
  description: string(),
})

// Form InputCreateAssignment Create Assignment
function FormOutput(props: FormOutputProps) {
  const { listDataType, output, handleChange } = props
  const [type, setType] = React.useState('' + output.type)
  const classes = useStyles()
  const {
    register,
    formState: { errors },
  } = useForm<OutputCreateAssignment>({
    resolver: zodResolver(outputSchema),
  })
  const descriptionFiled = register('description', { required: true })

  const handleOnChange = (event: any) => {
    handleChange({ ...output, description: event.target.value })
  }

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setType(event.target.value)
    handleChange({ ...output, type: +event.target.value })
  }

  return (
    <React.Fragment>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography className={classes.titleNameInput}>Output</Typography>
      </Stack>
      <FormControl fullWidth>
        <Typography className={classes.titleTextField}>Type</Typography>
        <Select
          color='success'
          size='small'
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={type}
          onChange={handleChangeSelect}
          MenuProps={{ classes: { paper: classes.menuPaper } }}
        >
          {listDataType.map((dataType) => {
            return (
              <MenuItem
                classes={{ selected: classes.selected }}
                key={dataType.value}
                value={dataType.value}
              >
                {dataType.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <Grid item xs={12}>
        <Typography className={classes.titleTextField}>Description</Typography>
        <TextField
          color='success'
          {...descriptionFiled}
          onChange={(e) => {
            descriptionFiled.onChange(e)
            handleOnChange(e)
          }}
          value={output.description}
          size='small'
          fullWidth
          multiline
          rows={2}
        />
      </Grid>
    </React.Fragment>
  )
}
