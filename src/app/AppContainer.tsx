import React from 'react'
import Loader from '../components/Loader/Loader'
import RoutesContainer from './RoutesContainer'
import Navbar from '../components/NavBar/NavBar'
import { makeStyles } from '@mui/styles'
import { Stack } from '@mui/material'
import Vector1 from '../asset/Vector1.png'
import Vector from './../asset/Vector.png'
import { useAppSelector } from '../hooks/hooks'
import { useLocation } from 'react-router-dom'
import _ from 'lodash'

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

const useStyles = makeStyles((theme: any) => ({
  appLayout: {
    backgroundColor: `${theme.color.blueLight} !important`,
    backgroundImage: `url(${Vector}), url(${Vector1}) `,
    backgroundPosition: 'left top, right bottom',
    backgroundSize: '35%',
    backgroundRepeat: 'no-repeat',
  },
}))

const hideNavbarPath = ['/assignment/create', '/forbidden', '/not-found', '/server-error']

function AppContainer() {
  const classes = useStyles()
  const loading = useAppSelector((state) => state.loader.loading)
  const location = useLocation()
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
        {_.includes(hideNavbarPath, location.pathname) ? null : <Navbar />}
        <RoutesContainer />
      </Stack>
    </React.Fragment>
  )
}

export default AppContainer
