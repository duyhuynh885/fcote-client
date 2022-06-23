import { Box, Grid, Pagination, PaginationItem, Stack } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import React from 'react'
import AssignmentItem from './AssignmentItem'

/**
 * Assignment Tab
 * <p>
 * Version 1.0
 * <p>
 * Date: 03-06-2022
 * <p>
 * Copyright By DuyHV
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 24-06-2022      DuyHV           Create
 */
export default function AssignmentTab() {
  return (
    <Stack
      direction='column'
      sx={{
        width: '100%',
      }}
    >
      <Box sx={{ minHeight: 900, maxHeight: 1000 }}>
        <Grid container spacing={4}>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
          <Grid item xs={4} lg={3}>
            <AssignmentItem />
          </Grid>
        </Grid>
      </Box>
      <Stack spacing={2} direction='row' justifyContent='center' alignItems='center'>
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
    </Stack>
  )
}
