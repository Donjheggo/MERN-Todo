import * as React from 'react';
import { NavLink } from 'react-router-dom'

//////// MUI //////////////////
import { styled, useTheme, createTheme, ThemeProvider, } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

/////// MUI ICONS /////////////
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Groups2Icon from '@mui/icons-material/Groups2';
import ViewListIcon from '@mui/icons-material/ViewList';
import ClassIcon from '@mui/icons-material/Class';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FactoryIcon from '@mui/icons-material/Factory';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import logo from "/images/vite.svg"

const drawerWidth = 240;

const openedMixin = (theme) => ({
  backgroundColor: '#718355',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  backgroundColor: '#718355',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const styles = {
  paper: {
    background: "blue"
  }
}


export default function Navigation() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor: '#718355'}}>
        <Toolbar>

        {!open ? 
        (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{marginRight: 2}}
          >
            <MenuIcon />
          </IconButton>) 
          : 
          (
            <IconButton onClick={handleDrawerClose} color="inherit">
              <ArrowBackIosIcon/>
            </IconButton>
          ) 
          }
          
          <Typography variant="h6" noWrap component="div">
            Page Title
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            sx={{marginLeft: 'auto'}}
          >
          <AccountCircle />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          
        </Toolbar>
      </AppBar>
      
      <Drawer variant="permanent" open={open} sx={{...styles}}>
        <DrawerHeader style={{display: 'flex', justifyContent: 'flex-start'}}>
          <img src={logo} width="50px" style={{borderRadius: '5px'}} />
          <Typography variant='h3' sx={{marginLeft: '10px', color: '#E9F5DB', fontWeight: 'bolder', fontFamily: 'tahoma'}} >
            TODO
          </Typography>
        </DrawerHeader>
        <Divider />
        <List style={{paddingTop: '0px', color: '#E9F5DB'}}>
  
              {/* SITE */}
             <Divider />
              <List to="/">
                <ListItem  key={"Home"} disablePadding sx={{ display: 'block'}} >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <LocationOnIcon/> 
                    </ListItemIcon>
                    <ListItemText primary={"Home"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </List>

              {/* Profile */}
             <Divider />
             <List to="/profile">
                <ListItem key={"Profile"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <AccountBoxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Profile"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
             </List>

        </List>
      </Drawer>


    </>
  );
}