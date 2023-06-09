import React, {useState, useEffect} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import RecipeCard from '../components/common/RecipeCard';
import SearchBar from '../components/common/SearchBar';
import { favorites, favoritesInterface } from '../consts/dummyData';

export default function Favorites() {
  // saved recipes

  const [recipes, setRecipes ] = useState<favoritesInterface[]>(favorites);
  const [ searchedRecipes, setSearchedRecipes ] = useState<favoritesInterface[]>([]);

  useEffect(() => {
    setSearchedRecipes(recipes);
  }, [recipes])

  return (
    <Box sx={{padding: '2em'}}>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Favorites</Typography>
      <SearchBar placeholderText='Search Recipes' data={recipes} dataProperty='name' setResults={setSearchedRecipes} />
      <Box sx={{width: '100%', height: '2em'}}/>
      <Grid container gap={5}>
        {searchedRecipes.map(recipe => (
          <RecipeCard key={recipe.id} name={recipe.name} id={recipe.id} starred/>
        ))}
      </Grid>
    </Box>
    
  )
}