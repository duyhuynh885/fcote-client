import { makeStyles } from "@mui/styles";
const ListAssignmentStyle = makeStyles((theme: any) => ({
  wrapAll: {
    backgroundColor: "#F3F7F7",
    width: "100% !important",
    // paddingRight: " 3.63rem !important",
    paddingLeft: " 6rem !important",
  },
  left: {
    float: "left",
    // backgroundColor: "lightblue",
    width: "733px !important",
    height: "auto",
    marginTop: `${theme.spacing(2)} !important`,
    padding: `${theme.spacing(0)} !important`,
  },

  leftItem: {
    width: "223px !important",
    height: "178px !important",
    marginTop: `${theme.spacing(2)} !important`,
    paddingRight: `${theme.spacing(2)} !important`,
  },
  right: {
    float: "left",
    width: "543px",
    height: "auto",
    marginTop: `${theme.spacing(4)} !important`,
    marginLeft: "3.66rem !important",
    paddingBottom: "20px",
    // marginRight: "auto !important",
  },
  rightItem: {
    marginLeft: theme.spacing(3),
    paddingTop: "28px !important",
  },
  textTitle: {
    width: "543px",
    height: "27px",
    fontWeight: "700 !important",
    fontSize: `${theme.textFont.large} !important`,
    lineHeight: "27px !important",
    textTransform: "capitalize",
    color: "#010101",
    textAlign: "center",
    paddingTop: "30px !important",
    paddingBottom: "30px !important",
    marginLeft: theme.spacing(3),
  },
}));

export default ListAssignmentStyle;
