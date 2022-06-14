import { makeStyles } from "@mui/styles";

const TaskbarFilterStyle = makeStyles((theme: any) => ({
  btn: {
    width: "100px",
    height: "32px",
    backgroundColor: ` ${theme.color.green} !important`,
  },
  textBtn: {
    width: "100px",
    height: "22px",
    fontWeight: "600 !important",
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: "22px !important",
    textTransform: "capitalize",
    color: "#000000 !important",
  },
}));

export default TaskbarFilterStyle;
