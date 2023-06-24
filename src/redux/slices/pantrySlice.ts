import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Action } from '@reduxjs/toolkit';

const initialState = {
  pantryColumns: [
    {field: 'name', headerName: 'Ingredient', width: 200, editable: true},
    {field: 'qt', headerName: 'Qt.', width: 50, editable: true},
    {field: 'unit', headerName: 'Unit', width: 150, editable: true},
    {field: 'location', headerName: 'Location', width: 150, editable: true},
  ],
  pantryRows: [
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
  ],
  commonIngredients: ['salt', 'pepper', 'butter', 'olive oil'],
};

const pantryReducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch(type){
    case('pantry/addRow'): {
      return {
        ...state,
        pantryRows: [...state.pantryRows, payload]
      }
    }
    case('pantry/removeRow'): {
      return {
        ...state,
        pantryRows: state.pantryRows.filter(row => row.id !== payload)
      }
    }
    case('pantry/editRow'): {
      return {
        ...state,
        pantryRows: state.pantryRows.map(row => row.id === payload.id ? payload : row)
      }
    }
    default: {
      return state;
    }
  }
}

export default pantryReducer;