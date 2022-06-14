import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as VietnameseIcon } from "../../asset/Vietnamese.svg";
import { ReactComponent as EnglishIcon } from "../../asset/English.svg";
import { ReactComponent as VietnameseRectangleIcon } from "../../asset/VN-Rectangle.svg";
import { ReactComponent as EnglishRectangleIcon } from "../../asset/English-Rectangle.svg";
import useStyles from "./style";

export default function ChangLanguage() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (language: string) => {
    setLanguage(language);
    i18n.changeLanguage(language);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {language === "en" ? <EnglishIcon /> : <VietnameseIcon />}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            changeLanguage("en");
          }}
        >
          <EnglishRectangleIcon className={classes.iconLanguage} />
          <Typography className={classes.textLanguage}>
            {t("English")}
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeLanguage("vi");
          }}
        >
          <VietnameseRectangleIcon className={classes.iconLanguage} />
          <Typography className={classes.textLanguage}>
            {t("Vietnamese")}
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
