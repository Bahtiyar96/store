import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Propsheader {
  duration: number;
  open: boolean;
  drawerWidth: number;
  closeWidth: number;
}

export const Header: React.FC<Propsheader> = ({
  duration,
  open,
  drawerWidth,
  closeWidth,
}) => {
  const { t, i18n } = useTranslation();
  const [translateMenu, setTranslateMenu] =
    useState<HTMLButtonElement | null>();
  const isOpenTranslate = Boolean(translateMenu);

  const handleCLose = () => {
    setTranslateMenu(null);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        transition: `${duration}s`,
        width: `calc(100% - ${open ? drawerWidth : closeWidth}px)`,
        ml: `${open ? drawerWidth : closeWidth}px`,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton
          onClick={(e) => setTranslateMenu(e.currentTarget)}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={isOpenTranslate ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isOpenTranslate ? "true" : undefined}
        >
          <Avatar sx={{ width: 30, height: 30 }}>
            {i18n.language.toUpperCase()}
          </Avatar>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={translateMenu}
          open={isOpenTranslate}
          onClose={handleCLose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              i18n.changeLanguage("en");
              handleCLose();
            }}
          >
            {t("languages.en")}
          </MenuItem>
          <MenuItem
            onClick={() => {
              i18n.changeLanguage("ru");
              handleCLose();
            }}
          >
            {t("languages.ru")}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
