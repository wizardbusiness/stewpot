import { Avatar, Box, Typography } from "@mui/material";
import Icon from '@mdi/react';
import { mdiPotSteam } from '@mdi/js'


const headerStyles = {
  wrapper: {
    height: '10%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#faaa63',
    padding: '1em'
  },
  left: {
    display: 'flex',
    alignItems: 'flex-end',
  }
};

export default function Header() {
  // header nav

  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.left}>
        <Icon color='#fff' size={3} path={mdiPotSteam}></Icon>
      </Box>
        
        <Avatar></Avatar>
    </Box>
  )
};