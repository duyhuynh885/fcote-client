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

const useStyles = makeStyles((theme: any) => ({
  appLayout: {
    backgroundColor: `${theme.color.blueLight} !important`,
    backgroundImage: `url(${DataAnalyse}), url(${Vector}), url(${Vector1}) `,
    backgroundPosition: 'left 140px top 100px, left top, right bottom',
    backgroundSize: '35%',
    backgroundRepeat: 'no-repeat',
  },
}))

function AppContainer({ loading }: InferProps<typeof AppContainer.propTypes>) {
  const classes = useStyles()

  return (
    <React.Fragment>
      {loading && <Loader transparent />}
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

AppContainer.propTypes = {
  loading: bool,
}

export default AppContainer
