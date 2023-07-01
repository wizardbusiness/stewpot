import {useState, SyntheticEvent} from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Typography} from '@mui/material';
import Tooltip, {tooltipClasses, TooltipProps} from '@mui/material/Tooltip';
import { DeleteOutline } from '@mui/icons-material';
import { GridRowsProp, GridRenderCellParams, GridRowId} from '@mui/x-data-grid';
import PantrySearchBar from '../components/PantrySearchBar';
import IngredientDataGrid from '../components/common/IngredientDataGrid';
import { newRow } from '../consts/interfaces/pantry';
import { useAppDispatch, useAppSelector } from '../hooks';

export default function Pantry() {

  const columns = useAppSelector((state) => state.pantry.ingredientColumns);
  const rows = useAppSelector((state) => state.pantry.ingredientRows); 

  const [ searchedRows, setSearchedRows ] = useState<GridRowsProp>(rows);

  const dispatch = useAppDispatch();


  const handleAddNewRow = () => {

    const newRow: newRow = {
      id: rows.length + 1,
      name: 'New Ingredient',
      qt: '0',
      unit: '0',
      location: 'Set Location'
    }
    dispatch({type: 'pantry/addRow', payload: newRow})
    setSearchedRows([newRow, ...searchedRows])
  }

  const handleDeleteRow = (e: SyntheticEvent, id: GridRowId) => {
    e.preventDefault();
    dispatch({type: 'pantry/removeRow', payload: id});
    setSearchedRows(searchedRows.filter(row => row.id !== id));
  }

  const pantryColumns = [...columns, {
    headerAlign: 'center',
    field: '',
    renderHeader: () => <DeleteOutline />,
    renderCell: (cellParams: GridRenderCellParams) => {
      return (
        <Button
          variant='outlined'
          onClick={(e) => {
            handleDeleteRow(e, cellParams.id);
          }}
        >
          Delete
        </Button>
      )
    }
  }];

  return (  
    <>
      <Typography flexShrink={1} color='#616161' variant='h2'>Pantry</Typography>
      <PantrySearchBar placeholderText='Search Ingredients' ingredients={rows} setResults={setSearchedRows} />
      <Button variant='contained' onClick={handleAddNewRow}>+ Add New Ingredient</Button>
      <IngredientDataGrid rows={searchedRows} columns={pantryColumns}/>
      <Outlet />
    </>
  )
}