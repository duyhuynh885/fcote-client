import { Box, Stack } from '@mui/material'
import React from 'react'
import { ReactComponent as NoResultIcon } from '../../../assets/NoResult.svg'

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
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{ height: '100% !important', width: '100% !important' }}
        >
          <NoResultIcon></NoResultIcon>
        </Stack>
      )
    } else return null
  }
  return <React.Fragment>{handleShowNoResult()}</React.Fragment>
}
