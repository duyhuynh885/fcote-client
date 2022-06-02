import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  navBar: {
    backgroundColor: `${theme.color.navColor} !important`,
  },
  navLinks: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
    textTransform : "uppercase",
    color: theme.color.darkGray,
    fontSize: theme.textFont.small,
    fontWeight: "bold",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: theme.color.textColor,
      fontSize: theme.textFont.medium,
    },
  },
}));

export default useStyles;
