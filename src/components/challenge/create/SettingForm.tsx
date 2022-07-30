import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { fetchListGroupRequest } from '../../../modules/group/list/action'
import { getCurrentDateTime } from '../../../utils/dateUtil'
import useStyles from './style'

export default function SettingForm() {
  const classes = useStyles()
  const [startDate, setStartDate] = React.useState<Date | null>(new Date())
  const [endDate, setEndDate] = React.useState<Date | null>(null)
  const [secret, setSecret] = React.useState<string>('Public')
  const [group, setGroup] = React.useState<string>('')
  const dispatch = useDispatch<AppDispatch>()
  const groupState = useSelector((state: RootState) => state.listGroup.groups)

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
    if (value === 'Public') setGroup('')
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
          <TextField size='small' color='success' id='outlined-basic' variant='outlined' />
          <Typography className={classes.titleTextField}>Description</Typography>
          <TextField size='small' color='success' fullWidth multiline rows={3} />
        </FormControl>
      </Grid>
      <Grid item xs={3.5}>
        <FormControl fullWidth>
          <Typography className={classes.titleTextField}>Start date</Typography>
          <DateTimePicker
            // minDate={new Date()}
            renderInput={(props) => (
              <TextField
                size='small'
                placeholder='Please select start date'
                color='success'
                {...props}
              />
            )}
            value={startDate}
            onChange={handleStartDateChange}
          />
        </FormControl>
        <FormControl fullWidth>
          <Typography className={classes.titleTextField}>State</Typography>
          <Select
            color='success'
            size='small'
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
          <DateTimePicker
            renderInput={(props) => (
              <TextField
                size='small'
                placeholder='Please select end date'
                color='success'
                {...props}
              />
            )}
            value={endDate}
            onChange={handleEndDateChange}
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
            // defaultValue={group || ''}
            onChange={handleGroupChange}
          >
            {groupState.map((_group, index) => (
              <MenuItem key={index} value={_group.id}>
                {_group.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}
