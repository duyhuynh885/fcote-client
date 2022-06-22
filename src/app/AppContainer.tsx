import React from 'react'
import Loader from '../components/Loader/Loader'
import RoutesContainer from './RoutesContainer'
import Navbar from '../components/NavBar/NavBar'
import { makeStyles } from '@mui/styles'
import { Stack } from '@mui/material'
import Vector1 from '../asset/Vector1.png'
import Vector from './../asset/Vector.png'
import { useAppSelector } from '../hooks/hooks'

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

function AppContainer() {
  const classes = useStyles()
  const loading = useAppSelector((state) => state.loader.loading)

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
        <Navbar />
        <RoutesContainer />
      </Stack>
    </React.Fragment>
  )
}

export default AppContainer
