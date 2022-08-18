import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import moment from 'moment'
import React, { useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { RangePicker } from 'react-minimal-datetime-range'
import 'react-minimal-datetime-range/lib/react-minimal-datetime-range.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { fetchListGroupRequest } from '../../../modules/group/list/action'
import useStyles from './style'

export default function SettingForm() {
  const classes = useStyles()
  const [secret, setSecret] = React.useState<string>('Public')
  const [group, setGroup] = React.useState<number>(1)
  const dispatch = useDispatch<AppDispatch>()
  const groupState = useSelector((state: RootState) => state.listGroup.groups)

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    dispatch(fetchListGroupRequest({}))
  }, [])

  const handleSecretChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    if (value === 'Public') setGroup(1)
    else if (value === 'Private') setGroup(groupState[0].id ? groupState[0].id : 1)
    setSecret(value)
  }

  const handleGroupChange = (event: SelectChangeEvent) => {
    setGroup(+event.target.value)
  }

  const handleDateChange = (value: any) => {
    let startDate = null
    let endDate = null
    if (value) {
      startDate = moment(value[0], 'YYYY-MM-DD HH:mm:ss').toDate()
      endDate = moment(value[1], 'YYYY-MM-DD HH:mm:ss').toDate()
      const startMonth = String(startDate.getMonth() + 1).padStart(2, '0')
      const endMonth = String(endDate.getMonth() + 1).padStart(2, '0')
      const startDay = String(startDate.getDate()).padStart(2, '0')
      const endDay = String(endDate.getDate()).padStart(2, '0')
      return [
        startDay + '-' + startMonth + '-' + startDate.getFullYear(),
        endDay + '-' + endMonth + '-' + endDate.getFullYear(),
      ]
    }
    return ['', '']
  }

  const handleTimeChange = (value: any) => {
    console.log('handleTimeChange value: ', value)
    let startDate = null
    let endDate = null

    if (value) {
      startDate = moment(value[0], 'YYYY-MM-DD HH:mm:ss').toDate()
      endDate = moment(value[1], 'YYYY-MM-DD HH:mm:ss').toDate()
      return [
        startDate.getHours() + ':' + startDate.getMinutes(),
        endDate.getHours() + ':' + endDate.getMinutes(),
      ]
    }
    return ['', '']
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
            <MenuItem classes={{ selected: classes.selected }} value='Public'>
              Public
            </MenuItem>
            <MenuItem classes={{ selected: classes.selected }} value='Private'>
              Private
            </MenuItem>
          </Select>
        </FormControl>
        <Stack>
          <Typography className={classes.titleTextField}>Duration</Typography>
          <Controller
            control={control}
            name='durationDate'
            render={({ field: { onChange, value } }) => (
              <RangePicker
                locale='en-us'
                show={false}
                disabled={false}
                allowPageClickToClose={true}
                onConfirm={(res) => onChange(res)}
                onClose={() => console.log('onClose')}
                onClear={() => console.log('onClear')}
                placeholder={['Start Time', 'End Time']}
                showOnlyTime={false}
                style={{
                  width: '100%',
                }}
                defaultDates={handleDateChange(value)}
                defaultTimes={handleTimeChange(value)}
              />
            )}
          />
        </Stack>
      </Grid>
      <Grid item xs={3.5}>
        <FormControl fullWidth>
          <Typography className={classes.titleTextField}>Group</Typography>
          <Select
            color='success'
            size='small'
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={group + ''}
            displayEmpty
            {...register('group')}
            onChange={handleGroupChange}
          >
            {secret === 'Public' ? (
              <MenuItem classes={{ selected: classes.selected }} value={1}>
                None Group
              </MenuItem>
            ) : (
              groupState.map((_group, index) => (
                <MenuItem classes={{ selected: classes.selected }} key={index} value={_group.id}>
                  {_group.title}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
        <Stack>
          <Typography className={classes.titleTextField}>Limit Submissions</Typography>
          <TextField
            type='number'
            InputProps={{
              inputProps: {
                max: 10,
                min: 1,
              },
            }}
            {...register('limitSubmissions')}
            error={!!errors['limitSubmissions']}
            helperText={errors['limitSubmissions'] ? errors['limitSubmissions'].message : ''}
            size='small'
            color='success'
            fullWidth
          />
        </Stack>
      </Grid>
      <Stack></Stack>
    </Grid>
  )
}
