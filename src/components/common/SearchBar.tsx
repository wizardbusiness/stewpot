import React from 'react'
import {Stack, Button, TextField} from '@mui/material';

const SearchBar = ({btnText, btnColor}) => {
  return (
    <Stack direction='row' sx={{width:'100%'}}>
        <TextField variant='outlined' sx={{width: '25%'}} label='...Search Favorite Recipes'/>
        <Button variant='contained' size='large' sx={{backgroundColor: btnColor}}>{btnText}</Button>
    </Stack>
  )
};

export default SearchBar;
