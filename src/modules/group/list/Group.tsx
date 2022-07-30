import { CircularProgress, Grid, Pagination, PaginationItem, Paper, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import GroupCard from '../../../components/group/list/GroupCard'
import TaskbarGroup from '../../../components/group/general/TaskbarGroup/TaskbarGroup'
import useStyle from './style'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import { clearStateViewListGroup, fetchListGroupRequest } from './action'
import { clearStateViewDetail } from '../detail/action'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

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
  const groupsRequestingState = useSelector((state: RootState) => state.listGroup.requesting)
  const createGroupSuccessfulState = useSelector((state: RootState) => state.createGroup.successful)
  const joinGroupSuccessfulState = useSelector((state: RootState) => state.joinGroup.successful)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const PER_PAGE = 16
  const count = Math.ceil(16 / PER_PAGE)

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

  /**
   * clear state
   */
  useEffect(() => {
    return () => {
      dispatch(clearStateViewListGroup())
    }
  }, [])

  /**
   * handle update filter by pageNumber
   * @param _event
   * @param value
   */
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <Stack margin={5}>
      <Stack marginBottom={5}>
        <TaskbarGroup
          queryParamValue={query}
          onQueryParamChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        />
      </Stack>
      <Stack alignItems='center' sx={{ minHeight: '70vh', width: '100%' }}>
        {groupsRequestingState ? (
          <Stack alignItems='center'>
            <CircularProgress color='success' />
          </Stack>
        ) : (
          <Grid container rowSpacing={4} columnSpacing={4} sx={{ width: '80%' }}>
            {groupsState.map((group) => {
              if (query == '' || group.title.toLowerCase().includes(query.toLowerCase())) {
                return (
                  <Grid xs={4} item key={group.id}>
                    <GroupCard group={group} />
                  </Grid>
                )
              }
              return null
            })}
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
