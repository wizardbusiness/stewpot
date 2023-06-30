import { Box, CssBaseline } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './views/Login';
import StewpotLogo from './components/svgComponents/StewpotLogo/StewpotLogo';
import '../static/images/icons/logo/gradient.svg'

function App() {
  const [ loggedIn, setLoggedIn ] = useState<boolean>(true);

  const handleLoginAsGuest = (): void => {
    setLoggedIn(true);
  };

  return (
    <>
      <CssBaseline />
      {loggedIn ? (
        <Box sx={{display: 'flex'}}>
          <Sidebar />
          <Box sx={{ maxHeight: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
            <Header />
            <Box sx={{padding: '2em', margin: '1em', marginTop: 0}}>
              <Outlet />
            </Box>
          </Box> 
        </Box>
        ) : (
        <Box
          height='100vh'
          display='flex'
          flexGrow={1}
          justifyContent='center'
          alignItems='center'
        > 
          <Box 
              position='fixed'
              zIndex={1}
              top={0}
              left={0}
              right={0}
              bottom={0}
              height='100vh'
              display='flex'
              flexGrow={1}
              justifyContent='center'
              alignItems='center'
              sx={{
                backgroundImage: 'url(../static/images/icons/logo/gradient.svg)',
                backgroundSize: '100%',
                backgroundPositionY: '100'
              }}
            >
            </Box>
            <StewpotLogo height={911} width={911} color='#ff8b85' />
            <Login handleLoginAsGuest={handleLoginAsGuest}/>
        </Box>
      )
      }
    </>
  )
}

export default App;
