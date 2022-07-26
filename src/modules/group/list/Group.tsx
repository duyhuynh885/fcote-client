import { Grid, Paper, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import GroupCard from '../../../components/group/list/GroupCard'
import TaskbarGroup from '../../../components/group/general/TaskbarGroup/TaskbarGroup'
import useStyle from './style'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { fetchListGroupRequest } from './action'
import { clearStateViewDetail } from '../detail/action'
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
  const createGroupSuccessfulState = useSelector((state: RootState) => state.createGroup.successful)
  const joinGroupSuccessfulState = useSelector((state: RootState) => state.joinGroup.successful)
  const [query, setQuery] = useState('')

  useEffect(() => {
    dispatch(fetchListGroupRequest(groupTypeRequestState))
    dispatch(clearStateViewDetail())
  }, [groupTypeRequestState])

  useEffect(() => {
    if (createGroupSuccessfulState) {
      dispatch(fetchListGroupRequest(groupTypeRequestState))
    }
    if (joinGroupSuccessfulState) {
      dispatch(fetchListGroupRequest(groupTypeRequestState))
    }
  }, [createGroupSuccessfulState, joinGroupSuccessfulState])
  return (
    <Stack margin={5}>
      <Stack marginBottom={5}>
        <TaskbarGroup
          queryParamValue={query}
          onQueryParamChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        />
      </Stack>

      <Paper elevation={8} className={classes.scrollBar}>
        <Grid container rowSpacing={4} columnSpacing={17} padding={3}>
          {groupsState.map((group) => {
            if (query == '' || group.title.toLowerCase().includes(query.toLowerCase())) {
              return (
                <Grid xs={6} item key={group.id}>
                  <GroupCard group={group} />
                </Grid>
              )
            }
            return null
          })}
        </Grid>
      </Paper>
    </Stack>
  )
}
