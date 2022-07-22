import { Grid, Pagination, PaginationItem, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TaskbarFilter from '../../../components/common/toolbar/TaskbarFilter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListAssignmentRequest, updateFilterListAssignmentRequest, viewListAssignmentClearStateRequest } from './action'
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
  const assignmentsState = useSelector((state: RootState) => state.listAssignment.assignments)
  const currentSizeState = useSelector((state: RootState) => state.listAssignment.currentSize)
  const filterAssignmentState = useSelector(
    (state: RootState) => state.listAssignment.filterRequest,
  )
  const [page, setPage] = useState(1)
  const PER_PAGE = 16
  const count = Math.ceil(currentSizeState / PER_PAGE)

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    dispatch(updateFilterListAssignmentRequest({ ...filterAssignmentState, pageNumber: value }))
  }

  useEffect(() => {
    dispatch(fetchListAssignmentRequest(filterAssignmentState))
  }, [filterAssignmentState])

  useEffect(() => {
    return () => {
      dispatch(viewListAssignmentClearStateRequest())
    }
  }, [])

  return (
    <Stack sx={{ margin: 5 }} direction='column'>
      <Stack marginBottom={5}>
        <TaskbarFilter url='/assignment/create' />
      </Stack>
      <Stack direction='column' alignItems='center' spacing={3}>
        <Grid
          sx={{
            width: '100%',
            minHeight: '70vh',
            margin: '0 auto',
          }}
          container
        >
          {assignmentsState.map((assignment) => (
            <Grid
              key={assignment.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                marginBottom: 2,
              }}
              item
              xs={4}
              lg={2.3}
            >
              <AssignmentItem assignment={assignment} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          page={page}
          onChange={handleChange}
          count={count}
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
  )
}
