import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { Box, TextField, Stack, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { pantryRows, pantryColumns } from '../consts/viewMocks';
import SearchBar from '../components/common/SearchBar';
import { Search } from '@mui/icons-material';


export default function Pantry() {
  // saved ingredients
  
  return (  
    <Box sx={{padding: '2em'}}>
      <Box>
        
      </Box>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Pantry</Typography>
      <SearchBar 
        justify='flex-start' 
        btnText='+ Ingredient' 
        searchDefText='Add Ingredient' 
        btnColor='#f6af41'
      />
      <Box sx={{width: '100%', height: '2em'}}/>
      <DataGrid rows={pantryRows} columns={pantryColumns} />
      <Outlet />
    </Box>
  )
}