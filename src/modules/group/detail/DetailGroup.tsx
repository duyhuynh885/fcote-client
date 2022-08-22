import { Box, Grid, Stack, Tab, Tabs } from '@mui/material'
import React, { useEffect } from 'react'
import Member from '../../../components/group/detail/Member/Member'
import TaskbarDetailGroup from '../../../components/group/detail/TaskbarDetailGroup/TaskbarDetailGroup'
import Tasklist from '../../../components/group/detail/TaskList/Tasklist'

import useStyles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { fetchDetailGroupRequest } from './action'
import { useParams } from 'react-router-dom'

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
 * 21-07-2022       TuanLA              Add Logic
 */

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

interface ParamTypes {
  groupId: string
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
  const { groupId } = useParams<ParamTypes>()
  const id = parseInt(groupId)
  const dispatch = useDispatch<AppDispatch>()
  const groupDetailState = useSelector((state: RootState) => state.detailGroup.groupDetail)
  const groupMemberState = useSelector((state: RootState) => state.detailGroup.member)
  const groupMemberRequestingState = useSelector((state: RootState) => state.detailGroup.requesting)

  const groupDetailRequestState = useSelector(
    (state: RootState) => state.detailGroup.groupDetailRequest,
  )
  const editGroupSuccessfulState = useSelector((state: RootState) => state.editGroup.successful)
  const kickGroupSuccessfulState = useSelector((state: RootState) => state.kickGroup.successful)

  useEffect(() => {
    dispatch(fetchDetailGroupRequest(groupDetailRequestState, id))
  }, [groupDetailRequestState.id])

  useEffect(() => {
    if (editGroupSuccessfulState || kickGroupSuccessfulState) {
      dispatch(fetchDetailGroupRequest(groupDetailRequestState, id))
    }
  }, [editGroupSuccessfulState, kickGroupSuccessfulState])

  return (
    <Stack margin={5}>
      <Grid container>
        <Grid item xs={12} marginBottom={2}>
          <TaskbarDetailGroup
            name={groupDetailState.title}
            code={groupDetailState.joinCode}
            isOwner={groupDetailState.isOwner}
          />
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
            <Tasklist groupId={+groupId} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Member
              requesting={groupMemberRequestingState}
              member={groupMemberState}
              isOwner={groupDetailState.isOwner}
            />
          </TabPanel>
        </Grid>
      </Grid>
    </Stack>
  )
}
