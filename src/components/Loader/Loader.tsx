import React from 'react'
import './loader.css'
import { bool, InferProps } from 'prop-types'

function Loader({ transparent }: InferProps<typeof Loader.propTypes>) {
  return (
    <div className={`loader-container ${transparent ? 'transparent' : ''}`}>
      <h2 className='logo'>
        <div className='loader' />
      </h2>
    </div>
  )
}

Loader.propTypes = {
  transparent: bool,
}

Loader.defaultProps = {
  transparent: false,
}

export default Loader
