import React, { lazy, Suspense } from 'react'
import '../i18n/index'
import Loader from '../components/Loader/Loader'

const ReduxContainer = lazy(() => import('./ReduxContainer'))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ReduxContainer />
    </Suspense>
  )
}

export default App
