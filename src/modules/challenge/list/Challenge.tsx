import { Box, Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import TaskbarFilterOfChallenge from '../../../components/challenge/general/TaskbarFilterOfChallenge'
import ChallengeGroup from '../../../components/challenge/list/ChallengeGroupTab'
import ChallengePublicOwner from '../../../components/challenge/list/ChallengeOwnerTab'
import { ViewListGroupRequestPayload } from '../../group/list/type'
import {
  clearStateViewListChallenge,
  fetchListChallengeGroupRequest,
  fetchListChallengeRequest,
  updateFilterListChallengesRequest,
} from './action'
import useStyles from './style'
import { ViewListChallengeRequestPayload } from './type'

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
  const [typeData, setTypeData] = useState(1)
  const [groupID, setGroupId] = useState<number | undefined>()

  const PER_PAGE = 10
  const count = Math.ceil(currentSizeState / PER_PAGE)

  // handle choose challenge follow Group
  const callbackSetGroupID = (groupID: number | undefined) => {
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

  function handleGetChallengePublic() {
    dispatch(fetchListChallengeRequest(publicRequest, undefined, undefined, undefined))
    setTypeData(1)
  }

  function handleGetChallengeGroup() {
    dispatch(fetchListChallengeGroupRequest(groupGroupRequest))
    setTypeData(2)
  }

  useEffect(() => {
    if (groupsState.length > 0) {
      dispatch(
        fetchListChallengeRequest(groupChallengeRequest, undefined, undefined, groupsState[0].id),
      )
    }
  }, [groupsState])

  function handleGetChallengePublicOwner() {
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
        return handleGetChallengePublicOwner()
      default:
        return undefined
    }
  }, [value])

  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container>
        <Grid item xs={12} marginBottom={2}>
          <TaskbarFilterOfChallenge
            groupID={groupID}
            typeData={typeData}
            url='/challenge/create'
            handleChangeTab={handleChange}
            tabValue={value}
          />
        </Grid>
        <Grid className={classes.tabLeft} item xs={12} sx={{ height: '100%' }}>
          <TabPanel value={value} index={0}>
            <ChallengePublicOwner
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
            <ChallengePublicOwner
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
