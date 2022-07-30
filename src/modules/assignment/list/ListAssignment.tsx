import { CircularProgress, Grid, Pagination, PaginationItem, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TaskbarFilter, {
  TypeFilterTaskBarEnum,
} from '../../../components/common/toolbar/TaskbarFilter'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchListAssignmentRequest,
  updateFilterListAssignmentRequest,
  viewListAssignmentClearStateRequest,
} from './action'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import AssignmentItem from '../../../components/assignment/list/AssignmentItem'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

/**
 * List Assignment
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
  const assignmentsState = useSelector((state: RootState) => state.listAssignment)
  const { requesting, currentSize, assignments, filterRequest } = assignmentsState

  const [page, setPage] = useState(1)
  const PER_PAGE = 16
  const count = Math.ceil(currentSize / PER_PAGE)

  /**
   * handle update filter by pageNumber
   * @param _event
   * @param value
   */
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    dispatch(updateFilterListAssignmentRequest({ ...filterRequest, pageNumber: value }))
  }

  /**
   * Follow filterAssignmentState to fetch list assignment
   */
  useEffect(() => {
    dispatch(fetchListAssignmentRequest(filterRequest))
  }, [filterRequest])

  /**
   * clear state
   */
  useEffect(() => {
    return () => {
      dispatch(viewListAssignmentClearStateRequest())
    }
  }, [])

  return (
    <Stack sx={{ margin: 5 }} direction='column'>
      <Stack marginBottom={5}>
        <TaskbarFilter url='/assignment/create' type={TypeFilterTaskBarEnum.LIST_ASSIGNMENT} />
      </Stack>
      <Stack alignItems='center' sx={{ minHeight: '70vh', width: '100%' }}>
        {requesting ? (
          <Stack alignItems='center'>
            <CircularProgress color='success' />
          </Stack>
        ) : (
          <Grid container rowSpacing={4} columnSpacing={4} sx={{ width: '80%' }}>
            {assignments.map((assignment) => (
              <Grid key={assignment.id} item xs={3}>
                <AssignmentItem assignment={assignment} />
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
      <Stack alignItems='center'>
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
