import { CircularProgress, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useRouteMatch } from 'react-router-dom'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import TableChallenge from '../../../components/challenge/general/TableChallenge/TableChallenge'
import InsideNavBar from '../../../components/common/navigation/InsideNavBar'
import { viewDetailChallengeRequest } from './action'
import useStyles from './style'

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
  const classes = useStyles()
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
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={{
          width: '90%',
          height: '30vh',
          margin: '0 auto',
          marginTop: '30px',
          backgroundColor: '#ffff',
        }}
      >
        <img
          className={classes.challengeCardBanner}
          src='https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000'
        />
        <Stack
          direction='column'
          justifyContent='space-between'
          alignItems='center'
          sx={{ height: '100%', width: '100%' }}
        >
          <Typography>{detail.title}</Typography>
          <Stack
            sx={{ height: '25%', width: '100%', borderTop: '1px solid lightGray' }}
            direction='row'
          >
            <Typography>{detail.title}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction='row' justifyContent='center' alignItems='center' margin={5}>
        {requesting ? (
          <Stack marginTop={5} alignItems='center'>
            <CircularProgress color='success' />
          </Stack>
        ) : (
          <TableChallenge assignmentList={assignmentList} submits={submits} />
        )}
      </Stack>
    </Stack>
  )
}
