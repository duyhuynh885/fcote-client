import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from '../configs/redux/configureStore'
import Loader from '../components/common/loader/Loader'

/**
 * Redux Container
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

const { store, persistor } = configureStore()
const RouterContainer = lazy(() => import('./RouterContainer'))

const ReduxContainer = () => (
  <Provider store={store}>
    <PersistGate loading={<Loader loading={false} />} persistor={persistor}>
      <Suspense fallback={<Loader loading={false} />}>
        <RouterContainer />
      </Suspense>
    </PersistGate>
  </Provider>
)

export default ReduxContainer

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
