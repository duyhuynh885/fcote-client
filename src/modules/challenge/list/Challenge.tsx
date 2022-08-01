import { Box, Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import TaskbarFilterOfChallenge from '../../../components/challenge/general/TaskbarFilterOfChallenge'
import ChallengeGroup from '../../../components/challenge/list/ChallengeGroupTab'
import ChallengePublicOwner from '../../../components/challenge/list/ChallengeOwnerTab'
import { fetchListGroupRequest } from '../../group/list/action'
import useStyles from './style'

/**
 * Challenge
 *
 * Version 1.0O
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
  const groupsState = useSelector((state: RootState) => state.listGroup.groups)
  const [tabValue, setTabValue] = React.useState(0)
  const [typeData, setTypeData] = useState(1)
  const [groupID, setGroupId] = useState<number | undefined>()
  const handleChangeTabValue = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  function handleGetChallengeGroup() {
    dispatch(fetchListGroupRequest({}))
    setTypeData(2)
  }

  useEffect(() => {
    switch (tabValue) {
      case 0:
        return setTypeData(1)
      case 1:
        return setTypeData(3)
      case 2:
        return handleGetChallengeGroup()
      default:
        return undefined
    }
  }, [tabValue])

  const callbackSetGroupID = (value: number | undefined) => {
    setGroupId(value)
  }
  console.log('value', groupID)

  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container>
        <Grid item xs={12} marginBottom={2}>
          <TaskbarFilterOfChallenge
            groupID={groupID}
            typeData={typeData}
            url='/challenge/create'
            handleChangeTab={handleChangeTabValue}
            tabValue={tabValue}
          />
        </Grid>
        <Grid className={classes.tabLeft} item xs={12} sx={{ height: '100%' }}>
          <TabPanel value={tabValue} index={0}>
            <ChallengePublicOwner typeData={typeData} />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <ChallengePublicOwner typeData={typeData} />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <ChallengeGroup
              handleGetGroupID={callbackSetGroupID}
              groups={groupsState}
              typeData={typeData}
            />
          </TabPanel>
        </Grid>
      </Grid>
    </Stack>
  )
}
