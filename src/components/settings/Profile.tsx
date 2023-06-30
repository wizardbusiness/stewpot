import { 
  Stack,
  Box,
  Typography,
  Avatar,
  Tooltip,
  IconButton,
  TextField
 } from "@mui/material"

 import UploadAvatarIcon from "../svgComponents/utility/UploadAvatar"
import { SyntheticEvent } from "react"

 const profileStyles = {
    avatar: {
      height: 50,
      width: 50,
      border: '2px solid lightgray',
      '&:hover': {
        border: '2px solid gold'
      }
    },
    addAvatarIcon: {
      height: 25,
      width: 25,
    }
 }

interface ProfileProps {
 avatarSrc: string,
 handleUploadAvatar: (e: SyntheticEvent) => void;
}

const Profile = ({avatarSrc, handleUploadAvatar}: ProfileProps) => {
  return (
    <Stack id='profile-section' gap={3}>
      <Typography fontSize='2em'>Profile</Typography>
        <Stack direction='row' gap={2} alignItems='center'>               
          <Typography>Avatar:</Typography>
          <Box display='flex'>
            <Avatar src={avatarSrc} sx={profileStyles.avatar}/>
            <Tooltip title='Upload Image'>     
            <IconButton
            component='label'
            sx={{transform: 'translateY(35%) translateX(-70%)'}}
            > 
              <UploadAvatarIcon height={25} width={25}/>               
              <input 
                hidden
                type='file'
                onChange={handleUploadAvatar}
              />
            </IconButton>  
            </Tooltip> 
          </Box>
        </Stack>
        <Stack direction='row' gap={2} alignItems='center'>
          <Typography>Display Name:</Typography>
          <TextField value='Gabriel' />
      </Stack>
    </Stack>
  );
}

export default Profile;