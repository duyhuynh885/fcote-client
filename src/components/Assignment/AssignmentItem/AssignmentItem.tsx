import { Avatar, Paper, Typography } from "@mui/material";
import React from "react";
import AssignmentItemStyle from "./style";
import ButtonItem from "../ButtonItem.tsx/ButtonItem";
import { RegularButtonType } from "../../../types/RegularButtonType";

function AssignmentItem() {
  const regularButton: RegularButtonType = {
    color: "primary",
    size: "sm",
    round: false,
    children: "Log in",
    fullWidth: true,
    disabled: false,
    simple: true,
    block: true,
    link: false,
    justIcon: false,
    className: "form__custom-button",
    type: "submit",
  };
  const classes = AssignmentItemStyle();
  const ImageURL =
    "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/76931544_789032974891261_8407569228344852480_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=77xHA6pcyYoAX_QhAuD&tn=-rbCrMHs25aehuye&_nc_ht=scontent.fdad1-2.fna&oh=00_AT8xvZrDvhp4N2tCHK3nAYtAQRFOMQG2h2iSgnken_-vhg&oe=62C1091F";
  return (
    <div>
      <Paper elevation={3} square className={classes.container}>
        <Typography className={classes.name}>
          Code.cpp September 2022<div className=""></div>
        </Typography>

        <Avatar alt="Nguyen Tan Huy" src={ImageURL} className={classes.img} />
        <Typography className={classes.userName}>Tan Huy</Typography>
        <div className="row" style={{ height: "30px", padding: "10px" }}>
          <Typography className={classes.state}>FINISHED</Typography>
          <Typography className={classes.level}>HARD</Typography>
        </div>
        <ButtonItem />
      </Paper>
    </div>
  );
}

export default AssignmentItem;
