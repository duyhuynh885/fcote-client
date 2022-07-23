import { Grid, Paper, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import TaskbarFilter from '../../../components/common/toolbar/TaskbarFilter'
import GroupCard from '../../../components/group/GroupCard'
import TaskbarGroup from '../../../components/group/TaskbarGroup/TaskbarGroup'
import useStyle from './style'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { fetchListGroupRequest } from './action'
/**
 *  Group page
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

export default function Group() {
  const classes = useStyle()
  const dispatch = useDispatch<AppDispatch>()
  const groupsState = useSelector((state: RootState) => state.listGroup.groups)
  const groupTypeRequestState = useSelector((state: RootState) => state.listGroup.groupTypeRequest)
  useEffect(() => {
    dispatch(fetchListGroupRequest(groupTypeRequestState))
  }, [groupTypeRequestState])
  return (
    <Stack margin={5}>
      <Stack marginBottom={5}>
        <TaskbarGroup />
      </Stack>

      <Paper elevation={8} className={classes.scrollBar}>
        <Grid container rowSpacing={4} columnSpacing={17} padding={3}>
          {groupsState.map((group) => (
            <Grid xs={6} item key={group.id}>
              <GroupCard group={group} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Stack>
  )
}
