import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { CircularProgress, Container, Pagination, PaginationItem, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import {
  clearStateViewListChallenge,
  fetchListChallengeRequest,
  updateFilterListChallengesRequest,
} from '../../../modules/challenge/list/action'
import { ViewListChallengeRequestPayload } from '../../../modules/challenge/list/type'
import NoResult from '../../common/icon/NoResult'
import ChallengeCard from '../general/ChallengeCard/ChallengeCard'

/**
 * ChallengePublicOwner
 *
 * Version 1.0
 *
 * Date: 29-06-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 29-06-2022      HuyNT2711           Create
 */
interface ChallengePublicOwnerProps {
  typeData: number
  handleGetPageNumber: (valuePageNumber: number | undefined) => void
}
const ChallengePublicOwner: React.FC<ChallengePublicOwnerProps> = (props) => {
  const { typeData, handleGetPageNumber } = props
  const dispatch = useDispatch()
  const listChallengeState = useSelector((state: RootState) => state.listChallenges)
  const { filterRequest, totalChallenge, requesting, challenges } = listChallengeState
  const [page, setPage] = useState(1)
  const PER_PAGE = 4
  const count = Math.ceil(totalChallenge / PER_PAGE)

  const customChallengeRequest: ViewListChallengeRequestPayload = {
    typeData: typeData,
    pageNumber: 1,
    pageSize: 4,
  }

  useEffect(() => {
    dispatch(fetchListChallengeRequest(customChallengeRequest))
  }, [typeData])

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    handleGetPageNumber(value)
    dispatch(
      updateFilterListChallengesRequest({
        ...filterRequest,
        pageNumber: value,
        pageSize: 4,
        typeData: typeData,
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
      <Container fixed sx={{ minHeight: '70vh' }}>
        {requesting ? (
          <Stack marginTop={5} alignItems='center'>
            <CircularProgress color='success' />
          </Stack>
        ) : (
          <Stack marginBottom={2} spacing={2}>
            <NoResult currentSize={challenges.length} />
            {challenges.map((challenge) => (
              <ChallengeCard
                key={challenge.challengeId}
                challenge={challenge}
                url={`/challenge/${challenge.challengeId}`}
              />
            ))}
          </Stack>
        )}
      </Container>
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
export default ChallengePublicOwner
