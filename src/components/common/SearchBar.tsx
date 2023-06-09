import { useState, SyntheticEvent } from 'react';
import { Box, TextField, Button,  } from '@mui/material';
import { GridRowsProp } from '@mui/x-data-grid';

interface SearchBarInterface {
  placeholderText: string,
  data: GridRowsProp, 
  dataProperty: string,
  setResults: (results: GridRowsProp) => void;
}

const SearchBar = ({placeholderText, data, dataProperty, setResults} : SearchBarInterface) => {

  const [ searchedStr, setSearchedStr ] = useState<string> ('');
  const trackerUserInput = (e: SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const searchStr = target.value.toLowerCase().trim();
    setSearchedStr(searchStr);
  };

  const handleSearchByProperty = (e: SyntheticEvent): void => {
    e.preventDefault();
    const searchRes: GridRowsProp = data.filter(obj => {
      const property: string = obj[dataProperty].toLowerCase();
      const wordsInProperty = obj[dataProperty].toLowerCase().split(' ');
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

export default SearchBar;