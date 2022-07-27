import { Box, Grid, Stack, Tab, Tabs } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChallengeOwner from '../../../components/challenge/list/ChallengeOwnerTab'
import ChallengePublic from '../../../components/challenge/list/ChallengePublicTab'
import ChallengeGroup from '../../../components/challenge/list/ChallengeGroupTab'
import useStyles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import {
  clearStateViewListChallenge,
  fetchListChallengeGroupRequest,
  fetchListChallengeRequest,
  updateFilterListChallengesRequest,
} from './action'
import TaskbarFilterOfChallenge from '../../../components/challenge/general/TaskbarFilterOfChallenge'
import { ViewListChallengeRequestPayload } from './type'
import { Group, ViewListGroupRequestPayload } from '../../group/list/type'

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
 * 29-06-2022      HuyNT2711           Create ui
 * 22-07-2022      HuyNT2711           Create logic
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
  const groupSuccessState = useSelector((state: RootState) => state.listChallenges.successful)
  const filterChallengesState = useSelector(
    (state: RootState) => state.listChallenges.filterRequest,
  )
  const [value, setValue] = React.useState(0)
  const [page, setPage] = useState(1)
  const [typeData, setTypeData] = useState(1)
  const [groupID, setGroupId] = useState<number | undefined>()
  useEffect(() => {
    console.log('-============== groupID', groupID)
    handleGetChallengeGroup()
  }, [groupID])
  const PER_PAGE = 10
  const count = Math.ceil(currentSizeState / PER_PAGE)

  // handle choose challenge follow Group
  const callbackSetGroupID = (groupID: number | undefined) => {
    console.log('groupID', groupID)
    setGroupId(groupID)
    dispatch(fetchListChallengeRequest(groupChallengeRequest, undefined, undefined, groupID))
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    dispatch(updateFilterListChallengesRequest({ ...filterChallengesState, pageNumber: value }))
  }

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
    pageSize: 50,
    pageNumber: 1,
  }

  const groupGroupRequest: ViewListGroupRequestPayload = {
    pageSize: 50,
    pageNumber: 1,
  }

  const ownerRequest: ViewListChallengeRequestPayload = {
    typeData: 3,
    pageSize: 50,
    pageNumber: 1,
  }
  console.log('value', value)
  function handleGetChallengePublic() {
    console.log('------- Action 1 ------')
    dispatch(fetchListChallengeRequest(publicRequest, undefined, undefined, undefined))
    setTypeData(1)
  }

  function handleGetChallengeGroup() {
    dispatch(fetchListChallengeGroupRequest(groupGroupRequest))
    console.log(' groupsState 1', groupsState)
    setTypeData(2)
  }

  // useEffect(() => {
  //   dispatch(fetchListChallengeRequest(groupChallengeRequest, undefined, undefined, groupID))
  // }, [groupSuccessState])

  // useEffect(() => {
  //   if (groupsState !== null || groupsState !== []) {
  //     const indexGroup: Group = groupsState[0]
  //     console.log('=========== groupsState 2', groupsState)
  //     dispatch(
  //       fetchListChallengeRequest(groupChallengeRequest, undefined, undefined, indexGroup.id),
  //     )
  //   }
  // }, [groupsState])

  function handleGetChallengeOwner() {
    dispatch(fetchListChallengeRequest(ownerRequest, undefined, undefined, undefined))
    setTypeData(3)
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
          <TaskbarFilterOfChallenge groupID={groupID} typeData={typeData} url='/challenge/create' />
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
