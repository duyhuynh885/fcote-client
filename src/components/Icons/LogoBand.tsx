import { Box, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as Star } from '../../asset/Star.svg'

export default function LogoBand() {
  return (
    <Box display='flex' flexDirection='row' alignItems='stretch' padding={1}>
      <Box display='flex' flexDirection='column' alignSelf='center' marginRight='5px'>
        <Star />
      </Box>
      <Typography variant='h1' noWrap>
        CoteEdu
      </Typography>
    </Box>
  )
}
