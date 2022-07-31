import { Grid, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import AssignmentCompleted from '../../../components/my-profile/view/AssignmentCompleted'
import ChallengeCompleted from '../../../components/my-profile/view/ChallengeCompleted'
import Profile from '../../../components/my-profile/view/Profile'
import {
  fetchChallengeCompletedRequest,
  fetchUserAssignmentRequest,
  viewDetailProfileClearStateRequest,
} from './action'

/**
 * My Profile Pages
 *
 * Version 1.0
 *
 * Date: 22-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 22-06-2022         DuyHV           Create ui
 * 22-07-2022         HuyNT2711       Create logic
 */

export default function MyProfile() {
  const dispatch = useDispatch<AppDispatch>()
  const myProfileState = useSelector((state: RootState) => state.myProfile)

  useEffect(() => {
    dispatch(fetchUserAssignmentRequest(myProfileState.userAssignmentRequest))
  }, [myProfileState.userAssignmentRequest])

  useEffect(() => {
    dispatch(fetchChallengeCompletedRequest(myProfileState.challengeCompletedRequest))
  }, [myProfileState.challengeCompletedRequest])

  /**
   * clear state
   */
  useEffect(() => {
    return () => {
      dispatch(viewDetailProfileClearStateRequest())
    }
  }, [])

  return (
    <Stack sx={{ margin: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Profile user={myProfileState.user}></Profile>
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <ChallengeCompleted
              listChallengeCompleted={myProfileState.challengeCompleted.listChallengeCompleted}
            />
            <AssignmentCompleted assCompleted={myProfileState.assignmentCompleted} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
