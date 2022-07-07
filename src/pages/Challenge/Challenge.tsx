import { Label } from '@mui/icons-material'
import { Box, Grid, Stack, Tab, Tabs } from '@mui/material'
import React from 'react'
import TaskbarFilter from '../../components/Assignment/TaskbarFilter/TaskbarFilter'
import ChallengeOwner from '../../components/Challenge/ChallengeOwnerTab'
import ChallengePublic from '../../components/Challenge/ChallengePublicTab'
import ChanllengeGroup from '../../components/Challenge/ChanllengeGroupTab'
import useStyles from './style'

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
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const classes = useStyles()
  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container>
        <Grid item xs={12} marginBottom={2}>
          <TaskbarFilter url='/challenge/create' />
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
            <ChallengePublic />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ChanllengeGroup />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ChallengeOwner />
          </TabPanel>
        </Grid>
      </Grid>
    </Stack>
  )
}
