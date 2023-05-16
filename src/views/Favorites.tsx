import React, {useState, useEffect} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import SearchBar from '../components/common/SearchBar';
import RecipeCard from '../components/common/RecipeCard';
import { favorites } from '../consts/dummyData';

export default function Favorites() {
  // saved recipes

  return (
    <Box sx={{padding: '2em'}}>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Favorites</Typography>
      <SearchBar 
        justify='flex-start' 
        btnText='Go' 
        searchDefText='Search Favorite Recipes' 
        btnColor
      />
      <Box sx={{width: '100%', height: '2em'}}/>
      <Grid container gap={5}>
        {favorites.map(recipe => (
          <RecipeCard name={recipe.name} id={recipe.id} starred/>
        ))}
      </Grid>
    </Box>
    
  )
}