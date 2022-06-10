import {
  Grid,
  Pagination,
  PaginationItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";
import AssignmentItem from "../../components/Assignment/AssignmentItem/AssignmentItem";
import ListAssignmentStyle from "./style";
import MyAssignmentItem from "../../components/Assignment/MyAssignmentItem/MyAssignmentItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, ThemeProvider } from "@mui/system";

// import TableContainer from "@mui/material/TableContainer";

export default function ListAssignment() {
  // const theme = createTheme({
  //   overrides: {
  //     MuiCssBaseline: {
  //       "@global": {
  //         "*::-webkit-scrollbar": {
  //           width: "10px",
  //         },
  //         "*::-webkit-scrollbar-track": {
  //           background: "#E4EFEF",
  //         },
  //         "*::-webkit-scrollbar-thumb": {
  //           background: "#1D388F61",
  //           borderRadius: "2px",
  //         },
  //       },
  //     },
  //   },
  // });

  const classes = ListAssignmentStyle();
  return (
    <div className={classes.wrapAll}>
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
            marginLeft: "200px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          spacing={2}
        >
          <Pagination
            count={10}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
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
    </div>
  );
}
