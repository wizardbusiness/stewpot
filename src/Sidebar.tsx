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
import Typography from '@mui/material/Typography';
import {viewMocks, viewMocksInterface} from './consts/viewMocks.tsx';

const drawerWidth = 240;

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



  return (
    <Drawer variant='permanent' sx={drawerStyles}>
      <Toolbar></Toolbar>
      <Divider></Divider>
      <List>
        {tabState.map((item) => (
            <ListItem 
              key={item.id} 
              onClick={() => navigateToViews(item.route)}
              disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color: '#fff'}}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.contents}/>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  )
}