import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  navLinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),

    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

export default useStyles;
