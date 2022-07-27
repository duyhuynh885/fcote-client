import React, { lazy, Suspense } from 'react'
import '../configs/i18n/index'
import Loader from '../components/common/loader/Loader'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers'

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
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ReduxContainer />
      </LocalizationProvider>
    </Suspense>
  )
}

export default App
