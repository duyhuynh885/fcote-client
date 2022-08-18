import { Stack } from '@mui/material'
import React from 'react'
import NoResultImage from '../../../assets/NoResult.png'

interface NoResultProps {
  currentSize: number
}
export default function NoResult(props: NoResultProps) {
  const { currentSize } = props
  const handleShowNoResult = () => {
    console.log(currentSize)
    if (currentSize === 0) {
      return (
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='center'
          sx={{ height: '100% !important', width: '100% !important' }}
        >
          <img
            style={{ height: '150px', width: 'auto', marginTop: 150 }}
            src={NoResultImage}
            alt='No Result'
          ></img>
        </Stack>
      )
    } else return null
  }
  return <React.Fragment>{handleShowNoResult()}</React.Fragment>
}
