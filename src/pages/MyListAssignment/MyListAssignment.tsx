import React from 'react'
import { Grid, Pagination, PaginationItem, Stack } from '@mui/material'
import AssignmentItem from '../../components/Assignment/AssignmentItem/AssignmentItem'
// import ButtonBack from "../../components/Button/ButtonBack/ButtonBack";
import MyListAssignmentStyle from './style'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
export default function MyListAssignment() {
  const classes = MyListAssignmentStyle()
  return (
    <div className={classes.wrapAll}>
      <Grid
        className={classes.containerGrid}
        container
        // rowSpacing={{ xs: 6, sm: 1, md: 1, lg: 2 }}
        columnSpacing={{ xs: 6, sm: 1, md: 1, lg: 2 }}
      >
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={3}>
          <AssignmentItem />
        </Grid>
        <Stack
          style={{
            marginLeft: '34%',
            marginTop: '20px',
            marginBottom: '20px',
          }}
          spacing={2}
        >
          <Pagination
            count={10}
            renderItem={item => (
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
    </div>
  )
}
