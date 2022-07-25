import { Pagination, PaginationItem, Stack } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { count } from 'console'

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
interface PaginationCardProps {
  page?: number
  handleChangePage?: (_event: React.ChangeEvent<unknown>, value: number) => void
  count?: number
}
const PaginationCard: React.FC<PaginationCardProps> = (props) => {
  const page = props.page
  const handleChangePage = props.handleChangePage
  console.log('=========== handleChangePage', handleChangePage)
  const count = props.count
  return (
    <Pagination
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
      page={page}
      onChange={handleChangePage}
      count={count}
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
  )
}
export default PaginationCard
