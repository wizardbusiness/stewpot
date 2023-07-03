import { ReactNode } from 'react';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Icon from '@mdi/react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { mdiGlasses } from '@mdi/js';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccounts';
import { mdiNutrition, mdiNoodles, mdiBowlMix, mdiTestTube } from '@mdi/js';
import { Button } from '@mui/material';
import { ingredientInterface } from './interfaces/componentInterfaces';
import { recipeInterface } from './interfaces/componentInterfaces';

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
    icon: <Icon path={mdiNutrition} size={2} />,
    label: 'Pantry',
    contents: 'Pantry',
    route: 'pantry',
  },
  {
    id: 1,
    icon: <Icon path={mdiNoodles} size={2} />,
    label: 'Favorites',
    contents: 'Favorited recipes',
    route: 'favorites',
  },
  {
    id: 2,
    icon: <Icon path={mdiBowlMix} size={2} />,
    label: 'Find Recipes',
    contents: 'Find recipes',
    route: 'find-recipe' ,
  },
  {
    id: 3,
    icon: <Icon path={mdiTestTube} size={2} />,
    label: 'Generate Recipes',
    contents: 'Generate recipes',
    route: 'generate-recipe',
  },
];

//sidebar width
export const drawerWidth = 290;

interface tabMock {
  id: string, 
  icon: ReactNode,
  label: string,
}

interface settingsMock {
  tabsMock: tabMock[],
}

export const settingsMock: settingsMock = {
  tabsMock: [
    {
      id: 'profile-section', 
      icon: <AccountCircleOutlinedIcon />,
      label: 'Profile',
    },
    {
      id: 'theme-section',
      icon: <DarkModeOutlinedIcon />,
      label: 'Theme',
    },
    
    {
      id: 'accessibility-section',
      icon: <Icon size={1.1} path={mdiGlasses} />,
      label: 'Accessibility',
    },
    {
      id: 'account-info-section',
      icon: <ManageAccountsOutlinedIcon />,
      label: 'Account Info',
    },
  ]
}


// Pantry

export const pantryColumns: GridColDef[] = [
  {field: 'name', headerName: 'Ingredient', width: 200, editable: true},
  {field: 'qt', headerName: 'Qt.', width: 50, editable: true},
  {field: 'unit', headerName: 'Unit', width: 150, editable: true},
  {field: 'location', headerName: 'Location', width: 150, editable: true},
  {
    field: 'delete', 
    headerName: '', 
    width: 150, 
    renderCell: (cellValues) => {
      return (
        <Button
          variant='contained'
        >Delete</Button>

      )
    }
  }
];

export const pantryRows: GridRowsProp = [
  {id: 0, name: 'Olive Oil', qt: 1, unit: '', location: 'Counter'},
  {id: 1, name: 'Bread', qt: 1, unit: 'Loaf', location: 'Freezer'},
  {id: 2, name: 'Avocado', qt: 1, unit: '', location: 'Counter'},
  {id: 3, name: 'Eggs', qt: 1, unit: 'Dozen', location: 'Fridge'},
  {id: 4, name: 'Mixed Greens', qt: 1, unit:'Container', location: 'Fridge'},
  {id: 5, name: 'Salt', qt: 1, unit: 'Thighs', location: 'Fridge'},
  {id: 6, name: 'Lemon', qt: 1, unit: '', location: 'Fridge'},
  {id: 7, name: 'Rapini', qt: 1, unit: 'Bunch', location: 'Fridge'},
  {id: 8, name: 'Chuck Roast', qt: 1, unit: 'lb', location: 'Fridge'},
  {id: 9, name: 'Chicken', qt: 1, unit: 'lb', location: 'Fridge'},
  {id: 11, name: 'Pepper', qt: 1, unit: '', location: 'Counter'},
  {id: 12, name: 'Butter', qt: 1, unit: '', location: 'Counter'},
  {id: 13, name: 'Cheddar', qt: 1, unit: '', location: 'Fridge'}
];


export const commonIngredientRows: GridRowsProp = [
  {id: 14, name: 'Salt', qt: 1, unit: '', location: 'Counter'},
  {id: 15, name: 'Pepper', qt: 1, unit: '', location: 'Counter'},
  {id: 16, name: 'Butter', qt: 1, unit: '', location: 'Counter'},
  {id: 17, name: 'Olive Oil', qt: 1, unit: '', location: 'Counter'},
];

// Favorites

export interface favoritesInterface {
  id: number,
  title: string,
  image: string
}

export const favorites: recipeInterface[] = [
  {
    id: 1,
    title: 'Salmon Filet with Asparagus',
    image: '',
  },
  {
    id: 2,
    title: 'Barley Beef Stew',
    image: '',
  },
  {
    id: 3,
    title: 'Terriyaki Short Ribs',
    image: '',
  },
  {
    id: 4,
    title: 'Turmeric Chicken Soup',
    image: '',
  },
  {
    id: 5,
    title: 'Pot Roast with Potatoes',
    image: '',
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


