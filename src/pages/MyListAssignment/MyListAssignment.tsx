import React from "react";
import { Grid } from "@mui/material";
import AssignmentItem from "../../components/Assignment/AssignmentItem/AssignmentItem";
// import ButtonBack from "../../components/Button/ButtonBack/ButtonBack";
import MyListAssignmentStyle from "./style";

export default function MyListAssignment() {
  const classes = MyListAssignmentStyle();
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
      </Grid>
    </div>
  );
}
