import React, { useState, SyntheticEvent, Dispatch, SetStateAction } from 'react';
import { Box, TextField, Button,  } from '@mui/material';
import { recipeInterface } from '../../consts/interfaces/componentInterfaces';

interface SearchBarInterface {
  placeholderText: string,
  recipes: recipeInterface[],
  setResults: Dispatch<SetStateAction<recipeInterface[]>>
}

const SearchBar = ({placeholderText, recipes, setResults} : SearchBarInterface) => {

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
    const searchRes = recipes.filter((recipe)  => {
      const property = recipe.title.toString().toLowerCase();
      const wordsInProperty = recipe.title.toString().toLowerCase().split(' ');
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