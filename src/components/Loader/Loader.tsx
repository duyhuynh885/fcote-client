import React from 'react'
import './loader.css'
import { CircularProgress } from '@mui/material'

function Loader() {
  return (
    <div className={'spinner-container transparent'}>
      <CircularProgress color='success' />
    </div>
  )
}

export default Loader
