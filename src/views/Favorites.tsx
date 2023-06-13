import {useState, useEffect, useMemo} from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { handleDragEnd } from '../utils/sortUtils';
import {Box, Grid, Typography} from '@mui/material';
import RecipeCard from '../components/common/RecipeCard';
import SearchBar from '../components/common/SearchBar';
import { favorites, favoritesInterface } from '../consts/dummyData';
import { GridRowsProp } from '@mui/x-data-grid';

export default function Favorites() {
  // saved recipes
  const [recipes, setRecipes ] = useState<favoritesInterface[]>(favorites);
  const [ searchedRecipes, setSearchedRecipes ] = useState<favoritesInterface[]>(favorites);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <Box sx={{padding: '2em'}}>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Favorites</Typography>
      <SearchBar placeholderText='Search Recipes' data={recipes} dataProperty='name' setResults={setSearchedRecipes} />
      <Box sx={{width: '100%', height: '2em'}}/>
        <DndContext 
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(e) => handleDragEnd(e, setSearchedRecipes, searchedRecipes)}
        >
          <SortableContext
            items={searchedRecipes.map(recipe => recipe.id)}
            strategy={horizontalListSortingStrategy}
          >
            <Grid container gap={5}>
              {searchedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} id={recipe.id} name={recipe.name} starred/>
          ))}
            </Grid>    
          </SortableContext>
          
          
        </DndContext>
    </Box>
    
  )
}

