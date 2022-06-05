import { Grid, Paper } from "@mui/material";
import React from "react";
import AssignmentItem from "../../components/Assignment/AssignmentItem/AssignmentItem";
import ListAssignmentStyle from "./style";
export default function ListAssignment() {
  const classes = ListAssignmentStyle();
  return (
    <div className="row">
      <Grid
        className={classes.left}
        container
        // rowSpacing={{ xs: 6, sm: 1, md: 1, lg: 2 }}
        columnSpacing={{ xs: 6, sm: 1, md: 1, lg: 2 }}
      >
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={4}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={4}>
          <AssignmentItem />
        </Grid>
        <Grid className={classes.itemGrid} item xs={12} sm={6} md={4} lg={4}>
          <AssignmentItem />
        </Grid>
      </Grid>
      <Paper elevation={3} square className={classes.right}></Paper>
    </div>
  );
}
