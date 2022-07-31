import { CircularProgress, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import useStyles from './style'
import PaginationCard from '../../common/pagination/PaginationCard'
import { IChallenge } from '../../../modules/challenge/list/type'
import ChallengeCard from '../general/ChallengeCard/ChallengeCard'
import { useDispatch, useSelector } from 'react-redux'
import { clearStateViewListChallenge } from '../../../modules/challenge/list/action'
import { RootState } from '../../../apps/ReduxContainer'
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
  listChallenges: IChallenge[]
  page?: number
  handleChangePage?: (_event: React.ChangeEvent<unknown>, value: number) => void
  count?: number
}
const ChallengePublicOwner: React.FC<ChallengePublicOwnerProps> = (props) => {
  const listChallenges = props.listChallenges
  const page = props.page
  const handleChangePage = props.handleChangePage
  const count = props.count
  const classes = useStyles()
  const dispatch = useDispatch()
  const listChallengeRequesting = useSelector((state: RootState) => state.listChallenges.requesting)
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
      <Stack className={classes.scrollBar} spacing={2} marginBottom={5}>
        {listChallengeRequesting ? (
          <Stack marginTop={5} alignItems='center'>
            <CircularProgress color='success' />
          </Stack>
        ) : (
          listChallenges.map((challenge) => (
            <ChallengeCard
              key={challenge.challengeId}
              challenge={challenge}
              url={`/challenge/${challenge.challengeId}`}
            />
          ))
        )}
      </Stack>
      <PaginationCard page={page} handleChangePage={handleChangePage} count={count} />
    </Stack>
  )
}
export default ChallengePublicOwner
