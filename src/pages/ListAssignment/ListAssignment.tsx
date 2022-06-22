import { Box, Grid, Pagination, PaginationItem, Paper, Stack, Typography } from '@mui/material'

import React from 'react'
import AssignmentItem from '../../components/Assignment/AssignmentItem/AssignmentItem'
import ListAssignmentStyle from './style'
import MyAssignmentItem from '../../components/Assignment/MyAssignmentItem/MyAssignmentItem'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import TaskbarFilter from '../../components/Assignment/TaskbarFilter/TaskbarFilter'

/**
 * Client
 * <p>
 * Version 1.0
 * <p>
 * Date: 22-6-2022
 * <p>
 * Copyright By HuyNT2711
 * <p>
 * Modification Logs:
 * DATE             AUTHOR              DESCRIPTION
 * ------------------------------------------------
 * 07-06-2021       HuyNT2711           Create
 *
 */

export default function ListAssignment() {
  const classes = ListAssignmentStyle()
  return (
    <div className={classes.wrapAll}>
      <Box sx={{ mt: '20px' }}>
        <TaskbarFilter />
      </Box>

      <Box>
        <Grid
          className={classes.left}
          container
          // rowSpacing={{ xs: 6, sm: 1, md: 1, lg: 2 }}
          columnSpacing={{ xs: 6, sm: 1, md: 1, lg: 2 }}
        >
          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>
          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>
          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>

          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>
          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>
          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>

          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>
          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>
          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>

          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>
          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>
          <Grid className={classes.leftItem} item xs={12} sm={6} md={4} lg={4}>
            <AssignmentItem />
          </Grid>
          <Stack
            style={{
              marginLeft: '200px',
              marginTop: '20px',
              marginBottom: '20px',
            }}
            spacing={2}
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
        </Grid>

        <Paper elevation={3} square className={classes.right}>
          <Typography className={classes.textTitle}>My Assignment</Typography>
          <Grid className={classes.rightItem}>
            <MyAssignmentItem />
          </Grid>
          <Grid className={classes.rightItem}>
            <MyAssignmentItem />
          </Grid>
          <Grid className={classes.rightItem}>
            <MyAssignmentItem />
          </Grid>
          <Grid className={classes.rightItem}>
            <MyAssignmentItem />
          </Grid>
          <Grid className={classes.rightItem}>
            <MyAssignmentItem />
          </Grid>
          <Grid className={classes.rightItem}>
            <MyAssignmentItem />
          </Grid>
          <Grid className={classes.rightItem}>
            <MyAssignmentItem />
          </Grid>
          <Grid className={classes.rightItem}>
            <MyAssignmentItem />
          </Grid>
          <Grid className={classes.rightItem}>
            <MyAssignmentItem />
          </Grid>
        </Paper>
      </Box>
    </div>
  )
}
