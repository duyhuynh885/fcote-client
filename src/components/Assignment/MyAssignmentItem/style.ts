import { makeStyles } from "@mui/styles";

const MyAssignmentItemStyle = makeStyles((theme: any) => ({
  paperWrap: {
    width: "493px",
    height: "53px",
    border: "1px solid #7A9295",
    padding: "8px",
  },
  name: {
    float: "left",
    width: "208px",
    height: "24px",
    fontWeight: "600 !important",
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: "24px !important",
    textTransform: "capitalize",
    color: "#010101",
    textAlign: "left",
    marginTop: "6px  !important",
  },

  level: {
    float: "left",
    width: "90px",
    height: "24px",
    fontWeight: "800 !important",
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: "24px !important",
    textTransform: "capitalize",
    color: "#AC5B4D",
    textAlign: "center",
    paddingTop: "6px !important",
  },
  btn: {
    width: "174px",
    height: "36px",
    backgroundColor: ` ${theme.color.btnGreenColor} !important`,
  },
  textBtn: {
    width: "140px",
    height: "22px",
    fontWeight: "600 !important",
    fontSize: `${theme.textFont.small} !important`,
    lineHeight: "22px !important",
    textTransform: "capitalize",
    color: "#000000 !important",
  },
}));

export default MyAssignmentItemStyle;
