import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import useStyles from './style'
import parse from 'html-react-parser'
import _ from 'lodash'
import { object, string } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

const config = {
  toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
}

interface Input {
  id: number
  name?: string
  description?: string
  state?: string
  group?: string
}

interface FormInputProps {
  index: number
  listSize: number
  input: Input
  handleRemove: (index: number) => void
  handleChange: (input: Input, index: number) => void
}

const inputSchema = object({
  name: string(),
  description: string(),
  state: string(),
  group: string(),
})

export default function NewChallenge() {
  const classes = useStyles()
  const [editorState, setEditorState] = useState('')
  const handleOnChangeCK = (event: any, editor: ClassicEditor) => {
    const data = editor.getData()
    setEditorState(data)
  }

  const {
    register,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(inputSchema),
  })

  const [state, setSate] = React.useState('')
  const [group, setGroup] = React.useState('')

  const handleChangeSelectState = (event: SelectChangeEvent) => {
    setGroup(event.target.value as string)
  }
  const handleChangeSelectGroup = (event: SelectChangeEvent) => {
    setSate(event.target.value as string)
  }

  const [value, setValue] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'))

  const handleChange = (newValue: Date | null) => {
    setValue(newValue)
  }
  return (
    <React.Fragment>
      <form>
        <Grid container xs={6} sx={{ padding: '20px 50px 10px 20px ' }}>
          <FormControl fullWidth variant='filled'>
            <Typography className={classes.titleTextField}>Name</Typography>
            <TextField id='outlined-basic' variant='outlined' />
            <Typography className={classes.titleTextField}>Description</Typography>
            <TextField fullWidth multiline rows={3} />
          </FormControl>

          <Grid item xs={6} paddingRight='10px'>
            <FormControl fullWidth>
              <Typography className={classes.titleTextField}>STATE</Typography>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={state}
                onChange={handleChangeSelectState}
              >
                {['Global', 'Private'].map((value) => {
                  return (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} paddingLeft='10px'>
            <FormControl fullWidth>
              <Typography className={classes.titleTextField}>GROUP</Typography>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={group}
                onChange={handleChangeSelectGroup}
              >
                {['Group 1', 'Group 2', 'Group 3', 'Group 4'].map((value) => {
                  return (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} paddingRight='10px'>
            <DateTimePicker
              label='Start Time'
              value={value}
              onChange={handleChange}
              renderInput={(params: any) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={6} paddingLeft='10px'>
            <DateTimePicker
              label='End Time'
              value={value}
              onChange={handleChange}
              renderInput={(params: any) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  )
}
