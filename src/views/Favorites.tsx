import {useState, useEffect} from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  Sensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import {Box, Grid, Typography, Stack} from '@mui/material';
import RecipeCard from '../components/common/RecipeCard';
import SearchBar from '../components/common/SearchBar';
import { favorites, favoritesInterface } from '../consts/dummyData';

export default function Favorites() {
  // saved recipes
  const [recipes, setRecipes ] = useState<favoritesInterface[]>(favorites);
  const [ searchedRecipes, setSearchedRecipes ] = useState<favoritesInterface[]>([]);
  const [ sortedRecipes, setSortedRecipes ] = useState<number[]>([1, 2, 3, 4, 5]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (e) => {
    const {active, over} = e;
    if (active.id !== over.id) {
      setSortedRecipes(item => {
        const oldIndex = item.indexOf(active.id);
        const newIndex = item.indexOf(over.id);

        return arrayMove(sortedRecipes, oldIndex, newIndex);
      })
    }
  }

  useEffect(() => {
    setSearchedRecipes(recipes);
  }, [recipes])

  useEffect(() => {
    const sortedRecipes = searchedRecipes.map(recipe => recipe.id);
    setSortedRecipes(sortedRecipes)
    console.log(sortedRecipes)
  }, [searchedRecipes]);

  return (
    <Box sx={{padding: '2em'}}>
      <Typography paddingBottom='0.5em' color='#616161' variant='h2'>Favorites</Typography>
      <SearchBar placeholderText='Search Recipes' data={recipes} dataProperty='name' setResults={setSearchedRecipes} />
      <Box sx={{width: '100%', height: '2em'}}/>
        <DndContext 
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          
          <SortableContext
            items={sortedRecipes}
            strategy={horizontalListSortingStrategy}
          >
            <Grid container gap={5}>
            {sortedRecipes.map((id, index) => (
            <RecipeCard key={id} id={id} starred/>
          ))}
            </Grid>
          
          </SortableContext>
          
          
        </DndContext>
    </Box>
    
  )
}

