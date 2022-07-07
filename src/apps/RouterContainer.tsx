import { ConnectedRouter } from 'connected-react-router'
import React, { Suspense } from 'react'
import { Router } from 'react-router-dom'
import Loader from '../components/common/loader/Loader'
import history from '../configs/routing/history'
import AppContainer from './AppContainer'

/**
 * Router Container
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

const RouterContainer = () => (
  <ConnectedRouter history={history}>
    <Router history={history}>
      <Suspense fallback={<Loader loading={false} />}>
        <AppContainer />
      </Suspense>
    </Router>
  </ConnectedRouter>
)

export default RouterContainer
