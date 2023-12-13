import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { routes } from "../../../routes";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';

interface ISideBar {
  open: boolean;
  duration: number;
  drawerWidth: number;
  closeWidth: number;
  setOpen: (opan: boolean) => void
}

export const SideBar: React.FC<ISideBar> = ({
  closeWidth,
  drawerWidth,
  duration,
  open,
  setOpen
}) => {
  const { t } = useTranslation();
  const handleClickOpenSidebar = () => {
    setOpen(!open)
  }
  return (
    <Drawer
      sx={{
        transition: `${duration}s`,
        width: open ? drawerWidth : closeWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          transition: `${duration}s`,
          width: open ? drawerWidth : closeWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <IconButton onClick={handleClickOpenSidebar}>{open ? <MenuOpenIcon /> : <MenuIcon />}</IconButton>
      <Divider />
      <List>
        {routes.map((route, index) => (
          <MyListItemButton key={route.link + index} disablePadding>
            <NavLink to={route.link}>
              <ListItemButton>
                <ListItemIcon>
                  <LocalGroceryStoreOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={t(`sidebar.${route.title}`)} />
              </ListItemButton>
            </NavLink>
          </MyListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalGroceryStoreOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const MyListItemButton = styled(ListItem)`
  width: 100% !important;
  transition: 300ms;
  &:has(.active) {
    background: orange !important;
  }

  .MuiButtonBase-root {
    width: 100% !important;
    display: flex;
    align-items: center;
  }

  a {
    width: 100%;
    font-size: 20px !important;
    color: gray;
    text-decoration: none;
    transition: 300ms;
  }
  a.active {
    color: white;
  }
`;
