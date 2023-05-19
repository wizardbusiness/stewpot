import React, {useState, useEffect, MouseEvent} from 'react'
import {
  Stack, 
  Box,
  Button, 
  TextField, 
  ListItemButton, 
  ListItemIcon,
  Checkbox,
  Typography,
  Chip
} from '@mui/material';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import Pantry from '../../views/Pantry';

const filter = createFilterOptions<pantryIngredient>();

const SearchBar = ({ingredients, checked, setChecked, handleToggle, toggleAddRemoveRow, justify, }) => {
  
  return (
    <Stack direction='row' justifyContent={justify} sx={{ width: '100%' }}>
    <Autocomplete
      disablePortal
      id='free-solo-ingredient-list'
      options={ingredients}
      sx={{ width: '100%' }}
      disableCloseOnSelect
      multiple
      value={checked}
      onChange={(e, newVal) => {
        setChecked(newVal);
      }
    }
      renderTags={(checked) => {
        return checked.map(ingredient => (
          <Chip key={ingredient} label={ingredient} onDelete={() => {
            setChecked([...checked].filter((el => el !== ingredient)));
            handleToggle(ingredient);
            toggleAddRemoveRow(ingredient);
          }}/>
        ));
      }}
      renderOption={(props, option) => (
        <Box component='li' {...props}>
          <ListItemIcon onClick={() => {
              handleToggle(option);
              toggleAddRemoveRow(option);
            }}
          >
            <Checkbox
              edge='start'
              checked={checked.indexOf(option) !== -1}
              tabIndex={-1}
              disableRipple
              // inputProps={{ 'aria-labelledby': labelId }}
            />
            {option}
          </ListItemIcon>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Search Pantry'
        />
      )}
    />
  </Stack> 
  )
};

export default SearchBar;
