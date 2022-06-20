import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from '../redux/configureStore'
import Loader from '../components/Loader/Loader'

const { store, persistor } = configureStore()
const RouterContainer = lazy(() => import('./RouterContainer'))

const ReduxContainer = () => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <Suspense fallback={<Loader />}>
        <RouterContainer />
      </Suspense>
    </PersistGate>
  </Provider>
)

export default ReduxContainer

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
