import {useState, useEffect} from 'react';
import { useAppSelector } from '../hooks'
import { 
  Box, 
  Grid,
  Typography,
} from '@mui/material';

import AddIngredientModal from '../components/common/AddIngredientModal';
import RecipeCard from '../components/common/RecipeCard';
import SearchBar from '../components/common/SearchBar';
import { recipeInterface } from '../consts/interfaces/componentInterfaces';

export default function FindRecipes() {

  const rows = useAppSelector(state => state.pantry.ingredientRows);

  const [ recipes, setRecipes ] = useState<recipeInterface[]>([]);
  const [ searchedRecipes, setSearchedRecipes ] = useState<recipeInterface[]>([]);

  useEffect(() => {
    setSearchedRecipes(recipes)
  }, [recipes]);


  // find recipe view
  return (
    <>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Find Recipes</Typography>
      <AddIngredientModal 
        rows={rows} 
        btnText='+ Add Ingredients From Pantry' 
        searchText='Search Pantry' 
        setRecipes={setRecipes} 
      />
      
      <Box sx={{padding: '1em'}}>
        <SearchBar placeholderText='Search Recipe Results' recipes={recipes} setResults={setSearchedRecipes} />
      </Box>
      {recipes && 
        <Grid container gap={5}>
          {recipes.map((recipe) => {
            console.log(recipe)
            return (
              <RecipeCard key={recipe.id} name={recipe.title} id={recipe.id} starred={false} image={recipe.image}/>
            )
          })}
        </Grid>
      }
    </>
  )
}