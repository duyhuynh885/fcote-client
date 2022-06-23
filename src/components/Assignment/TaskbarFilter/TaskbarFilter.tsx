import { IconButton, InputAdornment, NativeSelect, Paper, Stack, TextField } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider'
import SearchIcon from '@mui/icons-material/Search'
import FormControl from '@mui/material/FormControl'
import TaskbarFilterStyle from './style'
import RegularButton from '../../Button/RegularButton'
import { Link } from 'react-router-dom'

/**
 * TaskbarFilter
 * <p>
 * Version 1.0
 * <p>
 * Date: 08-06-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 08-06-2022      HuyNT2711           Create
 * 24-06-2022      DuyHV               Update UI
 */

export default function TaskbarFilter() {
  const classes = TaskbarFilterStyle()
  const statusOptions = [{ name: '', value: 'true' }]
  return (
    <Paper
      square
      elevation={3}
      sx={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'space-between' }}
    >
      <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
        <FormControl>
          <NativeSelect
            defaultValue={'All Status'}
            className={classes.taskFilterOptions}
            inputProps={{
              name: 'status',
              id: 'uncontrolled-native',
            }}
          >
            <option className={classes.taskFilterOptions} value={'ALL'}>
              All Status
            </option>
            <option className={classes.taskFilterOptions} value={'DOING'}>
              Doing
            </option>
            <option className={classes.taskFilterOptions} value={'FINISHED'}>
              Finished
            </option>
            <option className={classes.taskFilterOptions} value={'NOT YET'}>
              Not yet
            </option>
          </NativeSelect>
        </FormControl>
        <FormControl>
          <NativeSelect
            className={classes.taskFilterOptions}
            defaultValue={'All Difficulties'}
            inputProps={{
              name: 'difficulties',
              id: 'uncontrolled-native',
            }}
          >
            <option className={classes.taskFilterOptions} value={'ALL'}>
              All Difficulties
            </option>
            <option className={classes.taskFilterOptions} value={'HARD'}>
              Hard
            </option>
            <option className={classes.taskFilterOptions} value={'MEDIUM'}>
              Medium
            </option>
            <option className={classes.taskFilterOptions} value={'EASY'}>
              Easy
            </option>
          </NativeSelect>
        </FormControl>
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          size='small'
          color='success'
          placeholder='Search here'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Divider orientation='vertical' flexItem />
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/assignment/create'>
          <RegularButton
            color={'primary'}
            size={'sm'}
            round={false}
            fullWidth={false}
            disabled={false}
            simple={false}
            block={false}
            link={false}
            justIcon={false}
            className=''
          >
            + Create
          </RegularButton>
        </Link>
      </Stack>
    </Paper>
  )
}
