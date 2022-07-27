import {
  IconButton,
  InputAdornment,
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
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilterListAssignmentRequest } from '../../../modules/assignment/list/action'
import useStyle from './style'
import RegularButton from '../../common/button/RegularButton'
import { updateFilterListChallengesRequest } from '../../../modules/challenge/list/action'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { StatusChallengeEnum } from '../../../modules/challenge/list/type'
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
 * 08-06-2022      HuyNT2711           Create UI
 * 24-06-2022      DuyHV               Update UI
 */
interface IProps {
  url: string
  groupID: number | undefined
  typeData: number
}
export default function TaskbarFilterOfChallenge(props: IProps) {
  const classes = useStyle()
  const dispatch = useDispatch<AppDispatch>()
  const filterChallengeState = useSelector((state: RootState) => state.listChallenges.filterRequest)
  const [status, setStatus] = useState('0')
  const [search, setSearch] = useState('')
  const { url, groupID, typeData } = props

  const handleCheckSearch = (search: string) => {
    setSearch(search)
    return search === '' || search === 'undefined' ? false : true
  }

  const handleSearch = () => {
    console.log('------------- Taskbar groupID', groupID)
    dispatch(
      updateFilterListChallengesRequest({
        ...filterChallengeState,
        typeData: typeData,
        searchBy: search,
        groupID: groupID,
      }),
    )
  }

  const handleChangeFilterByStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value)
    dispatch(
      updateFilterListChallengesRequest({
        ...filterChallengeState,
        status: +event.target.value,
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
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={StatusChallengeEnum.ALL}
            >
              All statuses
            </MenuItem>
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={StatusChallengeEnum.NOT_OPEN_YET}
            >
              not open yet
            </MenuItem>
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={StatusChallengeEnum.OPEN}
            >
              open
            </MenuItem>
            <MenuItem
              classes={{ selected: classes.selected }}
              className={classes.taskFilterOptions}
              value={StatusChallengeEnum.CLOSE}
            >
              close
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
          onChange={(e) => handleCheckSearch(e.target.value)}
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
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={url}>
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
