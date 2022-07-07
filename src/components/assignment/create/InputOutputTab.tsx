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
import React, { useState } from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import useStyles from './style'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import { object, string } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import _ from 'lodash'
import RegularButton from '../../../components/common/button/RegularButton'

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

export default function InputOutputTab() {
  const [inputList, setInputList] = useState<Input[]>([{} as Input])
  const [output, setOutput] = useState<Output>({} as Output)

  const classes = useStyles()
  const handleInputAdd = () => {
    setInputList([...inputList, {} as Input])
  }

  const handleInputRemove = (index: number) => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  const handleInputChange = (data: Input, index: number) => {
    const list = [...inputList]
    const indexOfInputList = _.findIndex(list, { id: index })
    list.splice(indexOfInputList, 1, data)
    setInputList(list)
  }

  return (
    <Box className={classes.scrollBar}>
      {/* <FormInput /> */}

      {inputList.map((input, index) => {
        input['id'] = index
        return (
          <FormInput
            handleChange={handleInputChange}
            handleRemove={handleInputRemove}
            index={index}
            key={index}
            listSize={inputList.length}
            input={input}
          />
        )
      })}
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
      <Divider />
      <FormOutput />
    </Box>
  )
}

interface Input {
  id: number
  name?: string
  type?: string
  description?: string
}

interface Output {
  id: number
  type?: string
  description?: string
}

interface FormInputProps {
  index: number
  listSize: number
  input: Input
  handleRemove: (index: number) => void
  handleChange: (input: Input, index: number) => void
}

const inputSchema = object({
  name: string().email('Email is invalid'),
  type: string(),
  description: string(),
})

// Form Input Create Assignment
function FormInput(props: FormInputProps) {
  const { listSize, input, index, handleRemove, handleChange } = props
  const [type, setType] = React.useState('')
  const classes = useStyles()
  const {
    register,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(inputSchema),
  })
  const nameFiled = register('name', { required: true })
  const typeFiled = register('type', { required: true })
  const descriptionFiled = register('description', { required: true })

  const handleOnChange = (event: any) => {
    const updates = { [event.target.name]: event.target.value }
    handleChange(_.merge(input, updates), index)
  }

  return (
    <React.Fragment>
      <form>
        {listSize !== 1 && index !== 0 && <Divider sx={{ margin: '10px 0px' }} />}
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography className={classes.titleNameInput}>Input {index + 1}</Typography>
          {listSize !== 1 && index !== 0 && (
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
            <FormControl fullWidth>
              <Typography className={classes.titleTextField}>Type</Typography>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={type}
                {...typeFiled}
                onChange={(e) => {
                  typeFiled.onChange(e)
                  handleOnChange(e)
                }}
              >
                {['Integer', 'Double', 'String', 'Float', 'Character'].map((value) => {
                  return (
                    <MenuItem key={value} value={value}>
                      {value}
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
      </form>
    </React.Fragment>
  )
}

// Form Input Create Assignment
function FormOutput() {
  const [type, setType] = React.useState('')
  const classes = useStyles()
  const handleChangeSelect = (event: SelectChangeEvent) => {
    setType(event.target.value as string)
  }

  return (
    <React.Fragment>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography className={classes.titleNameInput}>Output</Typography>
      </Stack>
      <FormControl fullWidth>
        <Typography className={classes.titleTextField}>Type</Typography>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={type}
          onChange={handleChangeSelect}
        >
          {['Integer', 'Double', 'String', 'Float', 'Character'].map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <Grid item xs={12}>
        <Typography className={classes.titleTextField}>Description</Typography>
        <TextField fullWidth multiline rows={2} />
      </Grid>
    </React.Fragment>
  )
}
