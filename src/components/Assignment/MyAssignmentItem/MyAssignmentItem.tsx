import { Button, Paper, Typography } from "@mui/material";
import React from "react";

import MyAssignmentItemStyle from "./style";

export default function MyAssignmentItem() {
  const classes = MyAssignmentItemStyle();
  return (
    <div>
      <Paper square className={classes.paperWrap} elevation={0}>
        <Typography className={classes.name}>
          Code.Cpp September 2022
        </Typography>
        <Typography className={classes.level}>HARD</Typography>
        <Button variant="outlined" className={classes.btn}>
          <Typography className={classes.textBtn}>View Assignment</Typography>
        </Button>
      </Paper>
    </div>
  );
}
