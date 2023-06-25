import {useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box, TextField, Button, Typography, styled} from '@mui/material';
import Tooltip, {tooltipClasses, TooltipProps} from '@mui/material/Tooltip';
import { DeleteOutline } from '@mui/icons-material';
import { GridRowsProp, GridColumnHeaderParams} from '@mui/x-data-grid';
import SearchBar from '../components/common/SearchBar';
import IngredientDataGrid from '../components/common/IngredientDataGrid';
import { newRow } from '../consts/interfaces/pantry';
import { RootState, AppDispatch } from '../consts/interfaces/redux';

// ingredient data for datagrid


export default function Pantry() {

  const selectColumns = (state: RootState) => state.pantry.ingredientColumns;
  const selectRows = (state: RootState) => state.pantry.ingredientRows;

  const rows = useSelector(selectRows);
  const columns = useSelector(selectColumns);

  const [ searchedRows, setSearchedRows ] = useState(rows);

  const dispatch = useDispatch();


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

  const handleDeleteRow = (e, id: number) => {
    dispatch({type: 'pantry/removeRow', payload: id});
    setSearchedRows(searchedRows.filter(row => row.id !== id));
  }

  const pantryColumns = [...columns, {
    headerAlign: 'center',
    field: '',
    renderHeader: (params: GridColumnHeaderParams) => <DeleteOutline />,
    renderCell: (cellParams) => {
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
      <SearchBar placeholderText='Search Ingredients' data={rows} dataProperty='name' setSearchResults={setSearchedRows} />
      <Button variant='contained' onClick={handleAddNewRow}>+ Add New Ingredient</Button>
      <IngredientDataGrid rows={searchedRows} columns={pantryColumns}/>
      <Outlet />
    </>
  )
}