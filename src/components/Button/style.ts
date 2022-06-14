import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  iconLanguage: {
    height: "1.5rem",
    width: "auto",
    marginRight: "0.5rem",
  },
  textLanguage: {
    color: theme.color.darkGray,
    fontSize: theme.textFont.extraSmall,
    fontWeight: "bold",
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: theme.color.black,
      fontSize: theme.textFont.small,
    },
  },
  button: {
    minHeight: "50px",
    minWidth: "auto",
    backgroundColor: `${theme.color.green} !important`,
    color: `${theme.color.black} !important`,
    border: "none",
    borderRadius: "0px !important",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    textTransform: "lowercase",
    fontSize: theme.textFont.small,
    fontWeight: "bold !important",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: theme.color.white,
      boxShadow: `0 14px 26px -12px ${theme.color.green}, 0 4px 23px 0px ${theme.color.green}, 0 8px 10px -5px ${theme.color.green}`,
    },
  },
  fullWidth: {
    width: "100% !important",
  },
  primary: {
    backgroundColor: `${theme.color.green} !important`,
  },
  info: {
    backgroundColor: `${theme.color.white} !important`,
  },
  success: {
    backgroundColor: `${theme.color.green} !important`,
  },
  warning: {
    backgroundColor: `${theme.color.yellow} !important`,
  },
  danger: {
    backgroundColor: `${theme.color.red} !important`,
  },
  white: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "#FFFFFF",
      color: theme.color.lightGray,
    },
  },
  transparent: {
    "&,&:focus,&:hover,&:visited": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none",
    },
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none",
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem",
  },
  sm: {
    padding: "0.40625rem 1.25rem !important",
    fontSize: "0.6875rem !important",
    lineHeight: "1.5",
    borderRadius: "0.2rem",
  },
  round: {
    borderRadius: "30px",
  },
  block: {
    width: "100% !important",
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "#999999",
      boxShadow: "none",
    },
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px",
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px",
      },
      "& svg": {
        width: "32px",
        height: "32px",
      },
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px",
      },
      "& svg": {
        width: "17px",
        height: "17px",
      },
    },
  },
  simple: {
    "&,&:focus,&:hover,&:visited": {
      color: "#FFFFFF",
      background: "transparent",
      boxShadow: "none",
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.color.green,
      },
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.color.white,
      },
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.color.green,
      },
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.color.yellow,
      },
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.color.red,
      },
    },
  },
}));

export default useStyles;
