import {
  IconButton,
  MenuItem,
  NativeSelect,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import Divider from '@mui/material/Divider'
import SearchIcon from '@mui/icons-material/Search'
import FormControl from '@mui/material/FormControl'
import TaskbarFilterStyle from './style'
import RegularButton from '../button/RegularButton'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { useDispatch, useSelector } from 'react-redux'
import { DifficultEnum, StatusEnum } from '../../../modules/assignment/list/type'
import { updateFilterListAssignmentRequest } from '../../../modules/assignment/list/action'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
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

interface IProps {
  url: string
}

export default function TaskbarFilter(props: IProps) {
  const classes = TaskbarFilterStyle()
  const dispatch = useDispatch<AppDispatch>()
  const filterAssignmentState = useSelector(
    (state: RootState) => state.listAssignment.filterRequest,
  )
  const [status, setStatus] = useState('ALL')
  const [difficult, setDifficult] = useState('ALL')
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    dispatch(updateFilterListAssignmentRequest({ ...filterAssignmentState, searchBy: search }))
  }

  const handleChangeFilterByStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value)
    dispatch(
      updateFilterListAssignmentRequest({
        ...filterAssignmentState,
        filterByStatus: event.target.value as StatusEnum,
      }),
    )
  }

  const handleChangeFilterByDifficult = (event: SelectChangeEvent) => {
    setDifficult(event.target.value)
    dispatch(
      updateFilterListAssignmentRequest({
        ...filterAssignmentState,
        filterByDifficult: event.target.value as DifficultEnum,
      }),
    )
  }

  return (
    <Paper
      square
      elevation={3}
      sx={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'space-between' }}
    >
      <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
        <FormControl color='success' variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={status}
            size='small'
            onChange={handleChangeFilterByStatus}
            className={classes.taskFilterOptions}
          >
            <MenuItem className={classes.taskFilterOptions} value={StatusEnum.ALL}>
              All Status
            </MenuItem>
            <MenuItem className={classes.taskFilterOptions} value={StatusEnum.NOT_YET}>
              Not yet
            </MenuItem>
            <MenuItem className={classes.taskFilterOptions} value={StatusEnum.DOING}>
              Doing
            </MenuItem>
            <MenuItem className={classes.taskFilterOptions} value={StatusEnum.FINISHED}>
              Finished
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl color='success' variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <Select
            size='small'
            className={classes.taskFilterOptions}
            onChange={handleChangeFilterByDifficult}
            value={difficult}
          >
            <MenuItem className={classes.taskFilterOptions} value={DifficultEnum.ALL}>
              All Difficulties
            </MenuItem>
            <MenuItem className={classes.taskFilterOptions} value={DifficultEnum.EASY}>
              Easy
            </MenuItem>
            <MenuItem className={classes.taskFilterOptions} value={DifficultEnum.MEDIUM}>
              Medium
            </MenuItem>
            <MenuItem className={classes.taskFilterOptions} value={DifficultEnum.HARD}>
              Hard
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' spacing={2}>
        <TextField
          size='small'
          type='text'
          variant='outlined'
          color='success'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder='Search'
          InputProps={{
            startAdornment: (
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            ),
            endAdornment: search && (
              <IconButton aria-label='toggle password visibility' onClick={() => setSearch('')}>
                <ClearOutlinedIcon />
              </IconButton>
            ),
          }}
        />
        <Divider orientation='vertical' flexItem />
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={props.url}>
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
