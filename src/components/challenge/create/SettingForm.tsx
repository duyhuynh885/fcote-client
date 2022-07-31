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
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { fetchListGroupRequest } from '../../../modules/group/list/action'
import { Controller, useFormContext } from 'react-hook-form'
import useStyles from './style'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import moment from 'moment'

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
            <MenuItem value='Public'>Public</MenuItem>
            <MenuItem value='Private'>Private</MenuItem>
          </Select>
        </FormControl>
        <Stack>
          <Typography className={classes.titleTextField}>Start date</Typography>
          <Controller
            control={control}
            name='startAt'
            render={({ field: { onChange, value } }) => (
              <DatePicker
                inputFormat='DD/MM/yyyy'
                disablePast
                onChange={(startDate) => onChange(moment(startDate).format('YYYY-MM-DD HH:mm:ss'))}
                value={value ? value : null}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                      placeholder: 'Please select start date',
                    }}
                    fullWidth
                    error={!!errors['startAt']}
                    helperText={errors['startAt'] ? errors['startAt'].message : ''}
                    size='small'
                    color='success'
                  />
                )}
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
        <Stack>
          <Typography className={classes.titleTextField}>End date</Typography>
          <Controller
            control={control}
            name='endAt'
            render={({ field: { onChange, value } }) => (
              <DatePicker
                inputFormat='DD/MM/yyyy'
                disablePast
                onChange={(endDate) => onChange(moment(endDate).format('YYYY-MM-DD HH:mm:ss'))}
                value={value ? value : null}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                      placeholder: 'Please select end date',
                    }}
                    fullWidth
                    error={!!errors['endAt']}
                    helperText={errors['endAt'] ? errors['endAt'].message : ''}
                    size='small'
                    color='success'
                  />
                )}
              />
            )}
          />
        </Stack>
      </Grid>
    </Grid>
  )
}
