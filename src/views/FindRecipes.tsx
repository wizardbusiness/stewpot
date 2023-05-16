import React, {useState, useEffect} from 'react';
import { 
  Box, 
  Grid,
  FormGroup, 
  FormControlLabel, 
  Switch, 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import SearchBar from '../components/common/SearchBar';
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
      <SearchBar justify='flex-start' btnText='Add Ingredient' searchDefText='Search Pantry Ingredients' btnColor />
      <FormGroup sx={{flexDirection: 'row', alignItems: 'center', padding:'2em'}}>
        <FormControlLabel control={<Switch defaultChecked />} label='Include common ingredients'/> 
        <FormControlLabel control={<Switch />} label='Include all pantry ingredients'/> 
      </FormGroup>
      <Box sx={{padding: '2em'}}>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{backgroundColor: '#fcd773'}}
        >
          <Typography fontSize='1.2em'>Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <DataGrid rows={selectedIngredients} columns={selectedColumns} />
        </AccordionDetails>
       </Accordion>
      </Box>
      <Grid container gap={5}>
      {favorites.map(recipe => (
        <RecipeCard name={recipe.name} id={recipe.id}/>
      ))}
      </Grid>
    </Box>
  )
}