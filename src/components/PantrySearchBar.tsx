import { useState, SyntheticEvent, Dispatch, SetStateAction } from 'react';
import { Box, TextField, Button,  } from '@mui/material';
import { GridRowsProp } from '@mui/x-data-grid';

interface PantrySearchBarProps {
  placeholderText: string,
  ingredients: GridRowsProp,
  setResults: Dispatch<SetStateAction<GridRowsProp>>
}

const PantrySearchBar = ({placeholderText, ingredients, setResults} : PantrySearchBarProps) => {

  const [ searchedStr, setSearchedStr ] = useState<string> ('');
  const trackerUserInput = (e: SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const searchStr = target.value.toLowerCase().trim();
    setSearchedStr(searchStr);
  };

  // only searches by title right now, would like to be able to search by other properties.
  const handleSearchByProperty = (e: SyntheticEvent): void => {
    e.preventDefault();
    const searchRes = ingredients.filter((ingredient)  => {
      const property = ingredient.name.toString().toLowerCase();
      const wordsInProperty = ingredient.name.toString().toLowerCase().split(' ');
      const allValidSearchCombs = new Set([...wordsInProperty, property]);    
      const searchedWords = [...allValidSearchCombs].filter((word: string) => word.startsWith(searchedStr));
      return property.includes(searchedWords[0]);
    });
    setResults(searchRes);
    return;
  };

  return (
    <form onSubmit={handleSearchByProperty}>
      <Box display='flex' alignItems='center' padding='2em 0 2em 0'>
        <TextField 
          onChange={trackerUserInput} 
          placeholder={placeholderText}
          variant='outlined' 
          size='medium'  
          sx={{width: '29%'}}
        />
        <Button type='submit' variant='contained' sx={{padding: '1em'}}size='large'>Go</Button>
      </Box>
    </form>
  );
};

export default PantrySearchBar;