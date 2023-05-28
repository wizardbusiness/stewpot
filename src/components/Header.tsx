import { Avatar, Box, AppBar, Typography, Toolbar, Stack, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '@mdi/react';
import { mdiPotSteam } from '@mdi/js';
import { drawerWidth } from "../consts/dummyData";


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

  return (
    <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
      <AppBar sx={{ height: '10%', width: `calc(100% - ${drawerWidth}px)`}}>
        <Toolbar sx={headerStyles.wrapper}>
          <Stack direction='row'>        
          <Typography fontWeight={300} lineHeight='2em' fontSize='3em'>StewPot</Typography>
          <Icon color='#FFF' size={3.5} path={mdiPotSteam}/>           
          </Stack>
            <Box display='flex' flexDirection='column'>
              <Typography>Hi, Gabriel!</Typography>
            
            <Stack direction='row' alignItems='center'> 
              <Avatar />
              <IconButton>
              <MenuIcon fontSize='large' sx={{color: 'white'}} />
            </IconButton>
            </Stack>
            </Box>
        </Toolbar>
      </AppBar>
        <Toolbar sx={{height: '100px'}}/>
    </Box>
      
      
  )
}