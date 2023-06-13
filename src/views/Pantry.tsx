import {useState, useEffect, useCallback} from 'react';
import { Outlet } from 'react-router-dom';
import { Box, TextField, Button, Typography, styled} from '@mui/material';
import Tooltip, {tooltipClasses, TooltipProps} from '@mui/material/Tooltip';
import { DataGrid, GridColDef, GridRowsProp, GridPreProcessEditCellProps, GridRenderEditCellParams, GridEditInputCell} from '@mui/x-data-grid';
import { yellow } from '@mui/material/colors';
import SearchBar from '../components/common/SearchBar';
import { pantryRows, pantryColumns } from '../consts/dummyData';

interface newRow {
  id: number,
  name: string,
  qt: string,
  unit: string,
  location: string
}

const StyledDataGrid = styled(DataGrid)(({theme}) => ({
  '& .super-row-theme--new-rows': {
    backgroundColor: yellow[100],
    '&:hover': {
      backgroundColor: yellow[100],
    },
    '&.Mui-selected': {
      backgroundColor: yellow[200],
      '&:hover': {
        backgroundColor: yellow[200]
     }
    },
  },
}));

const StyledRejectionTooltip = styled(({className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{popper: className}} /> 
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText
  },
}));


const IngredientEditInputCell = (props: GridRenderEditCellParams) => {
  const { error } = props;
  return (
    <StyledRejectionTooltip open={!!error} title={error}>
        <GridEditInputCell {...props} />
    </StyledRejectionTooltip>
  )
}

const renderEditIngredient = (params: GridRenderEditCellParams) => {
  return (<IngredientEditInputCell {...params} />)
}


export default function Pantry() {
  // saved ingredients
  const [ allPantryColumns, setAllPantryColumns ] = useState<GridColDef[]>([]);
  const [ allPantryRows, setAllPantryRows ] = useState<GridRowsProp>([]);
  const [ searchedPantryRows, setSearchedPantryRows ] = useState<GridRowsProp>([]);
  const [ oldRowsLength, setOldRowsLength ] = useState<number>(0);

  const addNewRow = () => {
    const updatedRows = [...allPantryRows];

    const newRow: newRow = {
      id: allPantryRows.length + 1,
      name: 'New Ingredient',
      qt: '0',
      unit: '0',
      location: 'Set Location'
    };
    updatedRows.unshift(newRow);
    setAllPantryRows(updatedRows);
    setSearchedPantryRows(updatedRows);
  };

  const removeRow = useCallback((id: number) => {
    const updatedRows = [...allPantryRows].filter((row) => row.id !== id);
    setAllPantryRows(updatedRows);
    setSearchedPantryRows(updatedRows)
  }, [allPantryRows]);

  const preProcessEditCellProps = useCallback((params: GridPreProcessEditCellProps) => {
    const validateRow = (ing: string) => {
      const ingredients = allPantryRows.map(row => row.ingredient.toLowerCase());
      const exists = ingredients.includes(ing.toLowerCase());
      return (exists ? `${ing} in pantry` : null);
    }; 
    
    const errorMessage = validateRow(params.props.value.toString());
    return { ...params.props, error: errorMessage}
  }, [allPantryRows])

  useEffect(() => {
    setAllPantryRows(pantryRows);
    setSearchedPantryRows(pantryRows);
    setOldRowsLength(pantryRows.length);
  }, [])

  useEffect(() => {
    const updatedPantryColumns: GridColDef[] = [...pantryColumns]
    updatedPantryColumns.push({
      field: 'removeRow', 
      headerName: 'Remove Ingredient', 
      width: 150,
      renderCell: (params) => <Button onClick={() => removeRow(params.row.id)}>Delete</Button>
    });
    
    const procUpdatedPantryColumns = updatedPantryColumns.map(col => {
      return {
        ...col, 
        preProcessEditCellProps,
        renderEditCell: renderEditIngredient
      }
    }); 

    setAllPantryColumns(procUpdatedPantryColumns);
  }, [allPantryRows, preProcessEditCellProps, removeRow])

  return (  
    <Box sx={{padding: '2em', margin: '1em'}}>
      <Typography flexShrink={1} color='#616161' variant='h2'>Pantry</Typography>
        <SearchBar placeholderText='Search Ingredients' data={allPantryRows} dataProperty='name' setResults={setSearchedPantryRows} />
        <Button variant='contained' onClick={addNewRow}>+ Add New Ingredient</Button>
        <StyledDataGrid 
          getRowClassName={(params) => params.row.id > oldRowsLength ? `super-row-theme--new-rows` : `super-row-theme${params.row.id}` } 
          rows={searchedPantryRows} 
          columns={allPantryColumns} 
        />
      <Outlet />
    </Box>
  )
}