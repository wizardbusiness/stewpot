import React from 'react'
import {Stack, Button, TextField} from '@mui/material';

const SearchBar = ({justify, btnText, searchDefText, btnColor}) => {
  return (
    <Stack direction='row' justifyContent={justify} sx={{width:'100%'}}>
        <TextField variant='outlined' sx={{width: '25%'}} label={searchDefText}/>
        <Button variant='contained' size='large' sx={{backgroundColor: btnColor}}>{btnText}</Button>
    </Stack>
  )
};

export default SearchBar;
