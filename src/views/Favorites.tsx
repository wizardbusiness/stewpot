import {useState} from 'react';
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
import { favorites} from '../consts/dummyData';
import { recipeInterface } from '../consts/interfaces/componentInterfaces';

export default function Favorites() {
  // saved recipes
  const [recipes, setRecipes ] = useState<recipeInterface[]>(favorites);
  const [ searchedRecipes, setSearchedRecipes ] = useState<recipeInterface[]>(favorites);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Favorites</Typography>
      <SearchBar placeholderText='Search Recipes' recipes={recipes} setResults={setSearchedRecipes} />
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
            <RecipeCard key={recipe.id} id={recipe.id} name={recipe.title} image={`../../static/images/mockImages/stock-img-${recipe.id}.jpg`} starred/>
          ))}
            </Grid>    
          </SortableContext>
          
          
        </DndContext>
    </>
    
  )
}

