import { useState } from 'react';
import LoginField from './components/LoginField';

import './App.css'

function App() {
  

  return (
    <>
      <div className='login'>
        <LoginField inputLabel=' Username' inputType='username'></LoginField>
        <LoginField inputLabel=' Password' inputType='password'></LoginField>
      </div>
    </>
  )
}

export default App
