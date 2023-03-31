import React from 'react';
import Navigation from './Navigation';
import {Outlet} from 'react-router-dom'

import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MainLayout = () => {
  return (
    <>
    <Box sx={{ display: "flex"}}>
      <Navigation/>
        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#E9F5DB', height: '100vh' }}>
          <DrawerHeader/>
          <Outlet/>
        </Box>
    </Box>
    </>

  )
}

export default MainLayout;