import { Box } from "@mui/material";
 import { useState } from "react";
import { Outlet } from 'react-router-dom';
import { Header, SideBar } from './components';
 const drawerWidth = 240;
 const closeWidth = 50;
 const duration = 0.5;

export const Layout = () => {
  const [open, setOpen] = useState<boolean>(false);
 
return (
  <Box sx={{ display: "flex" }}>
  <Header {...{open, setOpen, drawerWidth, closeWidth, duration}} />
  <SideBar {...{closeWidth, drawerWidth, duration, open, setOpen }} />
  <Box
    component="main"
    sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, pt: 11 }}
  >
    <Outlet />
  </Box>
  </Box>
);
 };