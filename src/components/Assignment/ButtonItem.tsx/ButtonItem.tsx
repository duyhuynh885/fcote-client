import React from "react";
import { Button, Typography } from "@mui/material";
import ButtonItemStyle from "./style";

export default function ButtonItem() {
  // const style = {
  //   width: "200px",
  //   height: "30px",
  // };

  const classes = ButtonItemStyle();
  return (
    <Button style={{ width: "" }} variant="outlined" className={classes.btn}>
      <Typography className={classes.textBtn}>View Assignment</Typography>
    </Button>
  );
}
