import {} from "@mui/material";
import {} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const MyListAssignmentStyle = makeStyles((theme: any) => ({
  wrapAll: {
    backgroundColor: "#F3F7F7",
    width: "100%",
    margin: "auto",
  },
  containerGrid: {
    backgroundColor: "#F3F7F7",
    width: "1007px",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(2),
  },
  itemGrid: {
    // position: "absolute",
    width: "223px",
    height: "178px",
    marginTop: theme.spacing(4),
  },
}));

export default MyListAssignmentStyle;
