import React from 'react'
import Loader from '../components/common/loader/Loader'
import RoutesContainer from './RoutesContainer'
import Navbar from '../components/common/navigation/NavBar'
import { makeStyles } from '@mui/styles'
import { Stack, Theme } from '@mui/material'
import Vector1 from '../assets/Vector1.png'
import Vector from '../assets/Vector.png'
import { matchPath, useLocation } from 'react-router-dom'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import { RootState } from './ReduxContainer'

/**
 * App Container
 *
 * Version 1.0
 *
 * Date: 01-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 01-06-2022         DuyHV           Create
 * 06-07-2022         DuyHV           hideNavbarPath
 */

const useStyles = makeStyles((theme: Theme) => ({
  appLayout: {
    backgroundColor: `${theme.color.blueLight} !important`,
    backgroundImage: `url(${Vector}), url(${Vector1}) `,
    backgroundPosition: 'left top, right bottom',
    backgroundSize: '35%',
    backgroundRepeat: 'no-repeat',
  },
}))

const hideNavbarPath = [
  '/assignment/create',
  '/forbidden',
  '/not-found',
  '/server-error',
  '/challenge/create',
]

function AppContainer() {
  const classes = useStyles()
  const loading = useSelector((state: RootState) => state.loader.loading)
  const location = useLocation()

  const matchWithAssignmentId = matchPath(location.pathname, {
    path: '/assignment/:assignmentId',
    exact: true,
    strict: false,
  })

  const matchWithChallengeId = matchPath(location.pathname, {
    path: '/challenge/:challengeId',
    exact: true,
    strict: false,
  })

  return (
    <React.Fragment>
      <Loader loading={loading} />
      <Stack
        className={classes.appLayout}
        sx={{
          minHeight: '100vh',
          zIndex: '-1',
          minWidth: '1200px',
        }}
      >
        {_.includes(hideNavbarPath, location.pathname) ||
        matchWithAssignmentId ||
        matchWithChallengeId ? null : (
          <Navbar />
        )}
        <RoutesContainer />
      </Stack>
    </React.Fragment>
  )
}

export default AppContainer
