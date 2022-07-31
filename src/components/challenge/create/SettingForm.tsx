import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { fetchListGroupRequest } from '../../../modules/group/list/action'
import { useFormContext } from 'react-hook-form'
import useStyles from './style'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function SettingForm() {
  const classes = useStyles()
  const [startDate, setStartDate] = React.useState<Date | null>(new Date())
  const [endDate, setEndDate] = React.useState<Date | null>(new Date())
  const [secret, setSecret] = React.useState<string>('Public')
  const [group, setGroup] = React.useState<string>('1')
  const dispatch = useDispatch<AppDispatch>()
  const groupState = useSelector((state: RootState) => state.listGroup.groups)

  const {
    register,
    formState: { errors },
  } = useFormContext()

  console.log(errors)
  useEffect(() => {
    dispatch(fetchListGroupRequest({}))
  }, [])

  const handleStartDateChange = (newValue: Date | null) => {
    setStartDate(newValue)
  }

  const handleEndDateChange = (newValue: Date | null) => {
    setEndDate(newValue)
  }

  const handleSecretChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    if (value === 'Public') setGroup('1')
    setSecret(value)
  }

  const handleGroupChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value)
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={5}>
        <FormControl fullWidth variant='filled'>
          <Typography className={classes.titleTextField}>Tittle</Typography>
          <TextField
            {...register('title')}
            error={!!errors['title']}
            helperText={errors['title'] ? errors['title'].message : ''}
            size='small'
            color='success'
            id='outlined-basic'
            variant='outlined'
          />
          <Typography className={classes.titleTextField}>Description</Typography>
          <TextField
            {...register('description')}
            error={!!errors['description']}
            helperText={errors['description'] ? errors['description'].message : ''}
            size='small'
            color='success'
            fullWidth
            multiline
            rows={3}
          />
        </FormControl>
      </Grid>
      <Grid item xs={3.5}>
        <FormControl fullWidth>
          <Typography className={classes.titleTextField}>Start date</Typography>
          <DatePicker
            value={startDate}
            disablePast
            onChange={handleStartDateChange}
            renderInput={(params) => (
              <TextField
                size='small'
                placeholder='Please select start date'
                color='success'
                {...params}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth>
          <Typography className={classes.titleTextField}>State</Typography>
          <Select
            color='success'
            size='small'
            {...register('secret')}
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={secret}
            onChange={handleSecretChange}
          >
            <MenuItem value='Public'>Public</MenuItem>
            <MenuItem value='Private'>Private</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3.5}>
        <FormControl fullWidth variant='filled'>
          <Typography className={classes.titleTextField}>End date</Typography>
          <DatePicker
            value={endDate}
            onChange={handleEndDateChange}
            renderInput={(params) => (
              <TextField
                size='small'
                placeholder='Please select end date'
                color='success'
                {...params}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth>
          <Typography className={classes.titleTextField}>Group</Typography>
          <Select
            disabled={secret === 'Public' ? true : false}
            color='success'
            size='small'
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={group}
            displayEmpty
            {...register('group')}
            onChange={handleGroupChange}
          >
            {secret === 'Public' ? (
              <MenuItem value={1}>None Group</MenuItem>
            ) : (
              groupState.map((_group, index) => (
                <MenuItem key={index} value={_group.id}>
                  {_group.title}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}
