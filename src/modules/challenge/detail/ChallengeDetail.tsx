import { CircularProgress, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import Banner from '../../../components/challenge/detail/Banner'
import TableChallenge from '../../../components/challenge/general/TableChallenge/TableChallenge'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'
import { viewDetailChallengeRequest } from './action'

/**
 * Challenge Detail
 *
 * Version 1.0
 *
 * Date: 27-07-2022
 *
 * Copyright By DuyHV
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 27-07-2022       DuyHV           Create
 */
interface RouteParams {
  challengeId: string
}

export default function ChallengeDetail() {
  const params = useParams<RouteParams>()
  const challengeId: number = +params.challengeId
  const dispatch = useDispatch<AppDispatch>()
  const challengeDetailState = useSelector((state: RootState) => state.detailChallenge)
  const { requesting, detail, assignmentList, submits } = challengeDetailState

  useEffect(() => {
    dispatch(viewDetailChallengeRequest({ id: challengeId }))
  }, [])

  return (
    <Stack>
      <InsideNavBar namePage='Challenge Detail' />
      <Banner requesting={requesting} detail={detail} />
      <Stack direction='row' justifyContent='center' alignItems='center' margin={5}>
        {requesting ? (
          <Stack marginTop={5} alignItems='center'>
            <CircularProgress color='success' />
          </Stack>
        ) : (
          <TableChallenge
            limitSubmission={detail.limitSubmission}
            assignmentList={assignmentList}
            submits={submits}
          />
        )}
      </Stack>
    </Stack>
  )
}
