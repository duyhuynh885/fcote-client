import { Box, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as Star } from '../../../assets/Star.svg'

/**
 * Logo Band Component
 *
 * Version 1.0
 *
 * Date: 15-06-2022
 *
 * Copyright
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 15-06-2022         DuyHV           Create
 */
export default function LogoBand() {
  return (
    <Box display='flex' flexDirection='row' alignItems='stretch' padding={1}>
      <Box display='flex' flexDirection='column' alignSelf='center' marginRight='5px'>
        <Star />
      </Box>
      <Typography variant='h1' noWrap>
        FCoteEdu
      </Typography>
    </Box>
  )
}
