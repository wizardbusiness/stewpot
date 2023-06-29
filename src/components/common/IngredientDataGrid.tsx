import React, {useState, useCallback} from 'react';
import { DataGrid, GridPreProcessEditCellProps, GridRenderEditCellParams, GridEditInputCell} from '@mui/x-data-grid';
import Tooltip, {tooltipClasses, TooltipProps} from '@mui/material/Tooltip';
import { Box, Button, Typography, styled} from '@mui/material';
import { yellow } from '@mui/material/colors';
import { IngredientDataGridProps } from '../../consts/interfaces/componentInterfaces';


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

const IngredientDataGrid = ({rows, columns}: IngredientDataGridProps) => {

  const preProcessEditCellProps = (params: GridPreProcessEditCellProps) => {
    const validateRow = (ing: string) => {
      const ingredients = rows.map(row => row.ingredient.toLowerCase());
      const exists = ingredients.includes(ing.toLowerCase());
      return (exists ? `${ing} in pantry` : null);
    }; 
    
    const errorMessage = validateRow(params.props.value.toString());
    return { ...params.props, error: errorMessage}
  }

  const pantryColumns = columns.map((column) => ({...column, preProcessEditCellProps, renderEditCell: renderEditIngredient}))

  return (
    <Box sx={{height: '60%', overflow: 'hidden'}}>
      <StyledDataGrid 
        getRowClassName={(params) => params.row.name === 'New Ingredient' ? `super-row-theme--new-rows` : `super-row-theme${params.row.id}` } 
        rows={rows} 
        columns={pantryColumns} 
      />
     </Box>

    
  )
}

export default IngredientDataGrid;