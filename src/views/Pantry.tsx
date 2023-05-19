import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { Box, TextField, Stack, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { pantryRows, pantryColumns } from '../consts/dummyData';
import { Search } from '@mui/icons-material';

export default function Pantry() {
  // saved ingredients
  return (  
    <Box sx={{padding: '2em'}}>
      <Box>
      </Box>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Pantry</Typography>
      <TextField variant='outlined' placeholder='Search Ingredients'/>
      <Box sx={{width: '100%', height: '2em'}}/>
      <DataGrid rows={pantryRows} columns={pantryColumns} />
      <Outlet />
    </Box>
  )
}