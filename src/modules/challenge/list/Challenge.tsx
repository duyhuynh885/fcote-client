import { Box, Grid, Pagination, PaginationItem, Stack, Tab, Tabs } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChallengeOwner from '../../../components/challenge/list/ChallengeOwnerTab'
import ChallengePublic from '../../../components/challenge/list/ChallengePublicTab'
import ChallengeGroup from '../../../components/challenge/list/ChallengeGroupTab'
import useStyles from './style'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
  clearStateViewListChallenge,
  fetchListChallengeGroupRequest,
  fetchListChallengeRequest,
  updateFilterListChallengesRequest,
} from './action'
import TaskbarFilterOfChallenge from '../../../components/challenge/general/TaskbarFilterOfChallenge'
import { ViewListChallengeRequestPayload } from './type'
import { fetchListGroupRequest } from '../../group/list/action'
import { ViewListGroupRequestPayload } from '../../group/list/type'

/**
 * Challenge
 *
 * Version 1.0
 *
 * Date: 29-06-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 29-06-2022      HuyNT2711           Create
 */

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export default function Challenge() {
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const challengesState = useSelector((state: RootState) => state.listChallenges.challenges)
  const groupsState = useSelector((state: RootState) => state.listChallenges.groups)
  const currentSizeState = useSelector((state: RootState) => state.listChallenges.currentSize)
  const filterChallengesState = useSelector(
    (state: RootState) => state.listChallenges.filterRequest,
  )
  const [value, setValue] = React.useState(0)
  const [page, setPage] = useState(1)
  const [groupID, setGroupId] = useState<number | undefined>(1)
  useEffect(() => {
    handleGetChallengeGroup()
  }, [groupID])
  const PER_PAGE = 10
  const count = Math.ceil(currentSizeState / PER_PAGE)

  const callbackSetGroupID = (groupID: number | undefined) => {
    setGroupId(groupID)
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    dispatch(updateFilterListChallengesRequest({ ...filterChallengesState, pageNumber: value }))
  }

  useEffect(() => {
    dispatch(fetchListChallengeRequest(filterChallengesState, undefined, undefined, undefined))
  }, [filterChallengesState])
  useEffect(() => {
    return () => {
      dispatch(clearStateViewListChallenge())
    }
  }, [])

  const publicRequest: ViewListChallengeRequestPayload = {
    typeData: 1,
    pageSize: 50,
    pageNumber: 1,
  }
  const groupChallengeRequest: ViewListChallengeRequestPayload = {
    typeData: 2,
  }
  const groupGroupRequest: ViewListGroupRequestPayload = {
    pageSize: 20,
    pageNumber: 1,
  }
  const ownerRequest: ViewListChallengeRequestPayload = {
    typeData: 3,
  }

  function handleGetChallengePublic() {
    dispatch(fetchListChallengeRequest(publicRequest, undefined, undefined, undefined))
  }
  function handleGetChallengeGroup() {
    dispatch(fetchListChallengeRequest(groupChallengeRequest, undefined, undefined, groupID))
    dispatch(fetchListChallengeGroupRequest(groupGroupRequest))
  }
  function handleGetChallengeOwner() {
    dispatch(fetchListChallengeRequest(ownerRequest, undefined, undefined, undefined))
  }

  useEffect((): void => {
    switch (value) {
      case 0:
        return handleGetChallengePublic()
      case 1:
        return handleGetChallengeGroup()
      case 2:
        return handleGetChallengeOwner()
      default:
        return undefined
    }
  }, [value])

  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container>
        <Grid item xs={12} marginBottom={2}>
          <TaskbarFilterOfChallenge url='/challenge/create' />
        </Grid>
        <Grid className={classes.tabLeft} item xs={12} sx={{ height: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              className={classes.tabStyle}
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab className={classes.tabTitle} label='Public' {...a11yProps(0)} />
              <Tab className={classes.tabTitle} label='Group' {...a11yProps(1)} />
              <Tab className={classes.tabTitle} label='Owner' {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ChallengePublic
              listChallenges={challengesState}
              count={count}
              handleChangePage={handleChangePage}
              page={page}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ChallengeGroup
              onclick={callbackSetGroupID}
              challenges={challengesState}
              groups={groupsState}
              count={count}
              handleChangePage={handleChangePage}
              page={page}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ChallengeOwner
              listChallenges={challengesState}
              count={count}
              handleChangePage={handleChangePage}
              page={page}
            />
          </TabPanel>
        </Grid>
      </Grid>
    </Stack>
  )
}
