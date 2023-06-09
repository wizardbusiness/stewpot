import React, {useState, useEffect} from 'react';
import { 
  Box, 
  Grid,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import AddIngredientModal from '../components/common/AddIngredientModal';
import RecipeCard from '../components/common/RecipeCard';
import SearchBar from '../components/common/SearchBar';
import { pantryRows, pantryColumns, commonIngredientRows, favorites, favoritesInterface } from '../consts/dummyData'; // dummy data

export default function FindRecipes() {
  const [ selectedColumns, setSelectedColumns ] = useState<GridColDef[]>([]);
  const [ selectedIngredients, setSelectedIngredients] = useState<GridRowsProp> ([]);
  const [ recipes, setRecipes ] = useState<favoritesInterface[]>(favorites);
  const [ searchedRecipes, setSearchedRecipes ] = useState<favoritesInterface[]>([]);

  useEffect(() => {
    // show only relevant ingredient info in data grid
    const relevantIngredientInfo: GridRowsProp = pantryRows.map((ingInfo) => {
      return ({
        id: ingInfo.id,
        name: ingInfo.ingredient,
        qt: ''
      })
    });

    const relevantCols: GridColDef[] = pantryColumns.filter(cols => cols.field === 'ingredient' || cols.field === 'qt');
    setSelectedIngredients(relevantIngredientInfo);
    setSelectedColumns(relevantCols);
    
  }, []);

  useEffect(() => {
    setSearchedRecipes(recipes)
  }, [recipes]);

  // find recipe view
  return (
    <Box sx={{padding: '2em'}}>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Find Recipes</Typography>

      <AddIngredientModal infoText='Get Started &gt;' pantry={false} btnText='+ Add Ingredients From Pantry' searchTxt='Search Pantry' includeControls/>
      
      <Box sx={{padding: '1em'}}>
        <SearchBar placeholderText='Search Recipe Results' data={recipes} dataProperty='name' setResults={setSearchedRecipes} />
      </Box>
      <Grid container gap={5}>
      {searchedRecipes.map(recipe => (
        <RecipeCard key={recipe.id} name={recipe.name} id={recipe.id} starred={false}/>
      ))}
      </Grid>
    </Box>
  )
}