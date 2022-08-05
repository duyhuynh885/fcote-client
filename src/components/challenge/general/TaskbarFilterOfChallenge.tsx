import { IconButton, Paper, Stack, Tab, Tabs, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Divider from '@mui/material/Divider'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { useDispatch, useSelector } from 'react-redux'
import useStyle from './style'
import RegularButton from '../../common/button/RegularButton'
import { updateFilterListChallengesRequest } from '../../../modules/challenge/list/action'
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
 * 08-06-2022      HuyNT2711           Create UI
 * 24-06-2022      DuyHV               Update UI
 */

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
interface IProps {
  url: string
  groupID: number | undefined
  pageNumber: number | undefined
  typeData: number
  handleChangeTab: (event: React.SyntheticEvent, newValue: number) => void
  tabValue: number
}

export default function TaskbarFilterOfChallenge(props: IProps) {
  const classes = useStyle()
  const dispatch = useDispatch<AppDispatch>()
  const filterChallengeState = useSelector((state: RootState) => state.listChallenges.filterRequest)
  const [search, setSearch] = useState('')
  const { url, groupID, pageNumber, typeData, handleChangeTab, tabValue } = props

  const handleSearch = () => {
    dispatch(
      updateFilterListChallengesRequest({
        ...filterChallengeState,
        typeData: typeData,
        searchBy: search,
        groupID: groupID,
        pageSize: 100,
        pageNumber: 0,
      }),
    )
  }
  useEffect(() => {
    search === '' || search === undefined
      ? dispatch(
          updateFilterListChallengesRequest({
            ...filterChallengeState,
            typeData: typeData,
            searchBy: search,
            groupID: groupID,
            pageSize: 4,
            pageNumber: pageNumber === undefined ? 1 : pageNumber,
          }),
        )
      : dispatch(
          updateFilterListChallengesRequest({
            ...filterChallengeState,
            typeData: typeData,
            searchBy: search,
            groupID: groupID,
            pageSize: 100,
            pageNumber: 0,
          }),
        )
  }, [search])
  return (
    <Paper
      square
      elevation={3}
      sx={{
        width: '100%',
        height: '4rem',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        <Tabs
          className={classes.tabStyle}
          value={tabValue}
          onChange={handleChangeTab}
          aria-label='basic tabs example'
        >
          <Tab className={classes.tabTitle} label='Public' {...a11yProps(0)} />
          <Tab className={classes.tabTitle} label='Owner' {...a11yProps(1)} />
          <Tab className={classes.tabTitle} label='Group' {...a11yProps(2)} />
        </Tabs>
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
