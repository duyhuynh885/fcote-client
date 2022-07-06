import { Grid, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import TaskbarFilter from '../../components/Assignment/TaskbarFilter/TaskbarFilter'
import AssignmentTab from '../../components/Assignment/AssignmentTab/AssignmentTab'
import MyAssignmentTab from '../../components/Assignment/MyAssignmentTab/MyAssignmentTab'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListAssignmentRequest } from '../../redux/modules/assignment/list/action'
import { AppDispatch, RootState } from '../../app/ReduxContainer'

/**
 * Client
 * <p>
 * Version 1.0
 * <p>
 * Date: 07-06-20212
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 07-06-20212      HuyNT2711           Create
 *
 */

export default function ListAssignment() {
  const dispatch = useDispatch<AppDispatch>()
  const listAssignmentState = useSelector((state: RootState) => state.listAssignment)

  useEffect(() => {
    dispatch(fetchListAssignmentRequest(listAssignmentState.filterRequest))
  }, [listAssignmentState.filterRequest])

  return (
    <Stack sx={{ margin: 5 }} direction='column'>
      <Stack marginBottom={5}>
        <TaskbarFilter />
      </Stack>
      <Grid container spacing={5}>
        <Grid item xs={7} md={7} lg={8}>
          <AssignmentTab assignments={assignments} />
        </Grid>
        <Grid item xs={5} md={5} lg={4}>
          <MyAssignmentTab />
        </Grid>
      </Grid>
    </Stack>
  )
}
