import { Box, Stack, GlobalStyles, CssBaseline } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './views/Login';
import StewpotLogo from './components/svgComponents/StewpotLogo/StewpotLogo';
import SvgGradient from './components/svgComponents/StewpotLogo/Gradient';
import '../static/images/icons/logo/gradient.svg'
// import { ReactComponent as StewPotLogo } from '../../static/images/icons/logo/stewpot-logo.svg'




function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);

  const handleLoginAsGuest = () => {
    setLoggedIn(true);
  }

  return (
    <>
        <CssBaseline />
        <GlobalStyles styles={{ html: {height: '100%', overflow: 'hidden'}}} />
        {loggedIn ? (
          <Box sx={{display: 'flex'}}>
            <Sidebar />
            <Box sx={{ maxHeight: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1}}>
              <Header />
              <Outlet />
            </Box> 
          </Box>
          ) : (

            <Box
              height='100vh'
              display='flex'
              flexGrow={1}
              justifyContent='center'
              alignItems='center'
              // sx={{
              //   backgroundImage: 'url(../static/images/icons/logo/gradient.svg)',
              //   backgroundSize: '100%',
              //   backgroundPositionY: '100'
              // }}
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
                <StewpotLogo color='#ff8b85' style={{height: 911, width: 911}} />
                <Login handleLoginAsGuest={handleLoginAsGuest}/>
            </Box>
          )
        }
    </>
  )
}

export default App
