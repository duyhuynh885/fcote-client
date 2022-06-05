import { makeStyles } from "@mui/styles";
const ListAssignmentStyle = makeStyles((theme: any) => ({
  wrapAll: {
    backgroundColor: "#F3F7F7",
    width: "100%",
    margin: "auto",
  },
  left: {
    backgroundColor: "#F3F7F7",
    width: "748px",
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
  right: {},
}));

export default ListAssignmentStyle;
