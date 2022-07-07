import { Label } from '@mui/icons-material'
import { Box, Grid, Stack, Tab, Tabs } from '@mui/material'
import React from 'react'
import Member from '../../../components/group/detail/Member/Member'
import TaskbarDetailGroup from '../../../components/group/detail/TaskbarDetailGroup/TaskbarDetailGroup'
import Tasklist from '../../../components/group/detail/TaskList/Tasklist'

import useStyles from './style'

/**
 * Taskbar Group
 * <p>
 * Version 1.0
 * <p>
 * Date: 04-07-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 04-07-2022      HuyNT2711           Create
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

export default function DetailGroup() {
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const classes = useStyles()
  return (
    <Stack margin={5}>
      <Grid container>
        <Grid item xs={12} marginBottom={2}>
          <TaskbarDetailGroup />
        </Grid>
        <Grid className={classes.tabLeft} item xs={12} sx={{ height: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              className={classes.tabStyle}
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab className={classes.tabTitle} label='Tasklist' {...a11yProps(0)} />
              <Tab className={classes.tabTitle} label='Member' {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Tasklist />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Member />
          </TabPanel>
        </Grid>
      </Grid>
    </Stack>
  )
}
