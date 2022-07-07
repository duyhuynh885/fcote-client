import { Box, Grid, Pagination, PaginationItem, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import TaskbarFilter from '../../../components/common/toolbar/TaskbarFilter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListAssignmentRequest } from './action'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import AssignmentItem from '../../../components/assignment/list/AssignmentItem'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

/**
 * Client
 *
 * Version 1.0
 *
 * Date: 07-06-20212
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 07-06-20212      HuyNT2711           Create
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
        <TaskbarFilter url='/assignment/create' />
      </Stack>
      <Grid container spacing={5}>
        <Stack
          direction='column'
          sx={{
            width: '100%',
          }}
        >
          <Box sx={{ minHeight: 900, maxHeight: 1000 }}>
            <Grid container spacing={4}>
              {listAssignmentState.assignments.map((assignment) => (
                <Grid key={assignment.assignmentId} item xs={4} lg={3}>
                  <AssignmentItem assignment={assignment} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Stack spacing={2} direction='row' justifyContent='center' alignItems='center'>
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                />
              )}
            />
          </Stack>
        </Stack>
      </Grid>
    </Stack>
  )
}
