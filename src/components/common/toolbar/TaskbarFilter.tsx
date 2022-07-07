import { IconButton, InputAdornment, NativeSelect, Paper, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
  const [status, setStatus] = useState<StatusEnum>(filterAssignmentState.filterByStatus)
  const [difficult, setDifficult] = useState<DifficultEnum>(filterAssignmentState.filterByDifficult)
  const [search, setSearch] = useState<string>()

  const handleSearchChange = () => {
    console.log('handleSearchChange()')
  }
  const handleChange = (event: { target: { value: string } }) => {
    console.log('handleChange() , event: ' + event.target.value)
  }

  useEffect(() => {
    console.log('updateFilterListAssignmentRequest : ')
    dispatch(
      updateFilterListAssignmentRequest({
        ...filterAssignmentState,
        filterByStatus: status,
        filterByDifficult: difficult,
        searchBy: search,
      }),
    )
  }, [status, difficult])

  return (
    <Paper
      square
      elevation={3}
      sx={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'space-between' }}
    >
      <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
        <FormControl>
          <NativeSelect
            defaultValue={status}
            onChange={handleChange}
            className={classes.taskFilterOptions}
            inputProps={{
              name: 'status',
              id: 'uncontrolled-native',
            }}
          >
            <option className={classes.taskFilterOptions} value={StatusEnum.ALL}>
              All Status
            </option>
            <option className={classes.taskFilterOptions} value={StatusEnum.NOT_YET}>
              Not yet
            </option>
            <option className={classes.taskFilterOptions} value={StatusEnum.DOING}>
              Doing
            </option>
            <option className={classes.taskFilterOptions} value={StatusEnum.FINISHED}>
              Finished
            </option>
          </NativeSelect>
        </FormControl>
        <FormControl>
          <NativeSelect
            className={classes.taskFilterOptions}
            defaultValue={difficult}
            inputProps={{
              name: 'difficulties',
              id: 'uncontrolled-native',
            }}
          >
            <option className={classes.taskFilterOptions} value={DifficultEnum.ALL}>
              All Difficulties
            </option>
            <option className={classes.taskFilterOptions} value={DifficultEnum.EASY}>
              Easy
            </option>
            <option className={classes.taskFilterOptions} value={DifficultEnum.MEDIUM}>
              Medium
            </option>
            <option className={classes.taskFilterOptions} value={DifficultEnum.HARD}>
              Hard
            </option>
          </NativeSelect>
        </FormControl>
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          size='small'
          color='success'
          onChange={handleSearchChange}
          value={search}
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
