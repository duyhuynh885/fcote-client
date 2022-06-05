import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Star } from "../../asset/Star.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  logoRoot: {
    display: "flex",
    alignItems: "flex-start",
    alignSelf: "center",
  }
}));

export default function LogoBand() {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="row" alignItems="stretch" padding={1}>
      <Box display="flex" flexDirection="column" alignSelf="center" marginRight="5px">
        <Star />
      </Box>
      <Typography variant="h1">CoteEdu</Typography>
    </Box>
  );
}
