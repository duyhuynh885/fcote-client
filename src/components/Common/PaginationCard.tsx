import { Pagination, PaginationItem, Stack } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

/**
 * Pagination Component
 *
 * Version 1.0
 *
 * Date: 29-06-2022
 *
 * Copyright By HuyNT2711
 *
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 29-06-2022      HuyNT2711           Create
 */

export default function PaginationCard() {
  return (
    <Stack
      spacing={2}
      width='100%'
      display='flex'
      direction='row'
      justifyContent='center'
      alignItems='center'
      marginTop={2}
    >
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            components={{
              previous: ArrowBackIcon,
              next: ArrowForwardIcon,
            }}
            {...item}
          />
        )}
      />
    </Stack>
  )
}
