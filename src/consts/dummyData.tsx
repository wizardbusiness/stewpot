import { ReactNode } from 'react';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Icon from '@mdi/react';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { mdiNutrition, mdiNoodles, mdiBowlMix, mdiTestTube } from '@mdi/js';

export interface viewMocksInterface {
  id: number;
  icon: ReactNode;
  label: string;
  contents: string;
  route: string; 
}

// Views

export const viewMocks: viewMocksInterface[] = [
  {
    id: 0,
    icon: <Icon path={mdiNutrition} size={1} />,
    label: 'Pantry',
    contents: 'Pantry',
    route: 'pantry',
  },
  {
    id: 1,
    icon: <Icon path={mdiNoodles} size={1} />,
    label: 'Favorites',
    contents: 'Favorited recipes',
    route: 'favorites',
  },
  {
    id: 2,
    icon: <Icon path={mdiBowlMix} size={1} />,
    label: 'Find Recipes',
    contents: 'Find recipes',
    route: 'find-recipe' ,
  },
  {
    id: 3,
    icon: <Icon path={mdiTestTube} size={1} />,
    label: 'Generate Recipes',
    contents: 'Generate recipes',
    route: 'generate-recipe',
  },
];

// Pantry

export const pantryColumns: GridColDef[] = [
  {field: 'ingredient', headerName: 'Ingredient', width: 200, editable: true},
  {field: 'qt', headerName: 'Qt.', width: 50, editable: true},
  {field: 'unit', headerName: 'Unit', width: 150, editable: true},
  {field: 'location', headerName: 'Location', width: 150, editable: true},
  {field: '', headerName: '', width: 100, renderCell: () => <Button sx={{color: 'grey' , width: 30, height: 40, padding: 'none'}}><DeleteOutlineIcon/></Button>},
];

export const pantryRows: GridRowsProp = [
  {id: 1, ingredient: 'Bread', qt: 1, unit: 'Loaf', location: 'Freezer'},
  {id: 2, ingredient: 'Avocado', qt: 1, unit: '', location: 'Counter'},
  {id: 3, ingredient: 'Eggs', qt: 1, unit: 'Dozen', location: 'Fridge'},
  {id: 4, ingredient: 'Mixed Greens', qt: 1, unit:'Container', location: 'Fridge'},
  {id: 5, ingredient: 'Salt', qt: 1, unit: 'Thighs', location: 'Fridge'},
  {id: 6, ingredient: 'Lemon', qt: 1, unit: '', location: 'Fridge'},
  {id: 7, ingredient: 'Rapini', qt: 1, unit: 'Bunch', location: 'Fridge'},
  {id: 8, ingredient: 'Chuck Roast', qt: 1, unit: 'lb', location: 'Fridge'},
  {id: 9, ingredient: 'Chicken', qt: 1, unit: 'lb', location: 'Fridge'},
];

// Favorites

interface favoritesInterface {
  id: number,
  name: string,
}

export const favorites: favoritesInterface[] = [
  {
    id: 1,
    name: 'Salmon Filet with Asparagus',
  },
  {
    id: 2,
    name: 'Barley Beef Stew',
  },
  {
    id: 3,
    name: 'Terriyaki Short Ribs',
  },
  {
    id: 4,
    name: 'Turmeric Chicken Soup',
  },
  {
    id: 5,
    name: 'Pot Roast with Potatoes',
  },
];

// find recipes
export type pantryIngredient = string;
export const pantryIngredients: pantryIngredient[] = [
  'Bread',
  'Avocado',
  'Eggs',
  'Mixed Greens',
  'Chicken',
];

