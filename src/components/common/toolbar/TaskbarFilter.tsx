import {
  IconButton,
  MenuItem,
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
export enum TypeFilterTaskBarEnum {
  LIST_ASSIGNMENT,
  CREATE_CHALLENGE,
}

interface TaskbarFilterProps {
  url: string
  type: TypeFilterTaskBarEnum
}

export default function TaskbarFilter(props: TaskbarFilterProps) {
  const classes = TaskbarFilterStyle()
  const dispatch = useDispatch<AppDispatch>()
  const filterAssignmentState = useSelector(
    (state: RootState) => state.listAssignment.filterRequest,
  )
  const [status, setStatus] = useState('0')
  const [difficult, setDifficult] = useState('0')
  const [filterByCurrentAccount, setFilterByCurrentAccount] = useState('Public')
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    dispatch(updateFilterListAssignmentRequest({ ...filterAssignmentState, searchBy: search }))
  }

  const handleChangeFilterByStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value)
    dispatch(
      updateFilterListAssignmentRequest({
        ...filterAssignmentState,
        filterByStatus: +event.target.value,
      }),
    )
  }

  const handleChangeFilterByDifficult = (event: SelectChangeEvent) => {
    setDifficult(event.target.value)
    dispatch(
      updateFilterListAssignmentRequest({
        ...filterAssignmentState,
        filterByDifficult: +event.target.value,
      }),
    )
  }

  const handleClearSearch = () => {
    setSearch('')
    dispatch(
      updateFilterListAssignmentRequest({
        ...filterAssignmentState,
        searchBy: '',
      }),
    )
  }

  const handleChangeFilterByPublic = (event: SelectChangeEvent) => {
    const _value = event.target.value
    setFilterByCurrentAccount(_value)
    const resultMatched = _value === 'Public' ? false : true
    dispatch(
      updateFilterListAssignmentRequest({
        ...filterAssignmentState,
        filterByCurrentAccount: resultMatched,
      }),
    )
  }

  return (
    <Paper
      square
      elevation={props.type === TypeFilterTaskBarEnum.CREATE_CHALLENGE ? 0 : 3}
      sx={{
        width: '100%',
        height: '4rem',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
        <FormControl color='success' variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <Select
            onChange={handleChangeFilterByPublic}
            size='small'
            className={classes.taskFilterOptions}
            value={filterByCurrentAccount}
          >
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value='Public'
            >
              Public
            </MenuItem>
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value='CreatedByMe'
            >
              Created by me
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl color='success' variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={status}
            size='small'
            onChange={handleChangeFilterByStatus}
            className={classes.taskFilterOptions}
          >
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={StatusEnum.ALL}
            >
              All statuses
            </MenuItem>
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={StatusEnum.SOLVED}
            >
              Solved
            </MenuItem>
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={StatusEnum.NOT_SOLVED}
            >
              Not solved
            </MenuItem>
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={StatusEnum.IN_PROGRESS}
            >
              In progress
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
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={DifficultEnum.ALL}
            >
              All difficulties
            </MenuItem>
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={DifficultEnum.EASY}
            >
              Easy
            </MenuItem>
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={DifficultEnum.MEDIUM}
            >
              Medium
            </MenuItem>
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={DifficultEnum.HARD}
            >
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
              <IconButton aria-label='toggle password visibility' onClick={handleClearSearch}>
                <ClearOutlinedIcon />
              </IconButton>
            ),
          }}
        />
        {props.type === TypeFilterTaskBarEnum.CREATE_CHALLENGE ? null : (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </Stack>
    </Paper>
  )
}
