import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { CircularProgress, Pagination, PaginationItem, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../apps/ReduxContainer'
import {
  clearStateViewListChallenge,
  fetchListChallengeRequest,
  updateFilterListChallengesRequest,
} from '../../../../modules/challenge/list/action'
import { ViewListChallengeRequestPayload } from '../../../../modules/challenge/list/type'
import ChallengeCard from '../../../challenge/general/ChallengeCard/ChallengeCard'

interface TasklistProps {
  groupId: number
}

export default function Tasklist(props: TasklistProps) {
  const { groupId } = props
  const dispatch = useDispatch<AppDispatch>()
  const challengeState = useSelector((state: RootState) => state.listChallenges)
  const { requesting, challenges, totalChallenge, filterRequest } = challengeState
  const groupChallengeRequest: ViewListChallengeRequestPayload = {
    typeData: 2,
    pageSize: 4,
    pageNumber: 1,
    groupID: groupId,
  }
  const PER_PAGE = 4
  const count = Math.ceil(totalChallenge / PER_PAGE)
  const [page, setPage] = React.useState(1)

  useEffect(() => {
    dispatch(fetchListChallengeRequest(groupChallengeRequest))
  }, [filterRequest])

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    dispatch(
      updateFilterListChallengesRequest({
        ...filterRequest,
        ...groupChallengeRequest,
        pageNumber: value,
      }),
    )
  }

  /**
   * clear state
   */
  useEffect(() => {
    return () => {
      dispatch(clearStateViewListChallenge())
    }
  }, [])

  return (
    <Stack>
      <Stack sx={{ minHeight: '70vh' }} spacing={2} marginBottom={5}>
        {requesting ? (
          <Stack marginTop={5} alignItems='center'>
            <CircularProgress color='success' />
          </Stack>
        ) : (
          challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.challengeId}
              url={`/challenge/${challenge.challengeId}`}
              challenge={challenge}
            />
          ))
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
