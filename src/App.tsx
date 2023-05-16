import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline, Box, GlobalStyles  } from '@mui/material';
import Header from './components/Header';
import Sidebar from './Sidebar';
import LoginField from './components/LoginField';

function App() {
  const [ loggedIn, setLoggedIn ] = useState(true);
  return (
    <>
        <CssBaseline />
        <GlobalStyles styles={{ html: {height: '100%'}, body: {height: '100%'}, '#root': {height: '100%'} }} />
        {loggedIn ? 
          <Box sx={{
            display: 'flex',
            minHeight: '100%'
            
          }}>
            <Sidebar />
            <Box sx={{
              flexGrow: 1,
            }}>
              <Header />
              <Outlet />
            </Box>
          </Box> 
          : 
          <>
            <LoginField inputLabel=' Username' inputType='username'></LoginField>
            <LoginField inputLabel=' Password' inputType='password'></LoginField>
          </>
        }
    </>
  )
}

export default App
