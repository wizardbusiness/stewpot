import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Icon from '@mdi/react';
import { Box, Stack } from '@mui/material';
import { mdiPotSteam } from '@mdi/js';
import Typography from '@mui/material/Typography';
import {viewMocks, viewMocksInterface, drawerWidth} from './consts/dummyData.tsx';

const drawerStyles = {
  width: drawerWidth,
  display: 'flex',
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'borderBox',
    backgroundColor: '#eb4245',
    color: '#fff'
  }
}

type tabStateType = viewMocksInterface[];

export default function Sidebar() {
  // navigate to different tabs
  const [ tabState, setTabState ] = useState<tabStateType>([]);

  useEffect(() => {
    setTabState(viewMocks);
  }, [])

  const navigateToViews = useNavigate();


//'#f5834c'
  return (
    <Drawer variant='permanent' sx={drawerStyles}>
      <Toolbar disableGutters sx={{
        display: 'flex',
        alignItems: 'center',
        height: '10%', 
        // backgroundColor: '#FAAA6380',
        // boxShadow: '-2px 2px 5px #d54949',
        // border: '2px solid #FAAA6380'
        
      }}>
        </Toolbar>
      <Divider></Divider>
      <List sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2em 0 0 0'}}>
        {tabState.map((item) => (
          <>
          <ListItem 
            key={item.id} 
            onClick={() => navigateToViews(item.route)}
            disablePadding
          >
            <ListItemButton sx={{padding: '1em'}}>
              <ListItemIcon sx={{ color: '#fff'}}>{item.icon}</ListItemIcon>
              <ListItemText primary={<Typography fontSize='1.3em'>{item.contents}</Typography>}/>
            </ListItemButton>
            <Divider />
          </ListItem>
          
          </>
            
          ))
        }
      </List>
    </Drawer>
  )
}