import React, { lazy, Suspense } from 'react'
import '../configs/i18n/index'
import Loader from '../components/common/loader/Loader'
import './App.css'
/**
 * App Component
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

const ReduxContainer = lazy(() => import('./ReduxContainer'))

function App() {
  return (
    <Suspense fallback={<Loader loading={false} />}>
      <ReduxContainer />
    </Suspense>
  )
}

export default App
