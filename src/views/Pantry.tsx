import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { Box, TextField, Stack, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { pantryRows, pantryColumns } from '../consts/viewMocks';


export default function Pantry() {
  // saved ingredients
  
  return (  
    <Box sx={{padding: '2em'}}>
      <Stack direction='row' spacing={1} >
        <TextField label='...Search Ingredients'/>
        <Button variant='contained' size='small' sx={{backgroundColor: '#90767a'}}>
          <Typography >Add Ingredient +</Typography>
        </Button>
      </Stack>
      <Box sx={{width: '100%', height: '2em'}}/>
      <DataGrid rows={pantryRows} columns={pantryColumns} />
      <Outlet />
    </Box>
  )
}