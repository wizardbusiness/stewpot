import React, { SyntheticEvent, Dispatch, SetStateAction } from 'react';
import { Box, TextField, } from '@mui/material';
import { GridRowsProp } from '@mui/x-data-grid';

interface PantrySearchBarProps {
  placeholderText: string,
  ingredients: GridRowsProp,
  setResults: Dispatch<SetStateAction<GridRowsProp>>
}

const PantrySearchBar = ({placeholderText, ingredients, setResults} : PantrySearchBarProps) => {

  // only searches by title right now, would like to be able to search by other properties.
  const handleSearchByProperty = (e: SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const searchStr = target.value.toLowerCase().trim();
    const searchRes = ingredients.filter((ingredient)  => {
      const property = ingredient.name.toString().toLowerCase();
      const wordsInProperty = ingredient.name.toString().toLowerCase().split(' ');
      const allValidSearchCombs = new Set([...wordsInProperty, property]);    
      const searchedWords = [...allValidSearchCombs].filter((word: string) => word.startsWith(searchStr));
      return property.includes(searchedWords[0]);
    });
    setResults(searchRes);
    return;
  };

  return (
      <Box display='flex' alignItems='center' padding='2em 0 2em 0'>
        <TextField 
          onChange={handleSearchByProperty} 
          placeholder={placeholderText}
          variant='outlined' 
          size='medium'  
          sx={{width: '29%'}}
        />
      </Box>
  );
};

export default PantrySearchBar;