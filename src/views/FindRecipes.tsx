import React, {useState, useEffect} from 'react';
import { 
  Box, 
  Grid,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AddIngredientModal from '../components/common/AddIngredientModal';
import RecipeCard from '../components/common/RecipeCard';
import { pantryRows, pantryColumns, favorites } from '../consts/dummyData'; // dummy data

export default function FindRecipes({storedIngredients}) {
  const [ selectedColumns, setSelectedColumns ] = useState<GridColDef[] | []>([]);
  const [ selectedIngredients, setSelectedIngredients] = useState<object[] | []> ([]);

  useEffect(() => {
    // show only relevant ingredient info in data grid
    const relevantIngredientInfo = pantryRows.map((ingInfo) => {
      return ({
        id: ingInfo.id,
        ingredient: ingInfo.ingredient,
        qt: ''
      })
    })
    const relevantCols: GridColDef[] = pantryColumns.filter(cols => cols.field === 'ingredient' || cols.field === 'qt')

     setSelectedIngredients(relevantIngredientInfo);
     setSelectedColumns(relevantCols);
  }, []);

  // find recipe view
  return (
    <Box sx={{padding: '2em'}}>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Find Recipes</Typography>
      <AddIngredientModal />
      
      <Box sx={{padding: '2em'}}>
      </Box>
      <Grid container gap={5}>
      {favorites.map(recipe => (
        <RecipeCard key={recipe.name} name={recipe.name} id={recipe.id} starred={false}/>
      ))}
      </Grid>
    </Box>
  )
}