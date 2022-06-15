import { ConnectedRouter } from 'connected-react-router'
import React, { Suspense } from 'react'
import { Router } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import history from '../routing/history'
import AppContainer from './AppContainer'

const RouterContainer = () => (
  <ConnectedRouter history={history}>
    <Router history={history}>
      <Suspense fallback={<Loader />}>
        <AppContainer />
      </Suspense>
    </Router>
  </ConnectedRouter>
)

export default RouterContainer
