import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import sagas from './sagas'
import history from '../routing/history'

/**
 * Configures the store
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
 * 22-06-2022         DuyHV           Create
 */

/**
 * Configures the redux persist
 */
const persistConfig = {
  key: `${process.env.REACT_APP_NAME}_persist_store`,
  storage,
  whitelist: ['auth'],
}
const pReducer = persistReducer(persistConfig, rootReducer(history))

/**
 * Export redux store and redux persistStore
 */
export default () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: pReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(sagaMiddleware)
        .concat(routerMiddleware(history)),
  })

  const persistor = persistStore(store)

  sagaMiddleware.run(sagas)
  return { persistor, store }
}
