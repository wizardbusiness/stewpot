import React, {useState, useEffect} from 'react';
import {Box, Grid, Card, CardContent, CardMedia} from '@mui/material';
import { favorites } from '../consts/viewMocks';
import SearchBar from '../components/common/SearchBar';

export default function Favorites() {
  // saved recipes

  return (
    <Box sx={{padding: '2em'}}>
      <SearchBar btnText='Go'btnColor/>
      <Box sx={{width: '100%', height: '2em'}}/>
      <Grid container gap={5}>
        {favorites.map((recipe, index) => (
          <Grid key={recipe.name} item>
            <Card 
              variant='outlined'
              sx={{
                height: 250, 
                width: 250, 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '15px',
              }}
            
            >
              <CardMedia 
                  sx={{minHeight: '100%', minWidth: 150, filter: 'blur(2px)'}}
                  image={`../../static/images/mockImages/stock-img-${index + 1}.jpg`}
                  title={recipe.name}
              />
              <CardContent>
                {recipe.name}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    
  )
}