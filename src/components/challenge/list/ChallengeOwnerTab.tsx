import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { CircularProgress, Pagination, PaginationItem, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../apps/ReduxContainer'
import {
  clearStateViewListChallenge,
  fetchListChallengeRequest,
  updateFilterListChallengesRequest,
} from '../../../modules/challenge/list/action'
import { ViewListChallengeRequestPayload } from '../../../modules/challenge/list/type'
import ChallengeCard from '../general/ChallengeCard/ChallengeCard'
import useStyles from './style'
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
}
const ChallengePublicOwner: React.FC<ChallengePublicOwnerProps> = (props) => {
  const classes = useStyles()
  const { typeData } = props
  const dispatch = useDispatch()
  const listChallengeState = useSelector((state: RootState) => state.listChallenges)
  const { filterRequest, totalChallenge, requesting, challenges } = listChallengeState
  const [page, setPage] = useState(1)
  const PER_PAGE = 4
  const count = Math.ceil(totalChallenge / PER_PAGE)

  /**
   * clear state
   */
  useEffect(() => {
    return () => {
      dispatch(clearStateViewListChallenge())
    }
  }, [])

  const customChallengeRequest: ViewListChallengeRequestPayload = {
    typeData: typeData,
    pageSize: 4,
    pageNumber: 1,
  }

  useEffect(() => {
    dispatch(fetchListChallengeRequest(customChallengeRequest, undefined, undefined, undefined))
  }, [typeData])

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    dispatch(
      updateFilterListChallengesRequest({
        ...filterRequest,
        pageNumber: value,
        pageSize: 4,
        typeData: typeData,
      }),
    )
  }

  return (
    <Stack>
      <Stack className={classes.scrollBar} spacing={2} marginBottom={5}>
        {requesting ? (
          <Stack marginTop={5} alignItems='center'>
            <CircularProgress color='success' />
          </Stack>
        ) : (
          challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.challengeId}
              challenge={challenge}
              url={`/challenge/${challenge.challengeId}`}
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
export default ChallengePublicOwner
