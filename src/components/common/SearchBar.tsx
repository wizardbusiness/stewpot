import { useState, SyntheticEvent, Dispatch, SetStateAction } from 'react';
import { Box, TextField, Button,  } from '@mui/material';
import { GridRowsProp } from '@mui/x-data-grid';
import { favoritesInterface } from '../../consts/dummyData';

interface SearchBarInterface {
  placeholderText: string,
  dataProperty: keyof favoritesInterface;
  setResults: Dispatch<SetStateAction<favoritesInterface[]>> | Dispatch<SetStateAction<GridRowsProp>>
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
    const searchRes = data.filter((obj)  => {
      const property = obj[dataProperty].toString().toLowerCase();
      const wordsInProperty = obj[dataProperty].toString().toLowerCase().split(' ');
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