import React from 'react'
import Loader from '../components/Loader/Loader'
import RoutesContainer from './RoutesContainer'
import { bool, InferProps } from 'prop-types'
import Navbar from '../components/NavBar/NavBar'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import Vector1 from '../asset/Vector1.png'
import Vector from './../asset/Vector.png'
import DataAnalyse from '../asset/DataAnalyse.png'
import { useAppSelector } from '../hooks/hooks'

const useStyles = makeStyles((theme: any) => ({
  appLayout: {
    backgroundColor: `${theme.color.blueLight} !important`,
    backgroundImage: `url(${DataAnalyse}), url(${Vector}), url(${Vector1}) `,
    backgroundPosition: 'left 140px top 100px, left top, right bottom',
    backgroundSize: '35%',
    backgroundRepeat: 'no-repeat',
  },
}))

function AppContainer() {
  const classes = useStyles()
  const loading = useAppSelector((state) => state.loader.loading)
  console.log(loading)
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Navbar />
      <Box
        className={classes.appLayout}
        sx={{
          height: '100vh',
          zIndex: '-1',
          minWidth: '1200px',
        }}
      >
        <RoutesContainer />
      </Box>
    </React.Fragment>
  )
}

export default AppContainer
