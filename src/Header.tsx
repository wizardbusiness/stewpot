import { Avatar, Box, AppBar, Typography, Toolbar, Stack, Link } from "@mui/material";
import StewpotLogo from './components/svgComponents/StewpotLogo/StewPotLogo';
import { drawerWidth } from "./consts/dummyData";
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

  return (
    <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
      <AppBar sx={{ height: '10%', width: `calc(100% - ${drawerWidth}px)`}}>
        <Toolbar sx={headerStyles.wrapper}>
          <Link href='home' underline='none' sx={{display: 'flex', color: 'white'}}>
            <Typography fontWeight={300} lineHeight='2em' fontSize='3em'>StewPot</Typography>
            {/* <Icon color='#FFF' size={3.5} path={mdiPotSteam}/> */}
            <StewpotLogo color='white' height={70} width={70} transform='translateY(5px)'/> 
          </Link>
            <Box display='flex' flexDirection='column' >
              <Typography>Hi, Gabriel!</Typography>
            
            <Stack direction='row' alignItems='center' gap={2}> 
              <Avatar />
              <Settings /> 
            </Stack>
            </Box>
        </Toolbar>
      </AppBar>
        <Toolbar sx={{height: '100px'}}/>
    </Box>
      
      
  )
}