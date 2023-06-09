import React, { useState, useEffect} from 'react';
import { 
  Box, 
  Stack, 
  Paper,
  Modal, 
  FormControl, 
  TextField, 
  Button,
  Typography,
  Link
} from '@mui/material';

const style = {
  height: '500px',
  width: '400px',
}


const Login = ({handleLoginAsGuest}) => {
  const [ registerModal, setRegisterModal ] = useState<boolean>(false);
  
  const handleOpenRegisterModal = () => setRegisterModal(true);
  const handleCloseRegisterModal = () => setRegisterModal(false);

  return (   
    <Stack position='fixed' alignItems='center' zIndex={3} justifyContent='center' gap={2} sx={{transform: 'translate(-50%, -50%'}} >
      <Typography variant='h1' sx={{color: 'white'}} >Stewpot</Typography>
      <Paper elevation={5} sx={{padding: '3em', opacity: 0.8}}>
        <form>
          <FormControl sx={{gap: 2}}>
            <Stack width='20vw'>
              <TextField type='email' variant='outlined' placeholder='Username'/>
              <TextField type='password' variant='outlined' placeholder='Password'/>
            </Stack>
            <Button type='submit' size='large' variant='contained'>Login</Button>
            <Link href='#'>Forgot Password?</Link>
            <Stack gap={2} alignItems='center'>
              <Button onClick={handleOpenRegisterModal} variant='contained' sx={{backgroundColor: '#F48CAB'}}>
                <Link color='white' underline='none'>Create New Profile</Link>
              </Button>
            </Stack>
              <Link href='#' onClick={() => handleLoginAsGuest()}>Continue as Guest</Link>
          </FormControl>
        </form>
      </Paper>
      <Modal
        open={registerModal}
        onClose={handleCloseRegisterModal}
        aria-labelledby='modal-register-new-user'
        aria-desribedby='a-modal-for-registering-as-a-new-user'
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <Paper sx={style}>
          <form>
            <FormControl>
              <Stack gap={1} justifyContent='center' alignItems='center'>
                <TextField type='email' variant='outlined' placeholder='Enter Email Address'></TextField>
                <TextField type='password' variant='outlined' placeholder='Enter Password'></TextField>
                <TextField type='password' variant='outlined' placeholder='Reenter Password'></TextField>
              </Stack>
            </FormControl>
          </form>
        </Paper>
      </Modal>
    </Stack>
  )
}

export default Login;