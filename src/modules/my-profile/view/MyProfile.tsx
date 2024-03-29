import { Grid, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../apps/ReduxContainer'
import AssignmentCompleted from '../../../components/my-profile/view/AssignmentCompleted'
import ChallengeCompleted from '../../../components/my-profile/view/ChallengeCompleted'
import Profile from '../../../components/my-profile/view/Profile'
import { clearStateViewListChallenge } from '../../challenge/list/action'
import { myProfileClearState } from '../edit/action'
import { viewDetailProfileRequest } from './action'
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
  const userInfo = useSelector((state: RootState) => state.login.userInfo)
  const challengeState = useSelector((state: RootState) => state.listChallenges)
  const { challenges } = challengeState

  useEffect(() => {
    dispatch(
      viewDetailProfileRequest({
        typeData: 4,
        username: userInfo.username,
      }),
    )
  }, [])

  /**
   * clear state
   */
  useEffect(() => {
    return () => {
      // dispatch(viewDetailProfileClearStateRequest())
      dispatch(clearStateViewListChallenge())
      dispatch(myProfileClearState())
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
            <ChallengeCompleted listChallengeCompleted={challenges} />
            <AssignmentCompleted assCompleted={myProfileState.assignmentCompleted} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
