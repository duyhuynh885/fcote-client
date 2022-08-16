import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import TaskbarFilterOfChallenge from '../../../components/challenge/general/TaskbarFilterOfChallenge'
import ChallengeGroup from '../../../components/challenge/list/ChallengeGroupTab'
import ChallengePublicOwner from '../../../components/challenge/list/ChallengeOwnerTab'
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
  const [tabValue, setTabValue] = React.useState(0)
  const [typeData, setTypeData] = useState(1)
  const [groupID, setGroupId] = useState<number | undefined>()
  const [pageNumber, setPageNumber] = useState<number | undefined>(1)
  const handleChangeTabValue = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
    switch (newValue) {
      case 0:
        return setTypeData(1)
      case 1:
        return setTypeData(3)
      case 2:
        return setTypeData(2)
      default:
        return undefined
    }
  }

  const callbackSetGroupID = (value: number | undefined) => {
    setGroupId(value)
  }
  const callbackSetPageNumber = (value: number | undefined) => {
    setPageNumber(value)
  }

  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container>
        <Grid item xs={12} marginBottom={2}>
          <TaskbarFilterOfChallenge
            groupID={groupID}
            pageNumber={pageNumber}
            typeData={typeData}
            url='/challenge/create'
            handleChangeTab={handleChangeTabValue}
            tabValue={tabValue}
          />
        </Grid>
        <Grid className={classes.tabLeft} item xs={12} sx={{ height: '100%' }}>
          <TabPanel value={tabValue} index={0}>
            <ChallengePublicOwner handleGetPageNumber={callbackSetPageNumber} typeData={typeData} />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <ChallengePublicOwner handleGetPageNumber={callbackSetPageNumber} typeData={typeData} />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <ChallengeGroup
              handleGetPageNumber={callbackSetPageNumber}
              handleGetGroupID={callbackSetGroupID}
              typeData={typeData}
            />
          </TabPanel>
        </Grid>
      </Grid>
    </Stack>
  )
}
