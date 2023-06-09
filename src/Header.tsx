import { useState } from 'react';
import { Avatar, Box, AppBar, Typography, Toolbar, Stack, Menu, MenuItem, IconButton, Button, Link, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '@mdi/react';
import { mdiPotSteam } from '@mdi/js';
import { drawerWidth } from "./consts/dummyData";
import SvgStewpotLogo from './components/svgComponents/StewpotLogo/StewpotLogo';
import Settings from './components/settings/Settings';


const headerStyles = {
  wrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#faaa63',
  },
  left: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  '& .MuiToolBar': {
    height: '10%'
  }
};

export default function Header() {

  const [menuAnchorEl, setMenuAnchorEl ] = useState<null | HTMLElement>(null);

  const menuOpen = Boolean(menuAnchorEl);

  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
      <AppBar sx={{ height: '10%', width: `calc(100% - ${drawerWidth}px)`}}>
        <Toolbar sx={headerStyles.wrapper}>
          <Link href='home' underline='none' sx={{display: 'flex', color: 'white'}}>
            <Typography fontWeight={300} lineHeight='2em' fontSize='3em'>StewPot</Typography>
            {/* <Icon color='#FFF' size={3.5} path={mdiPotSteam}/> */}
            <SvgStewpotLogo color='white' style={{height: 50, width: 50, transform: 'translateY(20px)', fill: 'white'}}/> 
          </Link>
            <Box display='flex' flexDirection='column' >
              <Typography>Hi, Gabriel!</Typography>
            
            <Stack direction='row' alignItems='center' gap={2}> 
              <Avatar />
              <Settings /> 
              {/* <IconButton 
                id='menu-button'
                aria-controls={menuOpen ? 'menu-button' : undefined}
                aria-haspopup='true'
                aria-expanded={menuOpen ? 'true' : undefined}
                onClick={handleMenuClick}
              >
              <MenuIcon fontSize='large' sx={{color: 'white'}} />
            </IconButton>
            <Menu
              id='user-menu'
              anchorEl={menuAnchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Help</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>

              <Divider />
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu> */}

            </Stack>
            </Box>
        </Toolbar>
      </AppBar>
        <Toolbar sx={{height: '100px'}}/>
    </Box>
      
      
  )
}