import React, {useState} from 'react';
import { 
  Box,  
  Modal, 
  Button,
  Stack, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Toolbar, 
  ListItemIcon, 
  Divider, 
  Typography, 
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { settingsMock } from '../../consts/dummyData';
import Profile from './Profile';
import Theme from './Theme';
import Accessibility from './Accessibility';
import AccountInfo from './AccountInfo';
import HelperModal from './HelperModal';

const settingStyles = {
  modal: {
    display: 'flex',
    flexDirection: 'column',
    height: '70%',
    width: '60%',
    position: 'fixed',
    top: '15%',
    left: '20%',
  },
  header: {
    height: '8%',
    paddingLeft: '1em',
    paddingRight: '1em',
    backgroundColor: '#bfbfbf',
    alignItems: 'center',
    justifyContent: 'space-between',
    headerIcon: {
      color: 'gray',
    },
  }, 
  toolbar: { 
    height: '100%',
    backgroundColor: '#ededed', 
    padding: '0',
    alignItems: 'flex-start',
    tabList: {
      width: '100%',
    }
  },
  content: {
    padding: '1em',
    width: '100%',
    backgroundColor: 'white',
    color: 'gray',
    sectionHeader: {
      fontSize: '2em'
    },
  }
}

const UserSettings = () => {
  const [ open, setOpen ] = useState<boolean>(false);
  const [ saveDialogOpen, setSaveDialogOpen ] = useState<boolean>(false);
  const [ saveChanges, setSaveChanges ] = useState<boolean>(false);
  const [ avatarSrc, setAvatarSrc ] = useState<string> ('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSaveDialogOpen = () => setSaveDialogOpen(true);
  const handleSaveDialogClose = () => setSaveDialogOpen(false);

  const handleSaveChanges = () => setSaveChanges(true);
  const handleDontSaveChanges = () => setSaveChanges(false);


  const handleUploadAvatar = (e) => {
      const avatarUrl = URL.createObjectURL(e.target.files[0])
      setAvatarSrc(avatarUrl);
  }

  return (
    <Box>
      <SettingsIcon onClick={handleOpen} />
      <Modal
        open={open}
        aria-labelledby='settings'
        aria-describedby='settings'
        sx={settingStyles.modal}
      >
        <Box sx={settingStyles.modal}>
          <Stack direction='row' sx={settingStyles.header}>
            <Stack direction='row' alignItems='center'>
              <SettingsIcon sx={settingStyles.header.headerIcon}/>
              <Typography variant='h6' padding='0.5em' fontStyle='italic' letterSpacing={3.5} color='gray'>Settings</Typography>
            </Stack>
            <Button onClick={handleSaveDialogOpen}>Exit</Button>
            <HelperModal 
              open={saveDialogOpen} 
              handleCloseSettings={handleClose}
              handleCloseDialog={handleSaveDialogClose} 
              textContent='Save changes before exiting?' 
              handleSaveChanges={handleSaveChanges} 
              handleDontSaveChanges={handleDontSaveChanges} 
              saveBtnText='Yes'
              exitBtnText='No'
            />
          </Stack>
          <Box sx={{height: '92%', display: 'flex'}}>
            <Box>
              <Toolbar disableGutters sx={settingStyles.toolbar}>
                <List disablePadding sx={settingStyles.toolbar.tabList}>
                  {settingsMock.tabsMock.map(tab => (
                    <React.Fragment key={tab.id}>
                      <ListItem disablePadding >
                        <ListItemButton href={`#${tab.id}`}>
                          <ListItemIcon sx={{minWidth: '2.5em'}}>
                            {tab.icon}
                          </ListItemIcon> 
                          <ListItemText>{tab.label}</ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              </Toolbar>
            </Box>
            <Box sx={settingStyles.content} overflow='scroll'>
              <Stack>
                <Profile 
                  sectionHeaderStyle={settingStyles.content.sectionHeader} 
                  handleUploadAvatar={handleUploadAvatar} 
                  avatarSrc={avatarSrc} 
                />
                <Divider sx={{padding: '1em'}} />
                <Theme sectionHeaderStyle={settingStyles.content.sectionHeader} />
                <Divider sx={{padding: '1em'}} />
                <Accessibility sectionHeaderStyle={settingStyles.content.sectionHeader}/>
                <Divider sx={{padding: '1em'}} />   
                <AccountInfo sectionHeaderStyle={settingStyles.content.sectionHeader} />  
              </Stack>
              <Button 
                variant='contained' 
                sx={{position: 'absolute', top: '92%', left: '88%'}}
                onClick={handleClose}
              >
                  Save & Exit
                </Button>
              

            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default UserSettings;