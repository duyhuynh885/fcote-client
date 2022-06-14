import {
  Box,
  IconButton,
  InputLabel,
  NativeSelect,
  Paper,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import InputBase from "@mui/material/InputBase";

import FormControl from "@mui/material/FormControl";
import TaskbarFilterStyle from "./style";

export default function TaskbarFilter() {
  const classes = TaskbarFilterStyle();
  const [status, setStatus] = React.useState("");

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  return (
    <div>
      <Paper
        square
        elevation={3}
        sx={{ width: "1318px", p: "3px 10px 3px 15px" }}
      >
        <Box
          sx={{ float: "left", minWidth: 120, width: "150px", height: "45px" }}
        >
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Status
            </InputLabel>
            <NativeSelect
              defaultValue={"All"}
              inputProps={{
                name: "status",
                id: "uncontrolled-native",
              }}
            >
              <option value={"All"}>All</option>
              <option value={"Finished"}>Finished</option>
              <option value={"Doing"}>Doing</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <Box
          sx={{
            float: "left",
            minWidth: 120,
            width: "150px",
            height: "45px",
            ml: "10px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Difficulties
            </InputLabel>
            <NativeSelect
              defaultValue={"All"}
              inputProps={{
                name: "difficulties",
                id: "uncontrolled-native",
              }}
            >
              <option value={"All"}>All</option>
              <option value={"Finished"}>Finished</option>
              <option value={"Doing"}>Doing</option>
            </NativeSelect>
          </FormControl>
        </Box>

        <Paper
          elevation={0}
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            ml: "70%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search here"
            inputProps={{ "aria-label": "Search here" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <Button variant="outlined" className={classes.btn}>
              <Typography className={classes.textBtn}>+ Create</Typography>
            </Button>
          </IconButton>
        </Paper>
      </Paper>
    </div>
  );
}
